export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}
