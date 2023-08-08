import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
        <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          MuscleMartMM
        </Link>
        <div className="md:flex space-x-4">
        <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/signup" className="text-white hover:underline">
            Signup
          </Link>
          <Link to="/products" className="text-white hover:underline">
            Products
          </Link>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
          <Link to="/cart" className="text-white hover:underline">
          <i class="fa-solid fa-cart-shopping" style={{color: "#f6f9fd",}}></i>
          {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#f6f9fd",}} />           */}
          </Link>
        </div>
      </div>
    </nav>
    <section class="bg-gray-50 dark:bg-slate-100">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-black">Remember me</label>
                          </div>
                      </div>
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                      <Link to='/newpassword' class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-black">
                      Don’t have an account yet? <Link to='/signup' class="font-medium text-primary-600 hover:underline dark:text-blue-500">Signup</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}

export default Login