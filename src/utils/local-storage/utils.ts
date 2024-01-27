import type { TEvent } from './types'

export const tryParse = <T>(value: string | null): T => {
	try {
		return JSON.parse(value ?? '')
	} catch (err) {
		return value as T
	}
}

export const fireEvent = <T>(payload: { key: string; value: T }) =>
	new CustomEvent('onLocalStorageChange', { detail: payload })

export const isTypeOfLocalStorageChanged = (evt: TEvent, key: string) => evt?.detail?.key === key

export const writeStorage = <T>(key: string, value: T) => {
	localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : `${value}`)
	dispatchEvent(fireEvent({ key, value }))
}

export function removeFromStorage(key: string) {
	localStorage.removeItem(key)
	dispatchEvent(fireEvent({ key, value: '' }))
}
