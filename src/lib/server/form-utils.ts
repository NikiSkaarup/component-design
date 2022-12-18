import { fail, type ActionFailure, type RequestEvent } from '@sveltejs/kit';

export const getFormData = async <T>(event: RequestEvent): Promise<T> =>
	Object.fromEntries((await event.request.formData()).entries()) as T;

export const validateFormData = (
	data: {
		[key: string]: FormDataEntryValue | undefined;
	},
	required: string[]
):
	| { ok: true }
	| { ok: false; fail: ActionFailure<Record<string, unknown> | undefined> | null } => {
	const entries = [...Object.entries(data)];
	const requiredEntries = entries.filter(([key]) => required.includes(key));

	let failure: ActionFailure<Record<string, unknown> | undefined> | null = null;

	for (const [key, val] of requiredEntries) {
		if (!val || val.length === 0) {
			const fields = entries.filter(([key]) => !key.includes('password'));

			failure = fail(400, {
				...Object.fromEntries(fields),
				missing: true,
				message: `${key} is required`
			});
			break;
		}
	}

	return failure ? { ok: false, fail: failure } : { ok: true };
};
