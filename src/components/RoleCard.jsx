import { ArrowUpRight, Clock, MapPin } from "lucide-react";

export default function RoleCard({ role, onSelectRole }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Badges: Division & Type */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            {role.division}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {role.type}
          </span>
        </div>

        {/* Role Title */}
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {role.title}
        </h2>

        {/* Location */}
        <div className="mt-1.5 flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{role.location}</span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {role.description}
        </p>

        {/* Skills / Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        {onSelectRole ? (
          <button
            type="button"
            onClick={() => onSelectRole(role)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>Lamar Posisi</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        ) : (
          <a
            href={role.applyUrl}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
          >
            <span>Lamar Posisi</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}
