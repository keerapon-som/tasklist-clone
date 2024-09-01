import React from 'react';
import { useGlobalStatetask } from '@/pages/task/globalstatetask';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import type { TaskData } from '@/type/type'

const taskdatalist: TaskData[] = [ {
    "id" : "2251799813685377",
    "name" : "usertask",
    "taskDefinitionId" : "Activity_0nfx1ek",
    "processName" : "YIMMMZZZZ",
    "creationDate" : "2024-08-31T12:53:05.733+0000",
    "completionDate" : null,
    "assignee" : "TheYIMZ",
    "taskState" : "CREATED",
    "sortValues" : [ "1725108785733", "2251799813685377" ],
    "isFirst" : true,
    "formKey" : "camunda-forms:bpmn:UserTaskForm_26s9ncd",
    "formId" : null,
    "formVersion" : null,
    "isFormEmbedded" : true,
    "processDefinitionKey" : "2251799813685365",
    "processInstanceKey" : "2251799813685367",
    "tenantId" : "<default>",
    "dueDate" : null,
    "followUpDate" : "2023-04-12T14:30:00.000+0000",
    "candidateGroups" : [ "xx", "xx" ],
    "candidateUsers" : [ "yyyy" ],
    "variables" : [ ],
    "context" : null,
    "implementation" : "JOB_WORKER"
  }, {
    "id" : "2251799813685364",
    "name" : "usertask",
    "taskDefinitionId" : "Activity_0nfx1ek",
    "processName" : "YIMMMZZZZ",
    "creationDate" : "2024-08-31T12:51:19.613+0000",
    "completionDate" : null,
    "assignee" : "TheYIMZ",
    "taskState" : "CREATED",
    "sortValues" : [ "1725108679613", "2251799813685364" ],
    "isFirst" : false,
    "formKey" : "camunda-forms:bpmn:UserTaskForm_26s9ncd",
    "formId" : null,
    "formVersion" : null,
    "isFormEmbedded" : true,
    "processDefinitionKey" : "2251799813685352",
    "processInstanceKey" : "2251799813685354",
    "tenantId" : "<default>",
    "dueDate" : null,
    "followUpDate" : "2023-04-12T14:30:00.000+0000",
    "candidateGroups" : [ "xx", "xx" ],
    "candidateUsers" : [ "yyyy" ],
    "variables" : [ ],
    "context" : null,
    "implementation" : "JOB_WORKER"
  } ];


const TaskList: React.FC = () => {
    const { selectedTaskData, setselectedTaskData, taskfilter } = useGlobalStatetask();
    const navigate = useNavigate(); // Replace history with navigate

    // const params = new URLSearchParams({
    //     filter: 'custom',
    //     sortBy: 'creation',
    //     assigned: 'true',
    //     assignee: 'demo',
    //     state: 'CREATED',
    //     processDefinitionKey: '2251799813685365',
    //     dueDateFrom: '2024-09-01T00:00:00+07:00',
    //     dueDateTo: '2024-09-05T00:00:00+07:00',
    //     followUpDateFrom: '2024-09-03T00:00:00+07:00',
    //     followUpDateTo: '2024-09-18T00:00:00+07:00',
    //     taskDefinitionId: '12ee',
    //   });

    const params = new URLSearchParams(taskfilter);
    
    const handleSelectedId = (task:TaskData) => {
        setselectedTaskData(task);
        const url = `/${task.id}?${params.toString()}`;
        navigate(url);
    }


    const taskrender = taskdatalist.map((task:TaskData) => {

        return (
            <div 
                key={task.id} 
                id={task.id}
                onClick={() => handleSelectedId(task)} 
                className={selectedTaskData.id==task.id ? " hover:cursor-pointer h-40 shadow-inner border-b-4 border-blue-400 shadow-gray-700 bg-indigo-50 p-4" : "hover:cursor-pointer border-b-2 h-40 hover:bg-gray-200 p-4"} 
            >
                <div>
                    <span className="font-semibold">{task.name}</span>
                </div>
                <div>
                    <span className="text-gray-500 text-sm ">{task.processName}</span>
                </div>
                <div>
                    <span className="text-gray-500 text-sm">{task.assignee}</span>
                </div>
                <div>
                    <span className="text-gray-500 text-xs">{task.taskState}</span>
                </div>
                <div>
                    <span className="text-gray-500 text-xs">{task.creationDate}</span>
                </div>
            </div>
        )
    });

  return (
            <>
                    {taskrender}
            </>
  );
}

export default TaskList;
