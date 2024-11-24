import images from "../assets/images/images";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full rounded-b-3xl h-[90vh] bg-gradient-to-r from-[hsl(13,100%,72%)] to-[hsl(353,100%,62%)]">
    
      <figure className="m-0 overflow-hidden w-[100vw] h-[90vh] absolute z-0">
        <img
          src={images.bgPatternIntoMobile}
          alt=""
          className="m-0 z-1  top-0 left-0 -translate-x-[20%] object-cover w-[350%] h-full max-w-none"
        />
      </figure>
      <Navbar />
    </header>
  );
}

export default Header;
