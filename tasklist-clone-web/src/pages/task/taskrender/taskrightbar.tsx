import React from 'react';
import { useGlobalStatetask } from '../globalstatetask';


const TaskRightbar: React.FC = () => {
  const { selectedTaskData } = useGlobalStatetask();


  return (
        <>
        <div className="bg-gray-50 border-l border-gray-300 text-black">
            <div id="Details" className="border-b border-gray-300 p-4">
                <div className="text-xs text-gray-500 pb-4">Details</div>
                <div className="text-sm text-gray-500">Creation date</div>
                <div className="text-sm">{selectedTaskData.creationDate}</div>
            </div>
            <div id="Candidates" className="border-b border-gray-300 p-4">
                <div className="text-sm text-gray-500">Candidates</div>
                <ul className="flex">
                    <li className="px-1 text-xs">{selectedTaskData.assignee}</li>
                    <li className="px-1 text-xs">{selectedTaskData.assignee}</li>
                </ul>
            </div>
            <div id="Duedates" className="border-b border-gray-300 p-4 text-sm">
                <div >Due date</div>
                <div >{selectedTaskData.dueDate ? selectedTaskData.dueDate : "No due date"}</div>
            </div>
            <div id="Followup" className="border-b border-gray-300 p-4 text-sm">
                <div>Follow up date</div>
                <div>{selectedTaskData.followUpDate}</div>
            </div>
        </div>
        </>
  );
}

export default TaskRightbar;
