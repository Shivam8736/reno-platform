import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            Notice Board
          </Link>

          <Link
            href="/add-notice"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Notice
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
}