export function getAssetUrl(path: string): string {
  if (!path) return '';
  // Remove 'public/' prefix and any leading/trailing slashes
  const cleanPath = path.replace(/^public\//, '').replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
