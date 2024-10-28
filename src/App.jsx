import Header from './components/Header.jsx';
import AboutSection from './components/AboutSection.jsx';
import TeamSection from './components/TeamSection.jsx';
import Info from './components/Info.jsx';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <TeamSection />
        <Info />
      </main>
      <AboutUs />
    </>
  );
}


export default App;