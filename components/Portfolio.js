const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-6 mt-4 text-blue-950 text-center">Portfolio</h2>
      <div className="text-black text-large mt-6 p-4 md:flex flex-wrap">
        {/* Portfolio Items */}
        <div className="p-4 mb-2 text-center rounded-md shadow-md w-full md:w-1/3">
          <h3 className="mb-4 text-l font-medium">Image Classification Using Machine Learning</h3>
          <ul>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className="p-4 mb-2 text-center rounded-md shadow-md w-full md:w-1/3">
          <h3 className="mb-4 text-l font-medium">Air Hockey Game Using Python</h3>
          <ul>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className="p-4 mb-2 text-center rounded-md shadow-md w-full md:w-1/3">
          <h3 className="mb-4 text-l font-medium">REST API using FastAPI and PostgreSQL</h3>
          <ul>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
