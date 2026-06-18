/** Prefix public folder paths when deployed under a subpath (e.g. GitHub Pages). */
export function publicPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
