import '@radix-ui/themes/styles.css';
import './App.css';
import { Theme,ThemePanel  } from '@radix-ui/themes';
import Home from './components/home';

function App() {
  return (
    <Theme>
        <Home />
        <ThemePanel />
    </Theme>
  );
}

export default App;
