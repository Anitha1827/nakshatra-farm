import Aboutus from "./aboutus";
import Carousel from "./carousel";
import Footer from "./footer";
import Nav from "./nav";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Carousel />
      <Aboutus />
      <Footer />
    </main>
  );
}
