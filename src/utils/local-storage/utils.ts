export const tryParse = (value: Nullable<string>) => {
	if (value === null) return null

	try {
		return JSON.parse(value)
	} catch (err) {
		return value
	}
}
