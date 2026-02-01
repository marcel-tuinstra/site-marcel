declare module 'nuxt/schema' {
  interface NuxtConfig {
    studio?: {
      repository?: {
        provider?: 'github' | 'gitlab'
        owner?: string
        repo?: string
        branch?: string
        rootDir?: string
        private?: boolean
      }
      route?: string
      dev?: boolean
    }
  }

  interface NuxtOptions {
    studio?: {
      repository?: {
        provider?: 'github' | 'gitlab'
        owner?: string
        repo?: string
        branch?: string
        rootDir?: string
        private?: boolean
      }
      route?: string
      dev?: boolean
    }
  }
}

export {}
