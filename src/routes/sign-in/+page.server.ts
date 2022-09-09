import type { Actions } from './$types';
import jwt from 'jsonwebtoken';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.get('name');

		const token = jwt.sign({ data: { name } }, 'secret');

		cookies.set('token', token, { httpOnly: true, secure: true });

		return { success: true };
	}
};
