
import './App.css';
import Main from './components/main';
import {  Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';
import { history } from './shared/baseUrl';


const store = ConfigureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
      <Router history={history}>   
      <Main />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
