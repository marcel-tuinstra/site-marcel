export const normalizeLocalePath = (path: string) => {
  return /^\/(en|nl)$/.test(path) ? `${path}/` : path
}
