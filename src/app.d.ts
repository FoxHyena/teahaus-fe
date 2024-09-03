import type { TeaUser } from '$lib/types/teaUser';
import PocketBase from 'pocketbase';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			teaUser: TeaUser;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		namespace Superforms {
			type Message = {
				type: 'error' | 'success';
				text: string;
			};
		}
	}
}

export {};
