import React, { createContext, useState } from "react";

export const TheContextApi = createContext();

const TheContext = ({ children }) => {
  
  
  const [loginSignUpLoading, setLoginSignUpLoading] = useState(false);
  const [keyword, setKeyword] = useState()




  return (
    <>
      <TheContextApi.Provider
        value={{
       
          loginSignUpLoading,
          setLoginSignUpLoading,
          keyword, 
          setKeyword,
         
         
    


        }}
      >
        {children}
      </TheContextApi.Provider>
    </>
  );
};

export default TheContext;
