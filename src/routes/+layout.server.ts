import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.teaUser) {
		return {
			user: locals.teaUser
		};
	}
}) satisfies LayoutServerLoad;
