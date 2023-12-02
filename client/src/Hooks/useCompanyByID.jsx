import { useState } from "react";
import axios from "axios";

const useCompanyByID = () => {
  
  // State variables for loading status, error status, and company data
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState("");

  //Function to fetch company data by ID.
  const getCompanyById = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/company/${id}`);
      setCompany(data.fields);
      setLoading(null);
      return;
    } catch (error) {
      setLoading(null);
      if (error.response) {
        setError({ error: "Sorry!, this company does not exist" });
        setTimeout(() => {
          setError(null);
        }, 3000);
      } else {
        setError({
          error:
            "It seems we are experiencing some issues, please try again later.",
        });
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
      throw new Error();
    }
  };

  return { loading, error, getCompanyById, company };
};

export default useCompanyByID;
