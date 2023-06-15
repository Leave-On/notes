import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INote } from 'app/types';

interface AddNoteArg {
	text: string;
	priority_id: string;
}

export interface getStatusesResult {
	id: string;
	status: string;
}

export interface getPropertiesResult {
	id: string;
	name: string;
}

const baseUrl = 'https://test.ananievds.ru/';

export const notesApi = createApi({
	reducerPath: 'notesApi',
	tagTypes: ['notes'],
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getNotes: build.query<INote[], void>({
			query: () => 'notes_list',
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: 'notes' as const, id })), { type: 'notes', id: 'LIST' }]
					: [{ type: 'notes', id: 'LIST' }],
		}),
		addNote: build.mutation<INote, FormData>({
			query: (arg) => ({
				url: 'note_add',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		editNote: build.query<INote[], string>({
			query: (id) => `note_edit?note_id=${id}`,
		}),
		saveNote: build.mutation<INote, FormData>({
			query: (arg) => ({
				url: 'note_save',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		getStatuses: build.query<getStatusesResult[], void>({
			query: () => 'status_list',
		}),
		getPriorities: build.query<getPropertiesResult[], void>({
			query: () => 'priority_list',
		}),
	}),
});

export const {
	useGetNotesQuery,
	useAddNoteMutation,
	useEditNoteQuery,
	useSaveNoteMutation,
	useGetStatusesQuery,
	useGetPrioritiesQuery,
} = notesApi;
