import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#f8bdbd] p-4 w-full overflow-x-auto">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-3xl font-baloo font-bold text-[#d95f76] mb-2 sm:mb-0">El Axolotito</h1>
        <nav className="flex space-x-4 sm:space-x-6 font-baloo text-[#5c3c4a] text-base">
          <Link to="/"className="hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3] transition">Home</Link>
          <Link to="/menu"className="hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3] transition">Menu</Link>
          <Link to="/about"className="hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3] transition">About</Link>
          <Link to="/contact"className="hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3] transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
