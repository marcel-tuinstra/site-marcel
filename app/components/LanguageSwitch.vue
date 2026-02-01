<script setup lang="ts">
const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const otherLocale = computed(() => (locale.value === 'en' ? 'nl' : 'en'))
const switchLabel = computed(() => t('language.switch_to', { locale: t(`language.locale.${otherLocale.value}`) }))
</script>

<template>
  <UButton
    :to="switchLocalePath(otherLocale)"
    variant="ghost"
    size="sm"
    class="p-1"
    :aria-label="switchLabel"
  >
    <span class="sr-only">{{ switchLabel }}</span>
    <svg
      v-if="otherLocale === 'nl'"
      class="h-5 w-6 rounded-sm"
      viewBox="0 0 24 16"
      aria-hidden="true"
    >
      <rect
        width="24"
        height="16"
        fill="#21468B"
      />
      <rect
        width="24"
        height="10.67"
        fill="#FFFFFF"
      />
      <rect
        width="24"
        height="5.33"
        fill="#AE1C28"
      />
    </svg>
    <svg
      v-else
      class="h-5 w-6 rounded-sm"
      viewBox="0 0 24 16"
      aria-hidden="true"
    >
      <rect
        width="24"
        height="16"
        fill="#012169"
      />
      <path
        d="M0 0 L24 16 M24 0 L0 16"
        stroke="#FFFFFF"
        stroke-width="3"
      />
      <path
        d="M0 0 L24 16 M24 0 L0 16"
        stroke="#C8102E"
        stroke-width="1.5"
      />
      <rect
        x="10"
        width="4"
        height="16"
        fill="#FFFFFF"
      />
      <rect
        y="6"
        width="24"
        height="4"
        fill="#FFFFFF"
      />
      <rect
        x="11"
        width="2"
        height="16"
        fill="#C8102E"
      />
      <rect
        y="7"
        width="24"
        height="2"
        fill="#C8102E"
      />
    </svg>
  </UButton>
</template>
