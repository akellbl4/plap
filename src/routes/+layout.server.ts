import type { LayoutServerLoad } from './$types';

interface User {
	name: string;
}

export type Session = User | null;

function getSession(token: string | undefined): Session {
	console.log('token', token);
	return null;
}

export const load: LayoutServerLoad<{ session: Session }> = async ({ cookies }) => {
	const token = cookies.get('token');
	const session = getSession(token);

	return { session };
};
