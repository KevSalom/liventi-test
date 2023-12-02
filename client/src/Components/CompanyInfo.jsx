import React from "react";
import { useEffect } from "react";
import DataFromCompany from "./DataFromCompany";
import { useParams } from "react-router-dom";
import useCompanyByID from "../Hooks/useCompanyByID";
import Spinner from "react-bootstrap/Spinner";

const CompanyInfo = () => {
  const { loading, error, getCompanyById, company } = useCompanyByID();
  const params = useParams();

  // Effect to get company information when the component mounts
  useEffect(() => {
    getCompanyById(params.id);
  }, []);

  return (
    <div className="w-[95%]  bg-gray-50 mt-10 mb-2 rounded-[10px] shadow-lg pt-1 min-h-[650px] md:min-h-[500px]  mx-auto ">
       {/* Display a spinner while loading */}
      {loading ? (
        <p className="mt-52">
          <Spinner />
        </p>
      ) : null}

      {/* Display an error message if there is an error */}
      {error ? <p className="mt-52">{error.error}</p> : null}

      {/* Display company information if available */}
      {company && (
        <>
          <h1 className="uppercase  text-xl  md:text-2xl font-semibold text-left mx-8 my-3 text-gray-800 -tracking-tight">
            <i className="bi bi-buildings text-gray-800 mr-2"></i>
            {company.company_name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 mx-auto">
            <DataFromCompany
              title={`${company.first_name} ${company.last_name}`}
              type={"Ful Name"}
            />
            <DataFromCompany title={company.phone1} type={"Phone"} />
            <DataFromCompany title={company.state} type={"State"} />
            <DataFromCompany title={company.county} type={"County"} />
            <DataFromCompany title={company.address} type={"Address"} />
            <DataFromCompany title={company.zip} type={"Zip"} />
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyInfo;
