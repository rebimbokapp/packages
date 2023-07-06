export function createPostgresUrl(
  host: string,
  port: number,
  database: string,
  username: string,
  password: string,
  schema?: string,
): string {
  const params = new URLSearchParams({
    schema: schema ?? 'public',
  }).toString();

  const url = `postgresql://${username}:${password}@${host}:${port.toString()}/${database}?${params}`;

  return url;
}

export function createMongoUrl(
  host: string,
  port: number,
  database: string,
  username: string,
  password: string,
  authSource?: string,
  directConnection?: boolean,
): string {
  const params = new URLSearchParams({
    authSource: authSource ?? 'admin',
    directConnection: directConnection?.toString() ?? 'true',
  }).toString();

  const url = `mongodb://${username}:${password}@${host}:${port.toString()}/${database}?${params}`;

  return url;
}
