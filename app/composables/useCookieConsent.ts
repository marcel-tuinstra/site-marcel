export interface CookieConsentState {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
}

const COOKIE_NAME = 'cookie-consent'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year in seconds

const defaultState: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: ''
}

export function useCookieConsent() {
  const consent = useCookie<CookieConsentState | null>(COOKIE_NAME, {
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
    default: () => null
  })

  const showBanner = useState<boolean>('cookie-consent-banner', () => false)

  const isConsentGiven = computed(() => consent.value !== null)

  const consentCategories = computed<CookieConsentState>(() => consent.value ?? defaultState)

  const hasAnalyticsConsent = computed(() => consent.value?.analytics ?? false)

  const hasMarketingConsent = computed(() => consent.value?.marketing ?? false)

  function setConsent(categories: Omit<CookieConsentState, 'necessary' | 'timestamp'>) {
    consent.value = {
      necessary: true,
      ...categories,
      timestamp: new Date().toISOString()
    }
    showBanner.value = false
  }

  function acceptAll() {
    setConsent({ analytics: true, marketing: true })
  }

  function rejectAll() {
    setConsent({ analytics: false, marketing: false })
  }

  function resetConsent() {
    consent.value = null
    showBanner.value = true
  }

  // Show banner on client if no consent given yet
  if (import.meta.client && !isConsentGiven.value) {
    showBanner.value = true
  }

  return {
    consent: readonly(consent),
    showBanner: readonly(showBanner),
    isConsentGiven,
    consentCategories,
    hasAnalyticsConsent,
    hasMarketingConsent,
    acceptAll,
    rejectAll,
    setConsent,
    resetConsent
  }
}
