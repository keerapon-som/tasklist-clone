package tasklistRepo

import "github.com/keerapon-som/tasklist-clone/api/internal/worker/data"

type TasklistTaskRepo interface {
	InsertAndUpdate(insertData []data.TasklistTask) error
}

func NewTasklistTaskRepo() TasklistTaskRepo {
	return tasklistTaskRepo{}
}

type tasklistTaskRepo struct {
}

func (r tasklistTaskRepo) InsertAndUpdate(insertData []data.TasklistTask) error {
	return nil
}
