// Helper function to handle public assets paths for both local and production environments
export const getPublicAssetPath = (path) => {
  // Remove leading slash if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return process.env.PUBLIC_URL + '/' + cleanPath;
};