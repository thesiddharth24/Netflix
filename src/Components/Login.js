import React , {useState} from 'react'
import Header from './Header';



function Login() {

    const [isSignInForm , setIsSignInForm] = useState(true)

    const handleOnclick =()=> {
     setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className="absolute w-full h-full">
            <img 
            className="w-full h-full"
            src="https://bigtechquestion.com/wp-content/uploads/2020/05/netflix.jpg"
            alt="BG-Image"
            />
        </div>
        <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
            <input type="text" placeholder="Name" 
                className="p-4 my-4 w-full bg-gray-600"/>
            }
            <input type="text" placeholder="Email" 
                className="p-4 my-4 w-full bg-gray-600"/>
            <input type="text" placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-600"/>
            <button 
                className="p-4 my-6 bg-red-700 rounded-lg w-full">{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={handleOnclick}
            >{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? SignIn"}
            </p>
        </form>

    </div>
  )
}

export default Login