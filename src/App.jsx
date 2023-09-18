import { useGlobalContext } from './Context';
import Gallery from './Gallery';
import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';

const App = () => {
  const { test } = useGlobalContext();
  console.log(test);
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
