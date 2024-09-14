protoc -I./src/app/protos ./src/app/protos/degreeCatalogCommand.proto --js_out=import_style=commonjs:./src/app/services/degreeCatalog/protos/command2 --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/app/services/degreeCatalog/protos/command2



