export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
            SK
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Sekolah<span className="text-blue-600">Karir</span>
          </span>
        </a>

        {/* Navigation & Action */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <a
            href="#open-roles"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors hidden sm:inline-block"
          >
            Posisi Terbuka
          </a>
          <a
            href="#open-roles"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
          >
            Daftar Batch 2
          </a>
        </nav>
      </div>
    </header>
  );
}
