

protoc -I./src/app/protos ./src/app/protos/degreeCatalogQuery.proto --js_out=import_style=commonjs:./src/app/services/degreeCatalog/protos/query --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/app/services/degreeCatalog/protos/query







