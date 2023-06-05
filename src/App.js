
import './App.css';
import AppBody from './AppBody';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppBody/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
