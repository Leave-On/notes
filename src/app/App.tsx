import { NoteList } from 'components/NoteList';
import { ToggleAttributes } from 'components/ToggleAttributes';
import './styles/index.scss';

export const App: React.FC = () => {
	return (
		<div className="app">
			<NoteList />
			<ToggleAttributes className='attrubutesList'/>
		</div>
	);
};
