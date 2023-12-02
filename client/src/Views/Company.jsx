import CompanyInfo from "../Components/CompanyInfo";
import { useNavigate } from 'react-router-dom';

const Company = () => {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen w-screen bg-gray-200 flex justify-center items-center ">
      <section className="text-center w-[90%] my-4 lg:my-5 flex justify-center items-center flex-col ">
        <CompanyInfo />
        <button onClick={() => navigate(-1)} className="h-[60px] w-[95%] lg:w-[35%] block rounded-[10px] bg-gray-700 border border-gray-300 text-gray-200 lg:text-xl">
        <i className="bi bi-arrow-left mr-2"></i> Select another company
        </button>
      </section>
    </div>
  );
};

export default Company;
