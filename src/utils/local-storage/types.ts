export interface TEvent extends StorageEvent {
	detail: { key: string; value: never }
}
