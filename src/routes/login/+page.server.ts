import { message, setError, superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema } from './loginFormSchema';
import { fail, redirect } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';

export const load = (async () => {
	return { form: await superValidate(zod(loginFormSchema)) };
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async (event) => {
		debugger;
		const form = await superValidate(event, zod(loginFormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { request, locals } = event;

		const { username, password } = form.data;
		console.log(form);

		try {
			const { token, record } = await locals.pb
				.collection('users')
				.authWithPassword(username, password);
		} catch (error: any) {
			//todo figure out error shit
		}

		// return {
		// 	form
		// };

		redirect(303, '/');
	}
};
