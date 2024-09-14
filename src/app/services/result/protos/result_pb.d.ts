import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


export class CommonResult extends jspb.Message {
  getStatuscode(): number;
  setStatuscode(value: number): CommonResult;

  getIssuccess(): boolean;
  setIssuccess(value: boolean): CommonResult;

  getData(): string;
  setData(value: string): CommonResult;
  hasData(): boolean;
  clearData(): CommonResult;

  getDatatype(): string;
  setDatatype(value: string): CommonResult;
  hasDatatype(): boolean;
  clearDatatype(): CommonResult;

  getMessagecode(): string;
  setMessagecode(value: string): CommonResult;
  hasMessagecode(): boolean;
  clearMessagecode(): CommonResult;

  getError(): Error | undefined;
  setError(value?: Error): CommonResult;
  hasError(): boolean;
  clearError(): CommonResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonResult.AsObject;
  static toObject(includeInstance: boolean, msg: CommonResult): CommonResult.AsObject;
  static serializeBinaryToWriter(message: CommonResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonResult;
  static deserializeBinaryFromReader(message: CommonResult, reader: jspb.BinaryReader): CommonResult;
}

export namespace CommonResult {
  export type AsObject = {
    statuscode: number,
    issuccess: boolean,
    data?: string,
    datatype?: string,
    messagecode?: string,
    error?: Error.AsObject,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 3,
  }

  export enum DatatypeCase { 
    _DATATYPE_NOT_SET = 0,
    DATATYPE = 4,
  }

  export enum MessagecodeCase { 
    _MESSAGECODE_NOT_SET = 0,
    MESSAGECODE = 5,
  }

  export enum ErrorCase { 
    _ERROR_NOT_SET = 0,
    ERROR = 6,
  }
}

export class Error extends jspb.Message {
  getDetailsList(): Array<string>;
  setDetailsList(value: Array<string>): Error;
  clearDetailsList(): Error;
  addDetails(value: string, index?: number): Error;

  getStacktrace(): string;
  setStacktrace(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    detailsList: Array<string>,
    stacktrace: string,
  }
}

