import { CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero'; // Ensure the Hero component exists in the specified path
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Clients } from './components/Clients/Clients';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;