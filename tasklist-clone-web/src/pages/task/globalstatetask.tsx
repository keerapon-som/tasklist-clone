import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { TaskData } from '@/type/type'

interface GlobalStateProps {
  children: ReactNode;
}

interface GlobalStateContextProps {
    selectedTaskData: TaskData;
    setselectedTaskData: React.Dispatch<React.SetStateAction<any>>;
    taskfilter: string;
    setTaskFilter: React.Dispatch<React.SetStateAction<string>>;
  }

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<GlobalStateProps> = ({ children }) => {
  const [selectedTaskData, setselectedTaskData] = useState<TaskData>({
    id: '',
    name: '',
    taskDefinitionId: '',
    processName: '',
    creationDate: '',
    completionDate: null,
    assignee: '',
    taskState: '',
    sortValues: [],
    isFirst: false,
    formKey: '',
    formId: null,
    formVersion: null,
    isFormEmbedded: false,
    processDefinitionKey: '',
    processInstanceKey: '',
    tenantId: '',
    dueDate: null,
    followUpDate: '',
    candidateGroups: [],
    candidateUsers: [],
    variables: [],
    context: null,
    implementation: '',
  });
  const [taskfilter, setTaskFilter] = useState<any>({});

  return (
    <GlobalStateContext.Provider value={{ selectedTaskData, setselectedTaskData, taskfilter, setTaskFilter }}>
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