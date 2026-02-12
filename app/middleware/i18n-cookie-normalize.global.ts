export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n as {
    locale: { value: string }
    setLocale: (code: 'en' | 'nl') => Promise<void>
  }

  if (!i18n || !i18n.locale || typeof i18n.setLocale !== 'function') {
    return
  }

  const localeCookie = useCookie<string | null>('i18n_redirected')
  const supportedLocales = new Map<string, 'en' | 'nl'>([
    ['en', 'en'],
    ['nl', 'nl']
  ])

  const normalizeLocale = (value: string | null | undefined): 'en' | 'nl' | null => {
    if (!value) {
      return null
    }

    const normalized = value.toLowerCase()
    const exactMatch = supportedLocales.get(normalized)
    if (exactMatch) {
      return exactMatch
    }

    const languageOnly = normalized.split('-')[0] || ''
    return supportedLocales.get(languageOnly) || null
  }

  const normalizedCookieLocale = normalizeLocale(localeCookie.value)
  if (localeCookie.value && !normalizedCookieLocale) {
    localeCookie.value = null
  } else if (normalizedCookieLocale && normalizedCookieLocale !== localeCookie.value) {
    localeCookie.value = normalizedCookieLocale
  }

  const normalizedCurrentLocale = normalizeLocale(i18n.locale.value)
  const fallbackLocale: 'en' | 'nl' = 'en'

  if (!normalizedCurrentLocale) {
    await i18n.setLocale(fallbackLocale)
    return
  }

  if (normalizedCurrentLocale !== i18n.locale.value) {
    await i18n.setLocale(normalizedCurrentLocale)
  }
})
