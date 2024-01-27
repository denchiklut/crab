import { StrictMode, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'src/utils'
import { Layout } from './layout'

const Home = lazy(() => import('pages/home'))
const NotFound = lazy(() => import('pages/not-found'))
export const App = () => (
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)
