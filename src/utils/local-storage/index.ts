import { useState, useEffect, useCallback } from 'react'
import { isTypeOfLocalStorageChanged, removeFromStorage, tryParse, writeStorage } from './utils'
import type { TEvent } from './types'

export function useLocalStorage<T>(
	key: string,
	initialValue?: T
): [T, (value: T) => void, () => void] {
	const [localState, setLocalState] = useState<T>(
		(localStorage.getItem(key) as T) ?? (initialValue as T)
	)

	const changeState = useCallback((value: T) => writeStorage(key, value), [key])
	const deleteState = useCallback(() => removeFromStorage(key), [key])

	const onLocalStorageChange = useCallback(
		(event: TEvent) => {
			if (isTypeOfLocalStorageChanged(event, key)) setLocalState(event.detail.value)
			else if (event.key === key && event.newValue) setLocalState(tryParse(event.newValue))
		},
		[key]
	)

	useEffect(() => {
		const listener = (e: Event) => onLocalStorageChange(e as TEvent)
		addEventListener('onLocalStorageChange', listener)

		if (initialValue !== undefined && localStorage.getItem(key) === null)
			changeState(initialValue)

		return () => {
			removeEventListener('onLocalStorageChange', listener)
		}
	}, [])

	const state = localState === null ? (initialValue as T) : localState

	return [state, changeState, deleteState]
}
