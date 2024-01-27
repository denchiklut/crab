import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'
import { AppDrawer } from './app-drawer'
import { Loader } from '../../loader'
import { Fallback } from '../error'

export const Layout = () => {
	return (
		<>
			<AppDrawer />

			<Box component='main' sx={{ p: 3 }}>
				<Toolbar />

				<ErrorBoundary fallback={<Fallback />}>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</ErrorBoundary>
			</Box>
		</>
	)
}
