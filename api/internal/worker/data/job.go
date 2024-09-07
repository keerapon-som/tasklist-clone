package data

// ID:                  fmt.Sprintf("%d", job.Metadata.Key),
// TenantID:            job.TenantId,
// Key:                 job.Metadata.Key,
// PartitionID:         int(job.Metadata.PartitionId),
// BPMNProcessID:       job.BpmnProcessId,
// ProcessDefinitionID: fmt.Sprintf("%d", job.ProcessDefinitionKey),
// FlowNodeBPMNID:      job.ElementId,
// FlowNodeInstanceId:  fmt.Sprintf("%d", job.ElementInstanceKey),
// ProcessInstanceID:   fmt.Sprintf("%d", job.ProcessInstanceKey),
// CreationTime:        job.Metadata.Timestamp,
// CompletionTime:      job.Metadata.Timestamp,
// State:               job.Metadata.Intent,
// Assignee:            CustomHeaders["io.camunda.zeebe:assignee"].(string),
// CandidateGroups:     candidateGroups,
// CandidateUsers:      candidateUsers,
// FormKey:             formKey,
// FormID:              "",
// FormVersion:         0,
// IsFormEmbedded:      isFormEmbedded,
// FollowupDate:        CustomHeaders["io.camunda.zeebe:followUpDate"].(string),
// DueDate:             CustomHeaders["io.camunda.zeebe:dueDate"].(string),
// Position:            job.Metadata.Position,

type TasklistTask struct {
	ID                  string   `json:"id"`
	TenantID            string   `json:"tenant_id"`
	Key                 int64    `json:"key"`
	PartitionID         int      `json:"partition_id"`
	BPMNProcessID       string   `json:"bpmn_process_id"`
	ProcessDefinitionID string   `json:"process_definition_id"`
	FlowNodeBPMNID      string   `json:"flow_node_bpmn_id"`
	FlowNodeInstanceId  string   `json:"flow_node_instance_id"`
	ProcessInstanceID   string   `json:"process_instance_id"`
	CreationTime        int64    `json:"creation_time"`
	CompletionTime      int64    `json:"completion_time"`
	State               string   `json:"state"`
	Assignee            string   `json:"assignee"`
	CandidateGroups     []string `json:"candidate_groups"`
	CandidateUsers      []string `json:"candidate_users"`
	FormKey             string   `json:"form_key"`
	FormID              string   `json:"form_id"`
	FormVersion         int      `json:"form_version"`
	IsFormEmbedded      bool     `json:"is_form_embedded"`
	FollowupDate        string   `json:"followup_date"`
	DueDate             string   `json:"due_date"`
	Position            int64    `json:"position"`
}
