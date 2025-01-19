import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Resume Enhancer</h1>
          <nav>
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Enhance Your Resume with AI
        </h2>
        <p className="text-gray-600 mt-4">
          Upload your resume, tailor it to job descriptions, and stand out from
          the crowd. Take the next step toward your dream job!
        </p>
        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            onClick={() => navigate('/register')}
          >
            Get Started
          </button>
        </div>
      </main>

      {/* Login Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Login</h3>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Resume Enhancer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default Home;