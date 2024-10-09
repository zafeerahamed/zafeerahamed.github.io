const Profile = () => {
  return (
    <section id="home" className="mt-10 bg-gradient-to-b from-indigo-900 to-blue-400">
      <div className="text-center py-10">
        <img src="/profile.jpg" alt="Profile Picture" className="w-36 h-36 rounded-full mx-auto object-cover" />
        <h1 className="mt-10 text-6xl font-bold text-gray-100">ZAFEER AHAMED</h1>
        <div className="m-4">
          <h3 className="mt-10 text-white text-large">“Versatile Software Engineer Specializing in Fullstack Web Development, Cloud Computing, Linux, and Networking”</h3>
        </div>
        <div className="p-6">
          <div>
            <video autoPlay muted controls className="w-full border border-4 border-white rounded-lg">
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
