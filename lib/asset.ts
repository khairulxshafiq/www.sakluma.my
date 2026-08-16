// Helper asset path — tambah basePath untuk GitHub Pages subpath
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (p: string) => `${basePath}${p}`;
