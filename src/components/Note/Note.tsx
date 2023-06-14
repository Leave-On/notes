import { useEditNoteQuery } from 'app/api/notesApi';
import { INote } from 'app/types';
import { NoteEditForm } from 'components/NoteEditForm/NoteEditForm';
import { useState } from 'react';
import cls from './Note.module.scss';

interface NoteProps {
	note: INote;
}

export const Note = ({ note }: NoteProps) => {
	const { data, error, isError } = useEditNoteQuery(note.id);
	const [isEdit, setIsEdit] = useState(false);
	const [editedNote, setEditedNote] = useState<INote>(null);

	const handleEdit = () => {
		if (data) {
			console.log(data[0].text);
			setEditedNote(data[0]);
			setIsEdit(true);
		}
		if (isError) {
			alert(error);
		}
	};

	return (
		<div className={cls.Note}>
			{isEdit ? (
				<NoteEditForm
					noteId={editedNote.id}
					initialText={editedNote.text}
					initialStatusId={editedNote.status_id}
					initialPriorityId={editedNote.priority_id}
				/>
			) : (
				<div className={cls.note_item}>
					<div key={note.id}>{note.text}</div>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
		</div>
	);
};
