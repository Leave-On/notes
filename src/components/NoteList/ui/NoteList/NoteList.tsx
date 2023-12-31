import cls from './NoteList.module.scss';
import { useGetNotesQuery, useAddNoteMutation } from 'app/api/notesApi';
import React, { useState } from 'react';
import { Note } from '../Note/Note';


export const NoteList: React.FC = () => {
	const [note, setNote] = useState('');
	const [priorityId, setPriorityId] = useState('1');
	const { data: notes = [], isLoading } = useGetNotesQuery();
	const [addNewNote, {}] = useAddNoteMutation();

	const handleAddNote = () => {
		const noteFormData = new FormData();
		if (note) {
			try {
				noteFormData.append('text', note);
				noteFormData.append('priority_id', priorityId);
				addNewNote(noteFormData);
			} catch (error) {
				console.log('rejected', error);
			}
			setNote('');
		}
	};

	if(isLoading) {
		return <div>Wait a second...</div>
	}

	return (
		<div className={cls.NoteList}>
			<>
				{notes.map((note) => (
					<Note note={note} key={note.id} />
				))}
				<div className={cls.add_note_form}>
					<input
						className={cls.note_input}
						type="text"
						value={note}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setNote(e.target.value)
						}
					/>
					<div className={cls.note_select_container}>
						<p>Priority</p>
						<select
							value={priorityId}
							onChange={(
								e: React.ChangeEvent<HTMLSelectElement>,
							) => setPriorityId(e.target.value)}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
					</div>
					<button onClick={handleAddNote}>Add note</button>
				</div>
			</>
		</div>
	);
};
