import NavigationBar from "./components/navigationBar/NavigationBar";
import About from "./components/sections/about/About";
import Home from "./components/sections/home/Home";
import Schedule from "./components/sections/schedule/Schedule";
import Work from "./components/sections/work/Work";
import Reviews from "./components/sections/reviews/Reviews";
import Blog from "./components/sections/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />

      <Home />
      <Work />
      <About />
      <Schedule />
      <Reviews />
      <Blog />

      <Footer />
    </div>
  );
}

export default App;
