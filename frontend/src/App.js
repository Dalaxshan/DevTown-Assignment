import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import NoteHome from './pages/noteHome';

function App() {
  return (
<Router>
  <Routes>
    <Route exact path="/noteHome" element={<NoteHome/>}/>
    <Route exact path="/login" element={<LoginPage/>}/>
  </Routes>
</Router>
}

export default App;
