/* eslint-disable */

// @ts-ignore

import { PrismaClient } from '../../../prisma/pg/generated';
import { createPostgresUrl } from '../../utils/url';

export interface PrismaPgOptions {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  schema?: string;
}

export class PrismaPgClient extends PrismaClient {
  constructor(options: PrismaPgOptions) {
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
