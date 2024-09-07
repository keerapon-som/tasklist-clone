package exporter

import (
	"fmt"
	"time"

	"github.com/keerapon-som/tasklist-clone/api/internal/worker/record"
)

func Run(pipe <-chan []byte) {
	// workerPipe := make(chan []byte, 1000)

	// initworker(workerPipe, 5)

	saveticker := time.NewTicker(5 * time.Second)

	for {
		select {
		case data := <-pipe:
			// workerPipe <- data
			// fmt.Println("Data received", string(data))
			record.TypeClasify(data)
		case <-saveticker.C:
			// service.PerformBatchRecord()
			record.PerformBatchRecord()
			fmt.Println("Cut off na")
			record.PurgeAllRecords() // Clear all records
		}
	}

}

// func initworker(msg <-chan []byte, numberOfWorkers int) {
// 	for i := 0; i < numberOfWorkers; i++ {
// 		go worker(msg, i)
// 	}
// }

// func worker(msg <-chan []byte, id int) {
// 	fmt.Println("Worker", id, "started")
// 	// saveticker := time.NewTicker(5 * time.Second)

// 	for {
// 		select {
// 		case data := <-msg:
// 			record.TypeClasify(data)
// 		}
// 	}
// }
