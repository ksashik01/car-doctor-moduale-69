import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Bookingrow from "../Home/BookingRow/Bookingrow";




const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    console.log (url)

    useEffect(() =>{

        fetch(url)
        .then (res => res.json())
        .then (data => setBookings(data))


    },[]);

    // Delete a service Booking.............

    const handleDeleted = id =>{
        const proceed =confirm ('Are You Sure you want to deletd');

        if (proceed){

            fetch (`http://localhost:5000/bookings/${id}`, {
                method:'DELETE'
            })
            .then (res => res.json())
            .then (data => {
            console.log (data);
            if(data.deletedCount > 0){

                alert('deleted succcesfully');

                const remaining = bookings.filter(booking => booking._id !==id);

                setBookings(remaining)

            }

            })

        }
    };



    const handleConfirm = id =>{
        fetch (`http://localhost:5000/bookings/${id}`,{

        method:'PATCH',
        headers:{
        'content-type': 'application/json'


        },

        body:JSON.stringify({status:'confirm'})


        })

        .then (res=> res.json())
        .then (data => {
            console.log (data);
            if(data.modifiedCount > 0){
                // updated status 

                const remaining = bookings.filter(booking => booking._id !== id);

                const updated = bookings.find(booking => booking._id !== id);

                updated.status ='confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)


            }
        })
        

    }



    return (
        <div>

            <h2>Your Booking:{bookings.length}</h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  
     {

bookings.map (booking => <Bookingrow 
key ={booking._id}
booking ={booking}
handleDeleted={handleDeleted}
handleConfirm={handleConfirm}
>


</Bookingrow>)

     }
     
    
 
     
    </tbody>
   
   
    
  </table>
</div>
            
        </div>
    );
};

export default Bookings;