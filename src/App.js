
import './App.css';
import Main from './components/main';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';

const store = ConfigureStore()

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>   
      <Main />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
