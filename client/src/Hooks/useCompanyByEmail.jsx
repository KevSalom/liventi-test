import { useEffect, useState } from "react";
import { useCompanyContext } from "../state/CompanyContext";
import axios from "axios";

const useCompanyByEmail = () => {
  const { updateEmail, updateCompanies } = useCompanyContext();
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getCompaniesByEmail = async (email) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/companies/${email}`);
      updateEmail(email)
      updateCompanies(data.records)
      setLoading(null);
    } catch (error) {
        setLoading(null);
        if(error.response.status){
          setError({ error: 'Sorry!, this email is not registered' });
          setTimeout(() => {
            setError(null);
          }, 3000);
        } else{
          setError({ error: 'It seems we are experiencing some issues, please try again later.' });
          setTimeout(() => {
            setError(null);
          }, 3000);
        }
        throw new Error()
    }
  };

  

  return { loading, error, getCompaniesByEmail };
};

export default useCompanyByEmail;
