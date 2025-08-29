export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-700">SPARK LMS ERP</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-600 hover:text-yellow-500">Features</a>
          <a href="#about" className="text-gray-600 hover:text-yellow-500">About</a>
          <a href="#contact" className="text-gray-600 hover:text-yellow-500">Contact</a>
        </nav>
        <div>
          <a
            href="/sign-in"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Login
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-yellow-100">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          All-in-One LMS ERP for Smart Institutions
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          Manage academics, track student progress, and streamline operations with
          SchooLama – your complete Learning Management & ERP solution.
        </p>
        <div className="space-x-4">
          <a
            href="/sign-in"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-white hover:bg-gray-100 border px-6 py-3 rounded-lg font-semibold text-gray-700"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-yellow-50 p-6 rounded-xl shadow text-center">
            <h4 className="text-xl font-semibold mb-2">Student Management</h4>
            <p className="text-gray-600">
              Handle admissions, attendance, and performance records all in one place.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <h4 className="text-xl font-semibold mb-2">Online Learning</h4>
            <p className="text-gray-600">
              Provide e-learning modules, assignments, and real-time evaluations.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow text-center">
            <h4 className="text-xl font-semibold mb-2">Analytics & Reports</h4>
            <p className="text-gray-600">
              Gain insights with smart dashboards and progress reports.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} SPark LMS ERP. All rights reserved.</p>
      </footer>
    </div>
  );
}
