import React, { useEffect } from 'react';
import { useGlobalStatetask } from '../globalstatetask';
import TaskRightbar from './taskrightbar';
import FormRender from './formreder/formrender';
// import FormViewer from '@bpmn-io/form-js/dist/form-viewer.umd.js'; // Import the FormViewer from the library


const TaskRender: React.FC = () => {
  const { selectedTaskData } = useGlobalStatetask();


  return (
    <div className="grid grid-cols-[1fr,18rem]">
      <FormRender />
      <TaskRightbar />
    </div>
  );
};

export default TaskRender;