import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#f8bdbd] p-4 flex justify-between items-center">
      <h1 className="text-3xl font-baloo font-bold text-[#d95f76]">El Axolotito</h1>
      <nav className="space-x-6">
        <Link to="/" className="font-baloo text-[#5c3c4a] hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">Home</Link>
        <Link to="/menu" className="font-baloo text-[#5c3c4a] hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">Menu</Link>
        <Link to="/about" className="font-baloo text-[#5c3c4a] hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">About</Link>
        <Link to="/contact" className="font-baloo text-[#5c3c4a] hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">Contact</Link>
      </nav>
    </header>
  );
}