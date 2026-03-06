/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-darker min-h-screen text-light font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Artists />
        <Gallery />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
