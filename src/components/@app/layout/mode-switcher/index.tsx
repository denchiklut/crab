import { IconButton } from '@mui/material'
import { useTheme } from 'utils/theme'
import { Brightness4, Brightness7 } from '@mui/icons-material'

export const ModeSwitcher = () => {
	const { mode, toggleMode } = useTheme()

	return (
		<IconButton color='inherit' onClick={() => toggleMode()}>
			{mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
		</IconButton>
	)
}
