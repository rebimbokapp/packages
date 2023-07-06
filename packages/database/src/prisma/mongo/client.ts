/* eslint-disable */

// @ts-ignore

import { PrismaClient } from '../../../prisma/pg/generated';
import { createMongoUrl } from '../../utils/url';

export interface PrismaMongoOptions {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  authSource?: string;
  directConnection?: boolean;
}

export class PrismaMongoClient extends PrismaClient {
  constructor(options: PrismaMongoOptions) {
    const {
      host,
      port,
      database,
      username,
      password,
      authSource,
      directConnection,
    } = options;

    const url = createMongoUrl(
      host,
      port,
      database,
      username,
      password,
      authSource,
      directConnection,
    );

    super({ datasources: { db: { url } } });
  }
}
