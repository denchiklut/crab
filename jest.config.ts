export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	globalSetup: '<rootDir>/config/spec/global.ts',
	setupFilesAfterEnv: ['<rootDir>/config/spec/setup.ts'],
	transform: { '\\.[jt]sx?$': 'ts-jest' },
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
		'^components/(.*)': '<rootDir>/src/components/$1',
		'^pages/(.*)$': '<rootDir>/src/pages/$1',
		'^utils/(.*)$': '<rootDir>/src/utils/$1',
		'^assets/(.*)$': '<rootDir>/src/assets/$1',
		'^config/(.*)$': '<rootDir>/config/$1',
		'\\.(icon|image).(svg)$': '<rootDir>/config/spec/svgr.ts',
		'\\.(css|scss)$': 'identity-obj-proxy'
	}
}
