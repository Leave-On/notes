import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
