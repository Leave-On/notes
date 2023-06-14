import { useSaveNoteMutation } from 'app/api/notesApi';
import { useState } from 'react';
import cls from './NoteEditForm.module.scss';

interface NoteEditFormProps {
	noteId: number;
	initialText: string;
	initialStatusId: number | string;
	initialPriorityId: number | string;
}

export const NoteEditForm = ({ initialText, initialStatusId, initialPriorityId, noteId }: NoteEditFormProps) => {
	const [noteText, setNoteText] = useState(initialText);
	const [statusId, setStatusId] = useState(initialStatusId);
	const [priorityId, setPriorityId] = useState(initialPriorityId);
	const [saveNote, {}] = useSaveNoteMutation();
	const handleSaveNote = async () => {
		try {
			await saveNote({
				id: noteId,
				text: noteText,
				priority_id: 2,
				status_id: 2,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={cls.NoteEditForm}>
			<input
				className={cls.input}
				type="text"
				value={noteText}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNoteText(e.target.value)}
			/>
			<select
				value={statusId}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusId(e.target.value)}
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			<select
				value={priorityId}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriorityId(e.target.value)}
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			<button onClick={handleSaveNote}>Save</button>
		</form>
	);
};
