import { getFormData, validateFormData } from '$lib/server/form-utils';
import type { Actions, PageServerLoad } from './$types';
import { data as testData } from './test';

export const load = ((event) => {
	const formData = testData.get('form') as {
		name: string;
		email: string;
		color: string;
		date: string;
		datetime: string;
	};
	return { formData };
}) satisfies PageServerLoad;

type testFormData = {
	name: FormDataEntryValue;
	email: FormDataEntryValue;
	color: FormDataEntryValue;
	password: FormDataEntryValue;
	date: FormDataEntryValue;
	datetime: FormDataEntryValue;
};

export const actions: Actions = {
	testForm: async (event) => {
		const data = await getFormData<testFormData>(event);

		const validation = validateFormData(data, Object.keys(data));
		if (!validation.ok) {
			return validation.fail;
		}

		testData.set('form', {
			name: data.name?.toString(),
			email: data.email?.toString(),
			color: data.color?.toString(),
			date: data.date?.toString(),
			datetime: data.datetime?.toString()
		});

		return { success: true, name: event.url.search };
	}
};
