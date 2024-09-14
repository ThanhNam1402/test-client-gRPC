protoc -I./src/app/protos ./src/app/protos/result.proto --js_out=import_style=commonjs:./src/app/services/result/protos --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/app/services/result/protos

