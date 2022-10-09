import About from "./components/About/About";
import Challenges from "./components/Challenges/Challenges";
import Head from "./components/Head/Head";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <main>
        <NavBar/>
        <Head/>
        <About/>
        <Challenges/>
    </main>
  );
}

export default App;
