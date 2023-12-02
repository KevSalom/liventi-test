import React from "react";
import { useRef } from "react";
import useCompanyByEmail from "../Hooks/useCompanyByEmail";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";


const Home = () => {
  // Custom hook to get companies by email
  const { loading, error, getCompaniesByEmail } = useCompanyByEmail();

  // useRef hook to get the value of the email input field
  const emailRef  = useRef()

  // useNavigate hook for routing
  const navigate = useNavigate()

  //Fetches companies by email and navigates to the select page.
  const handleGetCompanies = async (event) => {
    event.preventDefault()
    try {
    const email = emailRef.current.value
    await getCompaniesByEmail(email);
    navigate('/select')
    } catch (error) {
      console.error(error)
    }
    
  };

  return (
    <div className=" h-screen w-screen bg-gray-800  pt-32 md:flex justify-center items-center  md:pt-0">
        <section className="text-center w-[90%]  mx-auto">
            <h2 className="text-gray-400 font-light text-2xl lg:text-3xl">Welcome, Seller!</h2>
            <h1 className="text-gray-200 text-5xl lg:text-6xl">Enter your email address:</h1>
            <form className="grid grid-flow-row max-w-md mx-auto mt-10 gap-2 text-lg " onSubmit={handleGetCompanies}>
                <input type="email" className="h-[60px] rounded-[10px] bg-gray-300 p-4 pl-4 outline-none text-gray-700 " placeholder="your@gmail.com" required ref={emailRef} />
                <button className="h-[60px] rounded-[10px] bg-gray-700 border border-gray-300 text-gray-200 lg:text-xl">{!loading?'Submit':<Spinner/>} </button>
                <p className="text-gray-200">{error?.error} </p>
            </form>
        </section>
      
    </div>
  );
};

export default Home;
