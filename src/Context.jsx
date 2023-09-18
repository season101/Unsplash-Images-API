import { createContext, useContext } from 'react';

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ test: 'hello' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default ContextProvider;
