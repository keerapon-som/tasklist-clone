package tasklistRepo

type TasklistFormRepo interface {
	InsertAndUpdate()
}

func NewTasklistformRepo() TasklistFormRepo {
	return tasklistFormRepo{}
}

type tasklistFormRepo struct {
}

func (r tasklistFormRepo) InsertAndUpdate() {
}
