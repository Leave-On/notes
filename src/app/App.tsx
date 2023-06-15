import { NoteList } from 'components/NoteList/ui/NoteList/NoteList';
import { ToggleAttributes } from 'components/ToggleAttributes/ui/ToggleAttributes/ToggleAttributes';
import './styles/index.scss';

export const App: React.FC = () => {
	return (
		<div className="app">
			<NoteList />
			<ToggleAttributes className='attrubutesList'/>
		</div>
	);
};
