"use client";

const Footer = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" class="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">Contact Me</h5>
            <ul>
            <li><p>Dubai, United Arab Emirates</p></li>
            <li><p>Phone: +971 52 531 0747</p></li>
            <li><a className="decoration-none" href="mailto:emailzafir@gmail.com">Email: emailzafir@gmail.com</a></li></ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-bold mb-4">Follow Me</h5>
            <div className="flex space-x-4">
              <ul>
                <li><a href="https://www.linkedin.com/in/zafeerahamed" className="text-white hover:text-gray-400">LinkedIn</a></li>
                <li><a href="https://www.github.com/zafeerahamed" className="text-white hover:text-gray-400">Github</a></li>
                <li><a href="https://www.x.com/zafeer_ahamed" className="text-white hover:text-gray-400">Twitter</a></li>
                <li><a href="https://www.instagram.com/urzafeer" className="text-white hover:text-gray-400">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <ul>
              <li><button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-400">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-400">About</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-gray-400">Portfolio</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Zafeer Ahamed. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;