import CompanyInfo from "../Components/CompanyInfo";
import { useNavigate } from 'react-router-dom';

const Company = () => {

  const navigate = useNavigate();
  return (
    <div className=" min-h-screen w-screen bg-gray-200 flex justify-center items-center ">
      <section className="text-center w-[90%] max-w-3xl my-5">
        <CompanyInfo />
        <button onClick={() => navigate(-1)} className="h-[60px] w-[95%] lg:w-[35%] block rounded-[10px] bg-gray-700 border border-gray-300 text-gray-200 lg:text-xl">
          Select another company
        </button>
      </section>
    </div>
  );
};

export default Company;
