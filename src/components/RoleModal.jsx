import { ArrowUpRight, CheckCircle2, Clock, MapPin, X } from "lucide-react";

export default function RoleModal({ role, onClose }) {
  if (!role) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Division Badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
          {role.division}
        </span>

        {/* Title & Meta */}
        <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">
          {role.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600" />
            {role.type}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-blue-600" />
            {role.location}
          </span>
        </div>

        {/* Description */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Deskripsi Peran
          </h4>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            {role.description}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Keahlian & Fokus Utama
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {role.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
          >
            Kembali
          </button>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
          >
            <span>Lanjut ke Form Pendaftaran</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
