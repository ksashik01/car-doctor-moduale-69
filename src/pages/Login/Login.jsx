import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = event =>{

    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2">
     <img src={img} alt="" />
     
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleLogin}> 
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;