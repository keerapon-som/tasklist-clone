import React from 'react';
import TaskRender from './taskrender/taskrender';
import TaskSideBar from './taskrender/tasksidebar/tasksidebar';
import { useParams } from 'react-router-dom';
import { GlobalStateProvider } from './globalstatetask';

const Main: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <GlobalStateProvider>
      <div className="h-screen w-screen grid grid-cols-[20rem,1fr] grid-rows-1 pt-12">
        <TaskSideBar />
        {id ? <TaskRender /> : <div className="text-blue-500 text-center font-bold text-2xl pt-64"> No Task Na</div>}
      </div>
    </GlobalStateProvider>
  );
}

export default Main;