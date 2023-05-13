import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const CheckOut = () => {
    const service = useLoaderData();
    const {title,price,date} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = form.email.value;

            const booking ={
                    name,
                    date,
                    email

            }

            console.log (booking);

            fetch('http://localhost:5000/bookings',{
                method:'POST',
                headers:{
                        'content-type': 'application/json'
                },

                body:JSON.stringify(booking)

            })
            .then (res => res.json())
            .then (data => {
                console.log (data)
            })
    }

    return (
        <div>
            <h2>Book Service:{title}</h2>

  <form onSubmit={handleBookService}> 
      <div className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.name} placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="amount" defaultValue={'$'+price} placeholder="Amount" className="input input-bordered" />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email"  placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" defaultValue={date} className="input input-bordered" />
         
        </div>

        
        <div className="form-control mt-6 w-full">
          <input className="btn btn-primary" type="submit" value="Order Confirm" />
        </div>
      </div>
      </form>
    </div>
  






        
    );
};

export default CheckOut;