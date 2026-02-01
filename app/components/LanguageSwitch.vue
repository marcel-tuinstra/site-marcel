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
const menuItems = computed(() => [localeOptions.value])
const currentLocale = computed(() => localeOptions.value.find(option => option.code === locale.value) ?? localeOptions.value[0])
const menuLabel = computed(() => t('language.menu'))
</script>

<template>
  <UDropdownMenu :items="menuItems">
    <UButton
      variant="ghost"
      size="sm"
      class="rounded-full p-1"
      :aria-label="menuLabel"
    >
      <span class="sr-only">{{ menuLabel }}</span>
      <span class="flex size-4 items-center justify-center overflow-hidden rounded-full ring-1 ring-neutral-200/60 dark:ring-neutral-700/60">
        <svg
          v-if="currentLocale?.code === 'nl'"
          class="h-4 w-6"
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
          class="h-4 w-6"
          viewBox="0 0 24 16"
          aria-hidden="true"
        >
          <rect
            width="24"
            height="16"
            fill="#B22234"
          />
          <rect
            y="1.23"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="3.69"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="6.15"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="8.62"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="11.08"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="13.54"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            width="9.6"
            height="7.38"
            fill="#3C3B6E"
          />
        </svg>
      </span>
    </UButton>
    <template #item-leading="{ item }">
      <span class="flex size-4 items-center justify-center overflow-hidden rounded-full ring-1 ring-neutral-200/60 dark:ring-neutral-700/60">
        <svg
          v-if="item.code === 'nl'"
          class="h-4 w-6"
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
          class="h-4 w-6"
          viewBox="0 0 24 16"
          aria-hidden="true"
        >
          <rect
            width="24"
            height="16"
            fill="#B22234"
          />
          <rect
            y="1.23"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="3.69"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="6.15"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="8.62"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="11.08"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            y="13.54"
            width="24"
            height="1.23"
            fill="#FFFFFF"
          />
          <rect
            width="9.6"
            height="7.38"
            fill="#3C3B6E"
          />
        </svg>
      </span>
    </template>
    <template #item-label="{ item }">
      <span class="sr-only">{{ item.label }}</span>
    </template>
  </UDropdownMenu>
</template>
