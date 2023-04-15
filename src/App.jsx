import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Team } from './components/Team';

export const App = () => {
  const team = [
    {
      image: 'filiberto.jpg',
      name: 'Filiberto Martinez',
      title: 'CMO',
      cv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
      image: 'jorge.jpg',
      name: 'Jorge Garcia',
      title: 'CTO',
      cv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
    {
      image: 'ribustiano.jpg',
      name: 'Ribustiano Rodriguez',
      title: 'CFO',
      cv: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    },
  ];
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Team team={team} />

      <Footer />
    </main>
  );
};
