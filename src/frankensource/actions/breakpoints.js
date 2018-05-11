export const UPDATE_BREAKPOINTS = 'UPDATE_BREAKPOINTS'

export function updateBreakpoints() {
	return {
		type: UPDATE_BREAKPOINTS
	}
}

// App breakpoints are defined here
export const breakpointDefinition = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1280
}
