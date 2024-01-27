import invariant from 'tiny-invariant'
import type { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { startTransition, useContext, useMemo } from 'react'
import { ThemeContext } from './theme.context'
import { useLocalStorage } from 'utils/local-storage'

export const useThemeBuilder = (initialMode: PaletteMode) => {
	const [mode, setMode] = useLocalStorage<PaletteMode>('theme', initialMode)
	const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

	return {
		mode,
		theme,
		toggleMode(newMode?: PaletteMode) {
			startTransition(() => {
				if (newMode) return setMode(newMode)
				setMode(mode === 'light' ? 'dark' : 'light')
			})
		}
	}
}

export const useTheme = () => {
	const ctx = useContext(ThemeContext)
	invariant(ctx, 'useTheme must be used within a ThemeProvider')

	return ctx
}
