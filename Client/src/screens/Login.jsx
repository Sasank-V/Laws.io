import React, { useState } from 'react';
import Background from "../assets/BackgroundLogin.png";

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage(''); // Clear error message when switching forms
  };

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // Check if password matches confirm password
    if (signUpData.password !== signUpData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // If passwords match, proceed
    console.log('Sign Up data:', signUpData);
    setErrorMessage(''); // Clear any error messages
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen" 
      style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full max-w-xl p-8 space-y-6 bg-[#0F152D] rounded-[60px] shadow-md flex flex-col sm:m-4 m-4" style={{ boxShadow: '8px 20px 22px -13px #FFD700, 0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
        <h2 className="text-2xl sm:text-5xl font-bold text-center text-white ">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>

        {isSignUp ? (
          <form onSubmit={handleSignUpSubmit} className="space-y-4 text-white w-10/12 justify-center m-auto">
            <div className="flex flex-col items-start">
              <label htmlFor="username" className="block text-sm md:text-base font-medium">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder='Username'
                value={signUpData.username}
                onChange={handleSignUpChange}
                className="w-full p-2 mt-1 border rounded text-black"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="block text-sm md:text-base font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='example@gmail.com'
                value={signUpData.email}
                onChange={handleSignUpChange}
                className="w-full p-2 mt-1 border rounded text-black"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password" className="block text-sm md:text-base font-medium">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder='must be 8 characters'
                value={signUpData.password}
                onChange={handleSignUpChange}
                className="w-full p-2 mt-1 border rounded text-black"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="confirmPassword" className="block text-sm md:text-base font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder='repeat password'
                value={signUpData.confirmPassword}
                onChange={handleSignUpChange}
                className="w-full p-2 mt-1 border rounded text-black"
                required
              />
            </div>

            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

            <div className='w-full flex'>
              <button
                type="submit"
                className="w-4/5 p-2 text-black bg-[#FFD700] rounded hover:bg-[#06870B] hover:text-white ml-auto mr-auto font-semibold sm:text-2xl text:xl"
              >
                Sign Up!
              </button>
            </div>
            <p className="text-sm md:text-base text-center">
              Already have an account?{' '}
              <button
                type="button"
                onClick={toggleForm}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-white w-10/12 justify-center m-auto">
            <div className="flex flex-col items-start">
              <label htmlFor="username" className="block text-sm md:text-base font-medium">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder='Name'
                value={loginData.username}
                onChange={handleLoginChange}
                className="w-full p-2 mt-1 border rounded text-black"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password" className="block text-sm md:text-base font-medium">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder='Password'
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full p-2 mt-1 border rounded text-black"
                required
              />
            </div>
            <div className='w-full flex'>
              <button
                type="submit"
                className="w-4/5 p-2 text-black bg-[#FFD700] rounded hover:bg-[#06870B] hover:text-white ml-auto mr-auto font-semibold sm:text-2xl text:xl"
              >
                Login!
              </button>
            </div>
            <p className="text-sm md:text-base text-center">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={toggleForm}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
