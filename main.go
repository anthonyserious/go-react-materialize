package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func getHelloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	w.Write([]byte("{ \"status\": \"hello\" }"))
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/hello", getHelloHandler).Methods("GET")
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe(":8000", nil))
}
