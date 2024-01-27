import common from '../../../public/locales/en/common.json'
import home from '../../../public/locales/en/home.json'

import type { defaultNamespace } from 'utils/i18n/config'

const resources = { common, home } as const

declare global {
	type AppLocale = 'en' | 'ru'
	type LocalesResources = typeof resources
}

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNamespace
		resources: LocalesResources
	}
}
