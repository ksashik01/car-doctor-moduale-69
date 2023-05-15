import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';


const Login = () => {

  const {signIn} = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
      event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log (name, email, password);
        signIn(email, password) 
        .then (result =>{
          const user = result.user;
          console.log (user);
          navigate(from, {replace:true})
        })
        .catch (error => console.log (error));



     


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
      <p className='my-4 text-center'>New to Car Doctors?</p>
      <Link className='text-orange-600 font-bold text-center' to="/signup">
      Sign Up here
      </Link>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Login;