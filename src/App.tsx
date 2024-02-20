import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Illustration from "./components/Illustration";
import Maintext from "./components/Maintext";
import TeamSimplifier from "./components/TeamSimplifier";

function App() {
  return (
    <div>
      <Header />
      <main className="mx-6 mb-20 md:mx-20 lg:mx-32 xl:mx-44">
        <Illustration />
        <Maintext />
        <Carousel />
      </main>
      <TeamSimplifier />
      <Footer />
    </div>
  );
}

export default App;
