import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/Home/Home/Home';
import NavBar from './components/Shared/NavBar/NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
