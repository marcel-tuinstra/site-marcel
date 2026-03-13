import type { NavigationMenuItem } from '@nuxt/ui'
import { normalizeLocalePath } from '../utils/normalizeLocalePath'

export const useNavLinks = () => {
  const { t } = useI18n()
  const localePath = useLocalePath()

  return computed<NavigationMenuItem[]>(() => [{
    label: t('nav.home'),
    icon: 'i-lucide-home',
    to: normalizeLocalePath(localePath('/'))
  }, {
    label: t('nav.projects'),
    icon: 'i-lucide-folder',
    to: localePath('/projects')
  // }, {
  //   label: 'Blog',
  //   icon: 'i-lucide-file-text',
  //   to: '/blog'
  }, {
    label: t('nav.about'),
    icon: 'i-lucide-user',
    to: localePath('/about')
  }])
}
