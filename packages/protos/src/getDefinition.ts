import fs from 'fs';
import path from 'path';

import { loadPackageDefinition, GrpcObject } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_DIR = path.resolve(__dirname, 'protos');

const protoObjectCache: Map<string, GrpcObject> = new Map<string, GrpcObject>();

export function getDefinition<T extends GrpcObject = GrpcObject>(
  protoName: string,
): T {
  if (protoObjectCache.has(protoName)) {
    return protoObjectCache.get(protoName) as T;
  }

  const protoFileName = `${protoName}.proto`;
  const protoFilePath = path.join(PROTO_DIR, protoFileName);

  const existsProtoFile = fs.existsSync(protoFilePath);

  if (!existsProtoFile) {
    throw new Error('The inserted protocol file does not exist.');
  }

  const packageDefinition = protoLoader.loadSync(protoFilePath, {
    keepCase: true,
    defaults: true,
    oneofs: true,
    longs: String,
    enums: String,
  });

  const protoObject = loadPackageDefinition(packageDefinition);

  protoObjectCache.set(protoName, protoObject);

  return protoObject as T;
}
