package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {

	fmt.Printf(
		"To see the GUI, visit this URL with your Web Browser:\n\n %s\n\n",
		"http://localhost:8080/monkeys")
		
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
	
	
}

//https://golang.org/doc/articles/wiki/