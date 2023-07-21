import React, { useState } from 'react'
import { emailValidator,passwordValidator } from '../component/regexValidator';
import { useNavigate} from "react-router-dom"

export default function LoginPage() {
  let navigate=useNavigate();

	const [input, setInput] =useState({ email: "", password: ""});

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	React.useEffect(()=>{
		if(localStorage.getItem('auth')) navigate('/')
	},[])

	const formSubmitter = e => {
    console.log(input);

		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have numbers'
			);

		// setsuccessMessage('Successfully Validated');
		if(input.email !== 'admin@a.com' || input.password=='password@1') return seterrorMessage('Invalid email or password');

		navigate('/')
		localStorage.setItem('auth', true)

	};
  return (
    <div className='container'>

<section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: '23rem'}} onSubmit={formSubmitter}>

            <h3 className="fw-normal mb-3 pb-3" >Log in</h3>

            {errorMessage.length > 0 && <div style={{marginBottom: '10px', color: 'red'}}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}

            <div className="form-outline mb-4" data-validate="email is required">
              <input type="email" name="email" className="form-control form-control-lg" onChange={(e)=>handleChange(e)} />
              <label className="form-label" htmlFor="form2Example18">Email address</label>
            </div>

            <div className="form-outline mb-4" data-validate="Password is required">
              <input type="password" name="password" className="form-control form-control-lg" onChange={(e)=>handleChange(e)} />
              <label className="form-label" htmlFor="form2Example28">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p>Don't have an account? <a href="/register" className="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://images.pexels.com/photos/8534461/pexels-photo-8534461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Login image" className="w-100 vh-100" style={{"objectFit": 'cover', "objectPosition": 'left'}} />
      </div>
    </div>
  </div>
</section>
</div>
)
}
