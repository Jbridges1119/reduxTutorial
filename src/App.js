import './App.css'

//Components
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor/>
    </div>
  );
}

export default App;
