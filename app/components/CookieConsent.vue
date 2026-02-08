<script setup lang="ts">
const { t } = useI18n()
const { showBanner, acceptAll, rejectAll, setConsent } = useCookieConsent()

const isCustomizing = ref(false)
const analyticsEnabled = ref(false)
const marketingEnabled = ref(false)

function openCustomize() {
  isCustomizing.value = true
}

function savePreferences() {
  setConsent({
    analytics: analyticsEnabled.value,
    marketing: marketingEnabled.value
  })
  isCustomizing.value = false
}

function handleAcceptAll() {
  acceptAll()
  isCustomizing.value = false
}

function handleRejectAll() {
  rejectAll()
  isCustomizing.value = false
}
</script>

<template>
  <ClientOnly>
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
    >
      <div
        v-if="showBanner"
        class="fixed right-0 bottom-0 z-50 p-4"
      >
        <UCard
          class="max-w-lg"
          :ui="{ root: 'shadow-lg ring-1 ring-default' }"
        >
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold">
                {{ t('cookie.banner.title') }}
              </h3>
              <p class="mt-1 text-sm text-muted">
                {{ t('cookie.banner.description') }}
              </p>
            </div>

            <template v-if="isCustomizing">
              <div class="space-y-3">
                <USwitch
                  :model-value="true"
                  disabled
                  :label="t('cookie.categories.necessary')"
                  :description="t('cookie.categories.necessary_description')"
                />
                <USwitch
                  v-model="analyticsEnabled"
                  :label="t('cookie.categories.analytics')"
                  :description="t('cookie.categories.analytics_description')"
                />
                <USwitch
                  v-model="marketingEnabled"
                  :label="t('cookie.categories.marketing')"
                  :description="t('cookie.categories.marketing_description')"
                />
              </div>

              <div class="flex flex-wrap gap-2">
                <UButton
                  color="primary"
                  @click="savePreferences"
                >
                  {{ t('cookie.banner.save') }}
                </UButton>
                <UButton
                  variant="outline"
                  color="neutral"
                  @click="handleAcceptAll"
                >
                  {{ t('cookie.banner.accept_all') }}
                </UButton>
              </div>
            </template>

            <div
              v-else
              class="flex flex-wrap gap-2"
            >
              <UButton
                color="primary"
                @click="handleAcceptAll"
              >
                {{ t('cookie.banner.accept_all') }}
              </UButton>
              <UButton
                variant="outline"
                color="neutral"
                @click="handleRejectAll"
              >
                {{ t('cookie.banner.reject_all') }}
              </UButton>
              <UButton
                variant="ghost"
                color="neutral"
                @click="openCustomize"
              >
                {{ t('cookie.banner.customize') }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </Transition>
  </ClientOnly>
</template>
