all:
	go get -d -v && go build && bower install react
run:
	./go-react-materialize
