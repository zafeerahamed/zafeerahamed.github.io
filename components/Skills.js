const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 mt-4 text-blue-950 text-center">Skills</h2>
      <div>
        <h2 className="text-l m-4 font-medium text-blue-800">FRONTEND</h2>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">HTML</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">CSS</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">JavaScript</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">ReactJS</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Tailwind CSS</button>
      </div>
      <div>
        <h2 className="text-l m-4 font-medium text-blue-800">BACKEND</h2>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Python</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Flask</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">FastAPI</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">PostgreSQL</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">MongoDB</button>
      </div>
      <div>
        <h2 className="text-l m-4 font-medium text-blue-800">ADDITIONAL</h2>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Git</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Linux</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">AWS</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Figma</button>
        <button className="p-1 m-2 rounded-md shadow-md bg-gray-100">Networking</button>
      </div>
    </section>
  );
};

export default Skills;
