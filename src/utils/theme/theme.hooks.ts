import invariant from 'tiny-invariant'
import type { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { startTransition, useContext, useMemo, useState } from 'react'
import { ThemeContext } from './theme.context'

export const useThemeBuilder = (initialMode: PaletteMode) => {
	const [mode, setMode] = useState<PaletteMode>(initialMode)
	const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

	return {
		mode,
		theme,
		toggleMode(mode?: PaletteMode) {
			startTransition(() => {
				if (mode) return setMode(mode)
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
			})
		}
	}
}

export const useTheme = () => {
	const ctx = useContext(ThemeContext)
	invariant(ctx, 'useTheme must be used within a ThemeProvider')

	return ctx
}
