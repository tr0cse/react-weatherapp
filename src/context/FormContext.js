import { useState, createContext, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [city, setCity] = useState("Bursa");

  const values = {
    city,
    setCity,
  };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
