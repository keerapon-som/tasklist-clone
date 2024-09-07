package record

import (
	"encoding/json"
	"fmt"
)

type deploymentManager struct {
}

type DeploymentManager interface {
	TohistoryTable(deploymentRecords []DeploymentRecord)
}

func (m *deploymentManager) TohistoryTable(deploymentRecords []DeploymentRecord) {
	ListJobJson, err := json.MarshalIndent(deploymentRecords, "", "  ")
	if err != nil {
		fmt.Println("Error converting record to JSON:", err)
		return
	}
	fmt.Println(string(ListJobJson))
}

func DeploymentToDB(pipe chan DeploymentRecord) {
	var batchDeploymentRecords []DeploymentRecord

	for {
		select {
		case deployment := <-pipe:

			batchDeploymentRecords = append(batchDeploymentRecords, deployment)
		default:
			go mng.DeploymentManager.TohistoryTable(batchDeploymentRecords)
			return
		}
	}

}
