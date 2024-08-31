import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalStateProps {
  children: ReactNode;
}

interface GlobalStateContextProps {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>>;
    taskfilter: string;
    setTaskFilter: React.Dispatch<React.SetStateAction<string>>;
  }

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<GlobalStateProps> = ({ children }) => {
  const [id, setId] = useState<string>('');
  const [taskfilter, setTaskFilter] = useState<any>({});

  return (
    <GlobalStateContext.Provider value={{ id, setId, taskfilter, setTaskFilter }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStatetask = (): GlobalStateContextProps => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalStatetask must be used within a GlobalStateProvider');
  }
  return context;
};