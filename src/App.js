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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap"
        rel="stylesheet"
      />
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
