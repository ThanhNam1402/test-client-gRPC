import * as jspb from 'google-protobuf'



export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReply.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
  static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReply;
  static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    message: string,
  }
}

export class CreateGreetingRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateGreetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGreetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGreetingRequest): CreateGreetingRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGreetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGreetingRequest;
  static deserializeBinaryFromReader(message: CreateGreetingRequest, reader: jspb.BinaryReader): CreateGreetingRequest;
}

export namespace CreateGreetingRequest {
  export type AsObject = {
    name: string,
  }
}

export class GreetingReply extends jspb.Message {
  getId(): string;
  setId(value: string): GreetingReply;

  getMessage(): string;
  setMessage(value: string): GreetingReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetingReply.AsObject;
  static toObject(includeInstance: boolean, msg: GreetingReply): GreetingReply.AsObject;
  static serializeBinaryToWriter(message: GreetingReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetingReply;
  static deserializeBinaryFromReader(message: GreetingReply, reader: jspb.BinaryReader): GreetingReply;
}

export namespace GreetingReply {
  export type AsObject = {
    id: string,
    message: string,
  }
}

export class ReadGreetingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadGreetingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadGreetingsRequest): ReadGreetingsRequest.AsObject;
  static serializeBinaryToWriter(message: ReadGreetingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadGreetingsRequest;
  static deserializeBinaryFromReader(message: ReadGreetingsRequest, reader: jspb.BinaryReader): ReadGreetingsRequest;
}

export namespace ReadGreetingsRequest {
  export type AsObject = {
  }
}

export class ReadGreetingsReply extends jspb.Message {
  getGreetingsList(): Array<GreetingReply>;
  setGreetingsList(value: Array<GreetingReply>): ReadGreetingsReply;
  clearGreetingsList(): ReadGreetingsReply;
  addGreetings(value?: GreetingReply, index?: number): GreetingReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadGreetingsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ReadGreetingsReply): ReadGreetingsReply.AsObject;
  static serializeBinaryToWriter(message: ReadGreetingsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadGreetingsReply;
  static deserializeBinaryFromReader(message: ReadGreetingsReply, reader: jspb.BinaryReader): ReadGreetingsReply;
}

export namespace ReadGreetingsReply {
  export type AsObject = {
    greetingsList: Array<GreetingReply.AsObject>,
  }
}

export class UpdateGreetingRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateGreetingRequest;

  getName(): string;
  setName(value: string): UpdateGreetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGreetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGreetingRequest): UpdateGreetingRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGreetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGreetingRequest;
  static deserializeBinaryFromReader(message: UpdateGreetingRequest, reader: jspb.BinaryReader): UpdateGreetingRequest;
}

export namespace UpdateGreetingRequest {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class DeleteGreetingRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteGreetingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGreetingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGreetingRequest): DeleteGreetingRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGreetingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGreetingRequest;
  static deserializeBinaryFromReader(message: DeleteGreetingRequest, reader: jspb.BinaryReader): DeleteGreetingRequest;
}

export namespace DeleteGreetingRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteGreetingReply extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteGreetingReply;

  getMessage(): string;
  setMessage(value: string): DeleteGreetingReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGreetingReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGreetingReply): DeleteGreetingReply.AsObject;
  static serializeBinaryToWriter(message: DeleteGreetingReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGreetingReply;
  static deserializeBinaryFromReader(message: DeleteGreetingReply, reader: jspb.BinaryReader): DeleteGreetingReply;
}

export namespace DeleteGreetingReply {
  export type AsObject = {
    id: string,
    message: string,
  }
}

export class GetGreetingByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetGreetingByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGreetingByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGreetingByIdRequest): GetGreetingByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetGreetingByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGreetingByIdRequest;
  static deserializeBinaryFromReader(message: GetGreetingByIdRequest, reader: jspb.BinaryReader): GetGreetingByIdRequest;
}

export namespace GetGreetingByIdRequest {
  export type AsObject = {
    id: string,
  }
}

