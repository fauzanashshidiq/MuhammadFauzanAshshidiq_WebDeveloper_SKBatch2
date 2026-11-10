export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800">Sekolah Karir</span>
          <span>-</span>
          <span>Open Recruitment Batch 2</span>
        </div>
        <p>© {new Date().getFullYear()} Sekolah Karir. All rights reserved.</p>
      </div>
    </footer>
  );
}
