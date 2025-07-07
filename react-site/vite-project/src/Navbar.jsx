import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#f8bdbd] p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#d95f76]">El Axolotito</h1>
      <nav className="space-x-6">
        <Link to="/" className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">Home</Link>
        <Link to="/menu" className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">Menu</Link>
        <Link to="/about" className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">About</Link>
        <Link to="/contact" className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]">Contact</Link>
      </nav>
    </header>
  );
}