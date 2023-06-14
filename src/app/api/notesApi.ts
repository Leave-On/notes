import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INote } from 'app/types';

interface AddNoteArg {
	text: string;
	priority_id: number;
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
		addNote: build.mutation<INote, AddNoteArg>({
			query: (arg) => ({
				url: 'note_add',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		editNote: build.query<INote[], number>({
			query: (id) => `note_edit?note_id=${id}`,
		}),
		saveNote: build.mutation<INote, INote>({
			query: (arg) => ({
				url: 'note_save',
				method: 'POST',
				body: arg,
			}),
			invalidatesTags: [{ type: 'notes', id: 'LIST' }],
		}),
		getStatus: build.query<INote, void>({
			query: () => 'status_list',
		}),
		getPriority: build.query<INote, void>({
			query: () => 'priority_list',
		}),
	}),
});

export const {
	useGetNotesQuery,
	useAddNoteMutation,
	useEditNoteQuery,
	useSaveNoteMutation,
	useGetStatusQuery,
	useGetPriorityQuery,
} = notesApi;
