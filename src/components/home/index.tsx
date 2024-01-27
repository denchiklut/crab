import { Box } from '@mui/material'
import { Upload } from './upload'

export const Home = () => {
	const onDataReady = (data: unknown[]) => {
		console.log(data)
	}
	return (
		<Box display='grid' sx={{ placeContent: 'center' }}>
			<Upload onReady={onDataReady} />
		</Box>
	)
}
