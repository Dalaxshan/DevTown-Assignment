import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import NoteHome from "./pages/NoteHome";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/noteHome" element={<NoteHome />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  );
}
export default App;
