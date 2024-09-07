package record

type Manager struct {
	VariableManager
	JobManager
	DeploymentManager
}

func NewManager() *Manager {
	return &Manager{
		VariableManager:   &variableManager{},
		JobManager:        &jobManager{},
		DeploymentManager: &deploymentManager{},
	}
}
