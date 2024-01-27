import invariant from 'tiny-invariant'
import { createRoot } from 'react-dom/client'
import { App } from 'components/@app'
import 'utils/i18n'

const root = document.getElementById('root')
invariant(root, 'root element not found')

createRoot(root).render(<App />)
