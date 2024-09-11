import { Route, Routes } from 'react-router-dom';
import Getuser from './pages/Getuser';
import Edituser from './pages/Edituser';


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Getuser/>}/>
        <Route path='/edit' element={<Edituser/>}/>
      </Routes>
    </>
      );
};

export default App;
