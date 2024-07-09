package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	http.HandleFunc("/users", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "kerem")
	})

	log.Fatal(http.ListenAndServe(":9876", nil))
}
