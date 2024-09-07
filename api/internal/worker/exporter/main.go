package exporter

import (
	"encoding/base64"
	"fmt"
	"log"

	"github.com/go-redis/redis"
	"github.com/keerapon-som/tasklist-clone/api/internal/utils/redisdb"
)

type StreamData struct {
	StreamName string
	MessageID  string
	Fields     map[string]interface{}
}

type StreamManager struct{}

var pipe = make(chan []byte, 1000)

func ReadQ() {
	lastID := "0" // Start reading from the beginning of the stream

	go Run(pipe)

	for {
		args := &redis.XReadArgs{
			Streams: []string{"streamExporter", lastID},
			Block:   0, // Block indefinitely
		}

		result, err := redisdb.RedisClient().XRead(args).Result()
		if err != nil {
			log.Fatalf("Could not read data from stream: %v", err)
		}

		for _, stream := range result {
			// streamName := stream.Stream
			for _, message := range stream.Messages {
				messageID := message.ID
				fields := message.Values

				data := (fields["data"].(string))
				byteArray, err := base64.StdEncoding.DecodeString(data)
				if err != nil {
					fmt.Printf("Error decoding Base64 string: %v\n", err)
					continue
				}
				pipe <- byteArray

				_, err = redisdb.RedisClient().XDel("streamExporter", message.ID).Result()
				if err != nil {
					fmt.Printf("Error deleting message %s: %v\n", message.ID, err)
				}
				lastID = messageID // Update lastID to the ID of the last message read
			}
		}
	}
}

// func (sm *StreamManager) GetStreamData() {
// 	ticker := time.NewTicker(5 * time.Second)
// 	defer ticker.Stop()

// 	for {
// 		select {
// 		case data := <-sm.hub:
// 			fmt.Printf("Stream: %s, Message ID: %s, Fields: %v\n", data.StreamName, data.MessageID, data.Fields)
// 		case <-ticker.C:
// 			// Pause for 1 second
// 			time.Sleep(1 * time.Second)
// 		}
// 	}
// }
