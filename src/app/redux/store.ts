import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from 'app/api/notesApi';

export const store = configureStore({
	reducer: {
		[notesApi.reducerPath]: notesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(notesApi.middleware),
});
