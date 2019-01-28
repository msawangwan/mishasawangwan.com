package main

import (
	"log"
	"net/http"

	"github.com/msawangwan/webpack"
)

func main() {
	entrypoints := webpack.NewEntrypointRouter()

	entrypoints.RegisterFile("/", "../frontend/dist/index.html")

	resources := webpack.NewResourceRouter()

	resources.RegisterDirectory("../frontend/dist/")

	router := webpack.NewRouter()

	router.GET("/$", entrypoints.ServeHTTP)
	router.GET("(\\.js|\\.json|\\.css|\\.png|\\.gif|\\.svg|\\.jpe?g|\\.ico)$", resources.ServeHTTP)

	server := &http.Server{
		Addr:    "127.0.0.1:1337",
		Handler: router,
	}

	log.Println("serving ..")
	log.Fatal(server.ListenAndServe())
}
