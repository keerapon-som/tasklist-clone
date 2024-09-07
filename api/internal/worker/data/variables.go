package data

// ID:                fmt.Sprintf("%d-%s", record.ScopeKey, record.Name),
// TenantID:          record.TenantId,
// Key:               record.Metadata.Key,
// PartitionID:       int(record.Metadata.PartitionId),
// Name:              record.Name,
// Value:             record.Value,
// FullValue:         record.Value,
// IsPreview:         false, // notfoundinevent
// ScopeFlowNodeID:   fmt.Sprintf("%d", record.ScopeKey),
// ProcessInstanceID: fmt.Sprintf("%d", record.ProcessInstanceKey),
// Position:          record.Metadata.Position,

type TasklistVariables struct {
	ID                string `json:"id"`
	TenantID          string `json:"tenant_id"`
	Key               int64  `json:"key"`
	PartitionID       int    `json:"partition_id"`
	Name              string `json:"name"`
	Value             string `json:"value"`
	FullValue         string `json:"full_value"`
	IsPreview         bool   `json:"is_preview"`
	ScopeFlowNodeID   string `json:"scope_flow_node_id"`
	ProcessInstanceID string `json:"process_instance_id"`
	Position          int64  `json:"position"`
}
