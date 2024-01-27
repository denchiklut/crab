import { useTranslation } from 'react-i18next'
import { IconButton } from '@mui/material'
import { GTranslate, Language } from '@mui/icons-material'

export const LngSwitcher = () => {
	const { i18n } = useTranslation()
	const isEN = i18n.resolvedLanguage == 'en'

	const toggleLng = () => {
		i18n.changeLanguage(isEN ? 'ru' : 'en')
	}

	return (
		<IconButton color='inherit' sx={{ ml: 'auto', mr: 1 }} onClick={toggleLng}>
			{isEN ? <GTranslate /> : <Language />}
		</IconButton>
	)
}
