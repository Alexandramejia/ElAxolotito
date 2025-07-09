import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <div className="bg-[#f4f4ca] min-h-screen flex flex-col font-baloo text-[#5c3c4a]">
      <Navbar />
      <main className="flex-grow flex justify-center items-center px-4 py-10">
        <div className="bg-[#fff1e6] p-8 rounded-xl shadow-lg max-w-3xl w-full text-center space-y-6">
          <h2 className="text-3xl text-[#d95f76] font-bold">About El Axolotito</h2>
          
          <p>
            Welcome to <strong className="text-xl">El Axolotito</strong>, where the spirit of Mexico lives in every dish, every color, and every corner.
            Our story began with a simple dream — to create a place where people could gather, laugh, and enjoy soulful, flavorful food
            inspired by the heart of Mexican tradition.
          </p>

          <p>
            We chose the name <strong className="text-xl">El Axolotito</strong> because it's playful, sweet, and proudly Mexican. “Axolotito” is a cute way
            to say “little axolotl” — a smiley, magical salamander native to the lakes of central Mexico. Just like our food, it's full
            of charm, culture, and joy.
          </p>

          <p>
            Native only to the ancient lakes of Xochimilco and Chalco, the axolotl is a rare and fascinating creature. Unlike most
            amphibians, it never undergoes full metamorphosis, keeping its youthful, happy face for life. That’s the feeling we want our
            restaurant to evoke — young at heart, curious, and full of fun.
          </p>

          <p>
            In Aztec mythology, the axolotl is tied to the god <strong className="text-xl">Xolotl</strong>, guardian of the underworld and twin of Quetzalcoatl.
            The legend says Xolotl took the form of an axolotl to escape sacrifice, hiding in the waters of Lake Xochimilco. In that same
            spirit of transformation and joy, our cantina blends old and new — traditional recipes served in a bright, playful space.
          </p>

          <p>
            At El Axolotito, you’ll find more than tacos and tamales. You’ll find stories, color, and a little taste of Mexico that’s proud,
            flavorful, and always welcoming.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}