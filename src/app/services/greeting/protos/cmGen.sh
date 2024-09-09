protoc -I=./src/app/protos ./src/app/protos/greeting.proto \
  --plugin=protoc-gen-grpc-web=./node_modules/.bin/protoc-gen-grpc-web \
  --js_out=import_style=commonjs:./src/app/services/greeting/protos \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/app/services/greeting/protos
