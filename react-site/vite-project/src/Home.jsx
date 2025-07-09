import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const slides = [
    { src: "/slideshow_pics/pic3.jpg", caption: "Tacos Tradicionales" },
    { src: "/slideshow_pics/pic4.jpg", caption: "Enchiladas Rojas" },
    { src: "/slideshow_pics/pic5_copy.png", caption: "Elote Callejero" },
    { src: "/slideshow_pics/pic6.jpg", caption: "Flan Casero" },
    { src: "/slideshow_pics/pic7.jpg", caption: "Churros con Canela" },
    { src: "/slideshow_pics/pic8.jpg", caption: "Horchata" },
    { src: "/slideshow_pics/pic2.jpg", caption: "Café de Olla" },
    { src: "/slideshow_pics/pic11.jpg", caption: "Margarita" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="bg-[#f4f4ca] min-h-screen text-[#333]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-evenly items-center p-6 bg-[#f7d7ba] m-6 rounded-xl shadow-md">
        <div>
        <h2 className="text-[3.5rem] font-baloo text-[#d95f76]">
          Welcome to El Axolotito
        </h2>
        <p className="font-baloo text-[#5c3c4a] mt-4 text-sm max-w-md">
          A cozy spot where flavor meets fun! 🌮✨<br />
          Enjoy vibrant Mexican dishes inspired by the charm of the axolotl.
        </p>
        </div>
        <img src="/erasebg-transformed.png" alt="Axolotl Logo" className="w-[200px] h-auto mt-6 md:mt-0" />
      </section>

      {/* Slideshow */}
      <div className="slideshow-container relative max-w-2xl mx-auto">
        {slides.map((slide, index) => (
          <div key={index} className={`fade ${index === currentSlide ? "block" : "hidden"}`}>
            <div className="numbertext absolute top-2 left-2 text-white text-sm">{index + 1} / {slides.length}</div>
            <img src={slide.src} alt={slide.caption} className="w-full max-h-[400px] object-cover rounded" />
            <div className="text absolute bottom-4 w-full text-center text-white text-base bg-black/40 py-2">{slide.caption}</div>
          </div>
        ))}

        {/* Arrows */}
        <button onClick={prevSlide} className="prev absolute top-1/2 left-0 transform -translate-y-1/2 px-4 text-white font-bold text-xl">&#10094;</button>
        <button onClick={nextSlide} className="next absolute top-1/2 right-0 transform -translate-y-1/2 px-4 text-white font-bold text-xl">&#10095;</button>
      </div>

      {/* Dots */}
      <div className="text-center mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot h-[15px] w-[15px] mx-1 rounded-full inline-block cursor-pointer ${index === currentSlide ? "bg-gray-700" : "bg-gray-400"}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
