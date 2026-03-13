import { normalizeLocalePath } from '../utils/normalizeLocalePath'

export default defineNuxtRouteMiddleware((to) => {
  const normalizedPath = normalizeLocalePath(to.path)

  if (normalizedPath === to.path) {
    return
  }

  return navigateTo({
    path: normalizedPath,
    query: to.query,
    hash: to.hash
  }, {
    redirectCode: 308,
    replace: true
  })
})
