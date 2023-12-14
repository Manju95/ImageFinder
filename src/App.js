import './App.css';
import { Route, Routes } from 'react-router-dom';
import ImageContainer from './components/ImageCard/ImageConatiner';
import UserThumbnail from './components/UserThumbnail/UserThumbnail';
import NotFoundPage from './components/Error/NotFoundPage';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/image' Component={ImageContainer} />
        <Route path='/profile' Component={UserThumbnail} />
        <Route path='*' Component={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
