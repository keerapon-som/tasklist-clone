package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/keerapon-som/tasklist-clone/api/internal/web"
	"github.com/keerapon-som/tasklist-clone/api/middleware"
	// Add this import
)

func CreateHandlers() *fiber.App {
	app := fiber.New()

	// Public routes
	public := app.Group("/api")
	registerPublicHandlers(public)

	private := app.Group("/api/private", middleware.AuthRequired)
	registerPrivateHandlers(private)

	return app
}

// registerPublicHandlers register public handlers and Init them
func registerPublicHandlers(root fiber.Router) {

	handlers := web.HandlerRegistrator{}

	// TODO: register your handlers here
	handlers.Register(
		new(FormHandler),
	)

	handlers.Init(root)
}

// registerPrivateHandlers register private handlers and Init them
func registerPrivateHandlers(root fiber.Router) {

	handlers := web.HandlerRegistrator{}
	handlers.Register(
		new(Privatetest),
	)

	handlers.Init(root)

}
