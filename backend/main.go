package main

import (
	"fmt"
	"github.com/rs/cors"
	"net/http"
)

// Handler Functions
func usersHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("{\"hello\": \"world\"}"))
}

func contentsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Contents endpoint")
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "About endpoint")
}

func main() {
	// New ServeMux
	mux := http.NewServeMux()

	mux.HandleFunc("/users", usersHandler)
	mux.HandleFunc("/about", aboutHandler)

	// CORS ayarları
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173"}, // İzin verilen origin
		//AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},  // İzin verilen metodlar
		//AllowedHeaders:   []string{"Content-Type", "Authorization"}, // İzin verilen headerlar
		AllowCredentials: true,
	})

	// CORS middleware'i kullanarak HTTP sunucusunu başlatın
	handler := c.Handler(mux)
	http.ListenAndServe(":9876", handler)
}
