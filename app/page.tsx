export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-32">
        <p className="text-sm font-medium text-blue-500 mb-4 uppercase tracking-widest">
          Web Development &amp; Custom Tools
        </p>
        <h1 className="text-6xl font-bold leading-tight mb-6">
          I build websites for small businesses and creatives.
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl">
          Clean, fast, and built to grow with you. No tech overwhelm.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Let&apos;s talk
        </a>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">What I do</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">Marketing Sites</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Fast, good-looking websites that represent your business and convert visitors into clients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Custom Web Apps</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Booking systems, client portals, internal tools — built around how your business actually works.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Features</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Smart search, automations, and AI tools that save you time and make your product stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400">Work coming soon.</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
            I&apos;m a developer and photographer based in the DFW area. I build websites and custom tools
            for small businesses and creatives — people who need something that works, not just something
            that looks good in a proposal. I&apos;ve spent years behind the lens obsessing over details,
            and I bring that same mindset to code.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s work together</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Have a project in mind? Send me a message and I&apos;ll get back to you within a day.
          </p>
          <a
            href="mailto:dean@sharpsightedstudio.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Email me
          </a>
        </div>
      </section>

    </main>
  )
}
