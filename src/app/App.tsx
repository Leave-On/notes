import { NoteList } from 'components/NoteList/NoteList';
import './styles/index.scss';

export const App: React.FC = () => {
	return (
		<div className="app">
			<NoteList />
		</div>
	);
};
