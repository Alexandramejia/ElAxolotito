import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-[#f4f4ca] min-h-screen flex flex-col justify-between">
      {/* 🔝 Navbar */}
      <header className="bg-[#f8bdbd] p-4 flex justify-between items-center shadow">
        <h1 className="text-3xl font-bold text-[#d95f76]">El Axolotito</h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-white px-3 py-2 rounded hover:bg-[#f3a3a3]"
          >
            About
          </Link>
        </nav>
      </header>

      {/* 🎉 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-evenly p-6 bg-[#f7d7ba] mt-8 mx-4 rounded-xl shadow-md">
        <div className="text-center md:text-left">
          <h2 className="text-5xl text-[#d95f76] font-bold font-cursive">
            Welcome to El Axolotito
          </h2>
          <p className="mt-4 text-sm text-gray-700 font-sans max-w-md">
            Dive into a world of authentic flavors and warm hospitality. <br />
            We celebrate culture through every bite.
          </p>
        </div>
        <img
          src="/logo.png" // Make sure the logo exists in your public folder
          alt="Axolotl Logo"
          className="w-48 h-auto mt-6 md:mt-0"
        />
      </section>

      {/* 👣 Footer */}
      <footer className="text-center bg-[#f8bdbd] text-white p-3 mt-10">
        © 2025 El Axolotito. All rights reserved.
      </footer>
    </div>
  )
}