import { read, utils } from 'xlsx'
import { LoadingButton } from '@mui/lab'
import { ChangeEvent, FC, useState } from 'react'
import { CloudUpload } from '@mui/icons-material'
import { VisuallyHiddenInput } from './styles'
import { useTranslation } from 'react-i18next'

interface Props {
	onReady: (data: unknown[]) => void
}
export const Upload: FC<Props> = ({ onReady }) => {
	const [t] = useTranslation('home')
	const [loading, setLoading] = useState(false)

	const readUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setLoading(true)

		if (e.target.files) {
			const reader = new FileReader()

			reader.onload = e => {
				const data = e.target?.result
				const workbook = read(data, { type: 'array' })
				const sheetName = workbook.SheetNames[0]
				const worksheet = workbook.Sheets[sheetName]

				onReady(utils.sheet_to_json(worksheet))
				setLoading(false)
			}

			reader.readAsArrayBuffer(e.target.files[0])
		}
	}

	return (
		<LoadingButton
			loading={loading}
			component='label'
			variant='contained'
			loadingPosition='start'
			startIcon={<CloudUpload />}
		>
			{t('upload')}
			<VisuallyHiddenInput
				type='file'
				accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
				onChange={readUploadFile}
			/>
		</LoadingButton>
	)
}
