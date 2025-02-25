import React from 'react';

const SignIn = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold mb-10">Sign In </h1>
        </div>
        {/* <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
            </div>
            <div className="relative">
              <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div className="relative">
              <button className="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="w-full flex justify-center">
        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <svg
      className="h-6 w-6 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="-0.5 0 48 48"
    >
      <title>Google-color</title>
      <g fill="none" fillRule="evenodd">
        <g>
          <path
            d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.262 2.407 10.388l7.905-6.051c-.448-1.365-.698-2.821-.698-4.337"
            fill="#FBBC05"
          ></path>
          <path
            d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.093l6.836-6.826C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.823-5.532 7.018-9.511 13.182-9.511"
            fill="#EB4335"
          ></path>
          <path
            d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.038c3.822 7.761 11.803 13.072 21.09 13.072 5.732 0 11.204-2.035 15.311-5.848l-7.507-5.804c-2.118 1.335-4.785 2.053-7.804 2.053"
            fill="#34A853"
          ></path>
          <path
            d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.015l7.507 5.804c4.314-4.004 7.12-9.969 7.12-16.619"
            fill="#4285F4"
          ></path>
        </g>
      </g>
    </svg>
          <span>Continue with Google</span>
        </button>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;