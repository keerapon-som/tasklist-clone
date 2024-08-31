package main

import (
	"github.com/keerapon-som/tasklist-clone/api/handlers"
)

func main() {

	app := handlers.CreateHandlers()

	app.Listen(":3000")
}
