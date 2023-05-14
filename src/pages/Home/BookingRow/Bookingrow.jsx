

const Bookingrow = ({booking,handleDeleted,handleConfirm}) => {
    const {name, email,date,price,img,_id,status} = booking;

    

    return (
        <tr>
        <th>
          <label>
          <button onClick={() => handleDeleted(_id)} className="btn btn-circle btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          
        </td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
{
status === 'confirm'? <span className="font-bold text-primary"> confirmed</span>:
<button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">pending</button>

}
          

        </th>
      </tr>
    );
};

export default Bookingrow;