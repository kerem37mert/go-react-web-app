package middlewares

import "github.com/rs/cors"

func CorsConfig() {
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://127.0.0.1:5173", "http://foo.com:8080"},
		AllowCredentials: true,
	})

	// Insert the middleware
	handler = c.Handler(handler)
}
