import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"
import * as result_pb from '../../../result/protos/result_pb'; // proto import: "result.proto"



export class AddDegreeCatalogRequest extends jspb.Message {
  getDegname(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDegname(value?: google_protobuf_wrappers_pb.StringValue): AddDegreeCatalogRequest;
  hasDegname(): boolean;
  clearDegname(): AddDegreeCatalogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDegreeCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDegreeCatalogRequest): AddDegreeCatalogRequest.AsObject;
  static serializeBinaryToWriter(message: AddDegreeCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDegreeCatalogRequest;
  static deserializeBinaryFromReader(message: AddDegreeCatalogRequest, reader: jspb.BinaryReader): AddDegreeCatalogRequest;
}

export namespace AddDegreeCatalogRequest {
  export type AsObject = {
    degname?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum DegnameCase {
    _DEGNAME_NOT_SET = 0,
    DEGNAME = 1,
  }
}

export class UpdateDegreeCatalogRequest extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): UpdateDegreeCatalogRequest;
  hasId(): boolean;
  clearId(): UpdateDegreeCatalogRequest;

  getDegname(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDegname(value?: google_protobuf_wrappers_pb.StringValue): UpdateDegreeCatalogRequest;
  hasDegname(): boolean;
  clearDegname(): UpdateDegreeCatalogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDegreeCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDegreeCatalogRequest): UpdateDegreeCatalogRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDegreeCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDegreeCatalogRequest;
  static deserializeBinaryFromReader(message: UpdateDegreeCatalogRequest, reader: jspb.BinaryReader): UpdateDegreeCatalogRequest;
}

export namespace UpdateDegreeCatalogRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    degname?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum DegnameCase {
    _DEGNAME_NOT_SET = 0,
    DEGNAME = 2,
  }
}

export class DeleteDegreeCatalogRequest extends jspb.Message {
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): DeleteDegreeCatalogRequest;
  hasId(): boolean;
  clearId(): DeleteDegreeCatalogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDegreeCatalogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDegreeCatalogRequest): DeleteDegreeCatalogRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDegreeCatalogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDegreeCatalogRequest;
  static deserializeBinaryFromReader(message: DeleteDegreeCatalogRequest, reader: jspb.BinaryReader): DeleteDegreeCatalogRequest;
}

export namespace DeleteDegreeCatalogRequest {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 1,
  }
}

