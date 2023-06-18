import './App.css';  
import Header from './components/Header.jsx';
import NavBar from './components/NavBar';
import Profile from './components/Profile';


function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
