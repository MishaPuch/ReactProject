import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import PostBar from './components/Post/PostBar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <NavBar/>
        <div >
          <Routes>
            <Route path='/'  element={<Profile/>}/>
            <Route path='/posts'  element={<PostBar/>}/>
            <Route path='*'  element={<Profile/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
