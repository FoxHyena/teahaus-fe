import { formPassword, formUsername } from '$lib/types/zodFormTypes';
import { z } from 'zod';

export const loginFormSchema = z.object({
	username: formUsername,
	password: formPassword
});

export type LoginFormSchema = typeof loginFormSchema;
