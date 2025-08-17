import React from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button";

export default function App() { return ( <div className="min-h-screen flex flex-col"> {/* Navbar */} <nav className="w-full flex justify-between items-center p-4 shadow"> <h1 className="text-2xl font-bold">Garud Drones</h1> <div className="space-x-4"> <a href="#services">Services</a> <a href="#pricing">Pricing</a> <a href="#contact">Contact</a> </div> </nav>

{/* Hero Section */}
  <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-4"
    >
      Smart Surveillance with Garud
    </motion.h2>
    <p className="text-lg text-gray-600 max-w-2xl mb-6">
      Reliable drone services for security, monitoring, and safety.
    </p>
    <Button>Get Started</Button>
  </section>

  {/* Features Section */}
  <section id="services" className="py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-white shadow rounded-2xl">
      <h3 className="font-semibold text-xl mb-2">Surveillance</h3>
      <p className="text-gray-600">24/7 monitoring with real-time alerts.</p>
    </div>
    <div className="p-6 bg-white shadow rounded-2xl">
      <h3 className="font-semibold text-xl mb-2">Security</h3>
      <p className="text-gray-600">Keep your spaces safe with AI-enabled drones.</p>
    </div>
    <div className="p-6 bg-white shadow rounded-2xl">
      <h3 className="font-semibold text-xl mb-2">Data</h3>
      <p className="text-gray-600">Accurate reports and analytics at your fingertips.</p>
    </div>
  </section>

  {/* Pricing Section */}
  <section id="pricing" className="py-20 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      <div className="p-6 bg-white shadow rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">Basic</h3>
        <p className="text-gray-600 mb-4">For small-scale monitoring</p>
        <p className="text-2xl font-bold mb-4">₹999/mo</p>
        <Button>Choose</Button>
      </div>
      <div className="p-6 bg-white shadow rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">Standard</h3>
        <p className="text-gray-600 mb-4">Best for businesses</p>
        <p className="text-2xl font-bold mb-4">₹4999/mo</p>
        <Button>Choose</Button>
      </div>
      <div className="p-6 bg-white shadow rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
        <p className="text-gray-600 mb-4">Advanced features & support</p>
        <p className="text-2xl font-bold mb-4">₹14999/mo</p>
        <Button>Choose</Button>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="py-20 px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <p className="text-gray-600 mb-4">Have questions? We’d love to hear from you.</p>
    <form className="max-w-lg mx-auto flex flex-col space-y-4">
      <input className="border p-3 rounded" type="text" placeholder="Your Name" />
      <input className="border p-3 rounded" type="email" placeholder="Your Email" />
      <textarea className="border p-3 rounded" placeholder="Your Message"></textarea>
      <Button type="submit">Send</Button>
    </form>
  </section>

  {/* Footer */}
  <footer className="py-6 text-center bg-gray-900 text-white">
    <p>© 2025 Garud Drones. All rights reserved.</p>
  </footer>
</div>

); }

