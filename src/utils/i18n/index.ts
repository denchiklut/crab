import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { i18nConfig } from './config.ts'

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpBackend)
	.init({
		...i18nConfig
	})
