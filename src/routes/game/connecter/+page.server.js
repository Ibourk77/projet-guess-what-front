import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {

const token = cookies.get("token");
if (!token) {
    redirect(303, '/');
}

    console.log(cookies.get("token"));

	return {
		// user: {
        //     // données qui viennent du back
		// }
	};
}