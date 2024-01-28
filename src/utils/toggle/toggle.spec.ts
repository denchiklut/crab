import { renderHook, act } from '@testing-library/react-hooks'
import { useToggle } from './index'

describe('useToggle', () => {
	it('should start with initial state', () => {
		const { result } = renderHook(() => useToggle(true))
		expect(result.current[0]).toBe(true)
	})

	it('should toggle state when no argument is passed', () => {
		const { result } = renderHook(() => useToggle(true))
		act(() => {
			result.current[1]()
		})
		expect(result.current[0]).toBe(false)
	})

	it('should set state when boolean argument is passed', () => {
		const { result } = renderHook(() => useToggle(false))
		act(() => {
			result.current[1](true)
		})
		expect(result.current[0]).toBe(true)
	})
})
