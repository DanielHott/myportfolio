import { Header } from './components/header';
import { AddContextProvider } from './hooks/useAddContext';
import { Profile } from './components/modalProfile';
import { MyCards } from './components/cards'
import './App.css';
import { Description } from './components/modalDescription';
import { Footer } from './components/footer';
import { Projects } from './components/modalProjects';

function App() {
  return (
    <AddContextProvider>
      <Header />
      <MyCards />
      <Description />
      <Projects />
      <Profile />
      <Footer />
    </AddContextProvider>
  );
}

export default App;
