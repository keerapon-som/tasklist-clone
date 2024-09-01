import React from 'react';
// import { useGlobalStatetask } from '../../globalstatetask';
import TaskList from './tasklist/tasklist';
import FilterBar from './filterbar/filterbar';

const TaskSideBar: React.FC = () => {
    // const { id, setId, taskfilter, setTaskFilter } = useGlobalStatetask();

  return (
            <div className="bg-gray-100 w-80 border-r text-black">
                <div className="h-16 bg-gray-100">
                    <FilterBar />
                    <TaskList />
                </div>
            </div>
  );
}

export default TaskSideBar;
