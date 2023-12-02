import React, { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [companies, setCompanies] = useState([]);

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updateCompanies = (newCompanies) => {
    setCompanies(newCompanies);
  };

  return (
    <CompanyContext.Provider
      value={{
        email,
        companies,
        updateEmail,
        updateCompanies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => {
  return useContext(CompanyContext);
};
