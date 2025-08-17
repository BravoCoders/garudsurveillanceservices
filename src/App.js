import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Garud Security</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Smart Drone Surveillance</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Secure your premises with advanced Garud drones. 
          Real-time monitoring, AI alerts, and peace of mind.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h4 className="font-semibold text-xl mb-2">24/7 Surveillance</h4>
            <p>Monitor your premises anytime, anywhere.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h4 className="font-semibold text-xl mb-2">AI-Powered Alerts</h4>
            <p>Instant notifications for unusual activity.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h4 className="font-semibold text-xl mb-2">Cloud Storage</h4>
            <p>All your surveillance data securely stored.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl text-center">
            <h4 className="font-semibold text-xl mb-2">Basic</h4>
            <p className="mb-4">₹4999/month</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
          <div className="p-6 border rounded-xl text-center shadow-lg">
            <h4 className="font-semibold text-xl mb-2">Standard</h4>
            <p className="mb-4">₹9999/month</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
          <div className="p-6 border rounded-xl text-center">
            <h4 className="font-semibold text-xl mb-2">Premium</h4>
            <p className="mb-4">₹14999/month</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border rounded-lg"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border rounded-lg"
          />
          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="w-full p-3 border rounded-lg"
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2025 Garud Security. All rights reserved.</p>
      </footer>

    </div>
  );
}
