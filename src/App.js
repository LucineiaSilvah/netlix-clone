import "./App.css";
import categorias from "./api";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/NavBar";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Banner />
      {categorias.map((catecory) => {
        return (
          <Row
            key={catecory.name}
            title={catecory.title}
            path={catecory.path}
            isLarge={catecory.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
