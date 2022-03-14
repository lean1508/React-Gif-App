import './App.css';
import Logo from './assets/Logo.png'
import { Link , Route } from 'wouter'
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import SearchResults from './pages/SearchResults/SearchResults';
import {GifsContextProvider} from './context/GifsContext'

function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
