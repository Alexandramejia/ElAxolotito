import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-center bg-[#f8bdbd] text-white p-6 text-sm mt-10 leading-6">
      <p>© 2025 El Axolotito. All rights reserved.</p>
      <p>123 Delicioso Ave, Brooklyn, NY 11211</p>
      <p>📞 (917) 555-0198 | 📧 <a href="mailto:hola@elaxolotito.com" className="underline text-white">hola@elaxolotito.com</a></p>
      <p>Open Tuesday–Sunday | 12 PM – 10 PM</p>
    </footer>
  );
}