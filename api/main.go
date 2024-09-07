package main

import (
	"github.com/keerapon-som/tasklist-clone/api/internal/utils/redisdb"
	"github.com/keerapon-som/tasklist-clone/api/internal/worker/exporter"
)

// "github.com/keerapon-som/tasklist-clone/api/handlers"

func main() {
	defer func() {
		//cleanup resources
		// mongodb.Uninit()
		redisdb.Uninit()
		// worker.CloseZeebe()
	}()
	// app := handlers.CreateHandlers()

	// app.Listen(":3000")
	// Initialize Redis client
	redisdb.Init("localhost:6379", "exampleRedisPassword", 0)
	// Create a new StreamManager
	exporter.ReadQ()
}
