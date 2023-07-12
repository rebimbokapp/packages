/* eslint-disable */

// @ts-ignore

import { PrismaClient } from '../../../prisma/postgres/generated';
import { createPostgresUrl } from '../../utils/url';

export interface PrismaPostgresOptions {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  schema?: string;
}

export class PrismaPostgresClient extends PrismaClient {
  constructor(options: PrismaPostgresOptions) {
    const { host, port, database, username, password, schema } = options;

    const url = createPostgresUrl(
      host,
      port,
      database,
      username,
      password,
      schema,
    );

    super({ datasources: { db: { url } } });
  }
}
