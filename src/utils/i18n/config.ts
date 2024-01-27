import type { InitOptions } from 'i18next'

export const defaultLanguage: AppLocale = 'ru'
export const defaultNamespace = 'common'

export const i18nConfig = {
	load: 'languageOnly',
	ns: [defaultNamespace],
	defaultNS: defaultNamespace,
	fallbackLng: defaultLanguage,
	react: { useSuspense: true },
	partialBundledLanguages: true,
	interpolation: { escapeValue: false },
	supportedLngs: ['en', 'ru'] as AppLocale[]
} satisfies InitOptions
