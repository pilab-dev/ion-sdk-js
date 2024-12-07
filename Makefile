PROTOC_GEN_TS=$(shell which protoc-gen-ts)

.PHONY: check proto build

all: check proto build

# Check if protoc-gen-ts is installed
check:
	@if [ -z "$(PROTOC_GEN_TS)" ]; then \
		echo "Error: protoc-gen-ts is not installed. Please install it with 'npm i -g ts-protoc-gen'."; \
		exit 1; \
	fi

# Generate TypeScript gRPC files
proto:
	mkdir -p src/gen
	#sudo npm i -g ts-protoc-gen@0.15.0
	protoc room.proto --plugin=protoc-gen-ts=${PROTOC_GEN_TS} --js_out=import_style=commonjs,binary:./src/gen --ts_out=service=grpc-web:./src/gen
	protoc rtc.proto --plugin=protoc-gen-ts=${PROTOC_GEN_TS} --js_out=import_style=commonjs,binary:./src/gen --ts_out=service=grpc-web:./src/gen

# Build the project
build:
	yarn build

# Default target to print comments
print-comments:
	@awk '/^#/{print}' $(MAKEFILE_LIST)

# Display help
help:
	@echo "Available targets:"
	@awk 'BEGIN {FS = "[:#]"} /^#/{comment=$2} /^[a-zA-Z_-]+:/ {print $$1 "\t" comment}' $(MAKEFILE_LIST) | column -t -s $$'\t'