PROTOC_GEN_TS=$(shell which protoc-gen-ts)

all: proto build

proto-gen-from-docker:
	docker build -t ts-protoc .
	docker run -v $(CURDIR):/workspace ts-protoc proto

proto:
	mkdir -p src/gen
	#sudo npm i -g ts-protoc-gen@0.15.0
	protoc room.proto --plugin=protoc-gen-ts=${PROTOC_GEN_TS} --js_out=import_style=commonjs,binary:./src/gen --ts_out=service=grpc-web:./src/gen
	protoc rtc.proto --plugin=protoc-gen-ts=${PROTOC_GEN_TS} --js_out=import_style=commonjs,binary:./src/gen --ts_out=service=grpc-web:./src/gen

clean:
	rm -rf src/_library

build:
	npm run build

