import '@radix-ui/themes/styles.css';
import './App.css';
import { Theme,ThemePanel  } from '@radix-ui/themes';
import Home from './components/home';

function App() {
  return (
    <Theme accentColor="blue">
        <Home />
    </Theme>
  );
}

export default App;
