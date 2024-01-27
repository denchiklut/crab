import { useState } from 'react'
import { tryParse } from './utils'

export function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
	const [storedValue, setStoredValue] = useState<T>(() => {
		const item = localStorage.getItem(key)
		if (item === null) localStorage.setItem(key, JSON.stringify(initialValue))

		return tryParse(item) ?? initialValue
	})

	const setValue = (value: T | ((val: T) => T)) => {
		const valueToStore = value instanceof Function ? value(storedValue) : value
		localStorage.setItem(key, JSON.stringify(valueToStore))
		setStoredValue(valueToStore)
	}

	return [storedValue, setValue]
}
