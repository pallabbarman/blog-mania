import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NavBar from './components/Shared/NavBar/NavBar';

const App = () => (
    <Router>
        <NavBar />
        <Routes>
            <Route index path="/" element={<Home />} />
        </Routes>
    </Router>
);

export default App;
