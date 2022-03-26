import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import LatestArticle from './components/Home/LatestArticle/LatestArticle';
import TopBanner from './components/Home/TopBanner/TopBanner';
import NavBar from './components/Shared/NavBar/NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <TopBanner />
            <LatestArticle />
        </div>
    );
}

export default App;
