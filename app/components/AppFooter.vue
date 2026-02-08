<script setup lang="ts">
const { t } = useI18n()
const { footer } = useAppConfig()
const { resetConsent } = useCookieConsent()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-xs' }"
  >
    <template #left>
      <span>{{ footer.credits }}</span>
      <ClientOnly>
        <UButton
          size="xs"
          variant="link"
          color="neutral"
          class="text-xs"
          :label="t('cookie.manage')"
          @click="resetConsent"
        />
      </ClientOnly>
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
