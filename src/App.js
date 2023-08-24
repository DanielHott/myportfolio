import { Header } from './components/header';
import { AddContextProvider } from './hooks/useAddContext';
import { Profile } from './components/modalProfile';
import { MyCards } from './components/cards'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Description } from './components/modalDescription';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import { MyProjects } from './components/projects/styles';
import { Slide } from './components/slide';
import { About } from './components/about';
import { Speciality } from './components/specialists';
import { Tecs } from './components/tecs';

function App() {
  return (
    <AddContextProvider>
      <Header />
      <Slide />
      <About />
      <Speciality />
      <Tecs />
      <MyProjects>
      <h2>My Projects</h2>
      </MyProjects>
      <Projects />
      <Footer />
    </AddContextProvider>
  );
}

export default App;
