import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ToolGrid from '../src/components/ToolGrid';
import Shortcuts from '../src/components/Shortcuts';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ToolGrid />
        <Shortcuts />
      </main>
      <Footer />
    </div>
  );
}
