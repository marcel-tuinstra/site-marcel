export default defineNuxtPlugin(() => {
  const { hasAnalyticsConsent, hasMarketingConsent } = useCookieConsent()
  const { gtag } = useGtag()

  // Update consent when user preferences change
  watch([hasAnalyticsConsent, hasMarketingConsent], ([analytics, marketing]) => {
    gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied'
    })
  }, { immediate: true })
})
