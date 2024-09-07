package tasklistRepo

import (
	"fmt"

	postgresqldb "github.com/keerapon-som/tasklist-clone/api/internal/utils/postgresql"
	"github.com/keerapon-som/tasklist-clone/api/internal/worker/data"
)

type TasklistVariablesRepo interface {
	InsertAndUpdate(insertData []data.TasklistVariables) error
}

func NewTasklistVariablesRepo() TasklistVariablesRepo {
	return tasklistVariablesRepo{}
}

type tasklistVariablesRepo struct {
}

func (r tasklistVariablesRepo) InsertAndUpdate(records []data.TasklistVariables) (err error) {
	db := postgresqldb.NewRepo().DB()
	if err != nil {
		fmt.Println("error in open db")
		return err
	}
	// defer postgresql.Close()

	tx, err := db.Begin()
	if err != nil {
		fmt.Println("error in begin tx")
		return err
	}
	fmt.Println("Insert ------- Data", records)
	stmt, err := tx.Prepare(`
        INSERT INTO public.tasklist_variables 
        (id, tenantid, key, partitionid, name, value, fullValue, isPreview, scopeFlowNodeId, processInstanceId, position) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO UPDATE SET
        tenantid = EXCLUDED.tenantid,
        key = EXCLUDED.key,
        partitionid = EXCLUDED.partitionid,
        name = EXCLUDED.name,
        value = EXCLUDED.value,
        fullValue = EXCLUDED.fullValue,
        isPreview = EXCLUDED.isPreview,
        scopeFlowNodeId = EXCLUDED.scopeFlowNodeId,
        processInstanceId = EXCLUDED.processInstanceId,
        position = EXCLUDED.position
        WHERE EXCLUDED.position > public.tasklist_variables.position
    `)

	for _, record := range records {
		_, err = stmt.Exec(record.ID, record.TenantID, record.Key, record.PartitionID, record.Name, record.Value, record.FullValue, record.IsPreview, record.ScopeFlowNodeID, record.ProcessInstanceID, record.Position)
		if err != nil {
			fmt.Println("error in exec stmt")
			return err
		}
	}

	err = tx.Commit()
	if err != nil {
		fmt.Println("error in commit tx")
		return err
	}

	return err

}
