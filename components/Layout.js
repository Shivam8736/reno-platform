export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Notice Board
          </h1>

          <a
            href="/add-notice"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
          >
            + Add Notice
          </a>
        </div>

        {children}
      </div>
    </div>
  );
}