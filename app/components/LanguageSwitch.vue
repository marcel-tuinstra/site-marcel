<script setup lang="ts">
const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const localeOptions = computed(() => ([
  {
    code: 'en',
    label: t('language.locale.en'),
    to: switchLocalePath('en')
  },
  {
    code: 'nl',
    label: t('language.locale.nl'),
    to: switchLocalePath('nl')
  }
]))
const currentLocale = computed(() => localeOptions.value.find(option => option.code === locale.value) ?? localeOptions.value[0])
const menuLabel = computed(() => t('language.menu'))
</script>

<template>
  <UDropdown
    :items="localeOptions"
  >
    <UButton
      variant="ghost"
      size="sm"
      class="p-1"
      :aria-label="menuLabel"
    >
      <span class="sr-only">{{ menuLabel }}</span>
      <svg
        v-if="currentLocale?.code === 'nl'"
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
    <template #item="{ item }">
      <NuxtLink
        :to="item.to"
        class="flex items-center gap-2 px-2 py-1.5"
      >
        <span class="sr-only">{{ item.label }}</span>
        <svg
          v-if="item.code === 'nl'"
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
      </NuxtLink>
    </template>
  </UDropdown>
</template>
