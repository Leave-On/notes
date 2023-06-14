import { Note } from '../Note/Note';
import cls from './NoteList.module.scss';
import { useGetNotesQuery, useAddNoteMutation, useGetStatusQuery, useGetPriorityQuery } from 'app/api/notesApi';
import React, { useEffect, useState } from 'react';

interface PrioritySelect extends Omit<HTMLSelectElement, 'value'> {
	value: number;
}

interface NoteListProps {}

export const NoteList = ({}: NoteListProps) => {
	const [note, setNote] = useState('');
	const [priorityId, setPriorityId] = useState('1');
	const { data: notes = [], isLoading } = useGetNotesQuery();
	const [addNewNote, {}] = useAddNoteMutation();

	const handleAddNote = async () => {
		if (note) {
			try {
				fetch('https://test.ananievds.ru/note_add', {
					method: 'POST',
					body: JSON.stringify({ text: note, priority_id: parseInt(priorityId) }),
				}).then((res) => console.log(res));

				// await addNewNote({
				//     text: note,
				//     priority_id: parseInt(priorityId)
				// }).unwrap()

				console.log('fulfilled');
			} catch (error) {
				console.log('rejected', error);
			}
			setNote('');
		}
	};

	// const {data: statusList} = useGetStatusQuery()
	// const {data: priorityList} = useGetPriorityQuery()
	// console.log('getstatus', statusList);
	// console.log('getPriority', priorityList);

	return (
		<div className={cls.NoteList}>
			<>
				{notes.map((note) => (
					<Note note={note} key={note.id} />
				))}
				<div>
					<input
						type="text"
						value={note}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}
					/>
					<select
						value={priorityId}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriorityId(e.target.value)}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<button onClick={handleAddNote}>Add note</button>
				</div>
			</>
		</div>
	);
};
