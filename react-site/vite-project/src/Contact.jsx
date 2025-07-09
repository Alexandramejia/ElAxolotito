import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  return (
    <div className="bg-[#f4f4ca] min-h-screen flex flex-col font-baloo overflow-x-hidden">
      <Navbar />

      <main className="flex-grow contact-page px-4 py-10">
        <section className="w-full max-w-2xl mx-auto bg-[#fff1e6] p-8 rounded-xl shadow-md">
          <h2 className="text-center text-3xl mb-6 font-semibold text-[#d95f76]">Contact Us</h2>
          <form id="contact-form" className="flex flex-col gap-4">
            <label htmlFor="name" className="text-sm text-[#5c3c4a] font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 border border-gray-300 rounded"
            />

            <label htmlFor="email" className="text-sm text-[#5c3c4a] font-medium">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-2 border border-gray-300 rounded"
            />

            <label htmlFor="message" className="text-sm text-[#5c3c4a] font-medium">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="p-2 border border-gray-300 rounded resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#f8bdbd] hover:bg-[#e57373] text-white font-semibold py-2 px-4 rounded transition"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="w-full max-w-4xl mx-auto mt-12 px-4">
          <h2 className="text-center text-2xl mb-4 font-semibold text-[#d95f76]">Find Us</h2>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="El Axolotito Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24186.538516647302!2d-73.89973728916014!3d40.733042800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e35d93207ff%3A0x646060e2057c5f9d!2sChipotle%20Mexican%20Grill!5e0!3m2!1sen!2sus!4v1749131634972!5m2!1sen!2sus"
              className="absolute top-0 left-0 w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


