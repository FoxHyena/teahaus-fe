import { z } from 'zod';

export const formUsername = z.string().min(2).max(50);
export const formPassword = z.string();
