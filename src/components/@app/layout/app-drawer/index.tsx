import {
	AppBar,
	Button,
	Divider,
	Drawer,
	IconButton,
	Stack,
	Toolbar,
	Typography
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useToggle } from 'utils/toggle'
import { ModeSwitcher } from '../mode-switcher'
import { LngSwitcher } from '../lng-switcher'

export const AppDrawer = () => {
	const [open, toggle] = useToggle()
	const [t] = useTranslation()

	return (
		<>
			<AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton color='inherit' edge='start' sx={{ mr: 2 }} onClick={toggle}>
						<Menu />
					</IconButton>
					<Typography variant='h6' noWrap>
						{t('app_name')}
					</Typography>

					<LngSwitcher />
					<ModeSwitcher />
				</Toolbar>
			</AppBar>

			<Drawer open={open} onClick={toggle}>
				<Toolbar />
				<Stack divider={<Divider />} minWidth={250} sx={{ color: 'text.secondary' }}>
					<Button color='inherit' component={Link} to='/'>
						<Typography mr='auto' py={1}>
							Home
						</Typography>
					</Button>

					<Button color='inherit'>
						<Typography mr='auto' py={1}>
							About
						</Typography>
					</Button>
				</Stack>
			</Drawer>
		</>
	)
}
