

export type TaskData = {
    id: string;
    name: string;
    taskDefinitionId: string;
    processName: string;
    creationDate: string;
    completionDate: string | null;
    assignee: string;
    taskState: string;
    sortValues: string[];
    isFirst: boolean;
    formKey: string;
    formId: string | null;
    formVersion: string | null;
    isFormEmbedded: boolean;
    processDefinitionKey: string;
    processInstanceKey: string;
    tenantId: string;
    dueDate: string | null;
    followUpDate: string;
    candidateGroups: string[];
    candidateUsers: string[];
    variables: string[];
    context: string | null;
    implementation: string;
};