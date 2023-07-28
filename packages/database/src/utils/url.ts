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
