import * as jspb from 'google-protobuf'

import * as result_pb from './result_pb'; // proto import: "result.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class GetDegreeCatalogRequest extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): GetDegreeCatalogRequest;
  hasId(): boolean;
  clearId(): GetDegreeCatalogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDegreeCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDegreeCatalogRequest): GetDegreeCatalogRequest.AsObject;
  static serializeBinaryToWriter(message: GetDegreeCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDegreeCatalogRequest;
  static deserializeBinaryFromReader(message: GetDegreeCatalogRequest, reader: jspb.BinaryReader): GetDegreeCatalogRequest;
}

export namespace GetDegreeCatalogRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }
}

export class GetAllDegreeCatalogsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllDegreeCatalogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllDegreeCatalogsRequest): GetAllDegreeCatalogsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllDegreeCatalogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllDegreeCatalogsRequest;
  static deserializeBinaryFromReader(message: GetAllDegreeCatalogsRequest, reader: jspb.BinaryReader): GetAllDegreeCatalogsRequest;
}

export namespace GetAllDegreeCatalogsRequest {
  export type AsObject = {
  }
}

