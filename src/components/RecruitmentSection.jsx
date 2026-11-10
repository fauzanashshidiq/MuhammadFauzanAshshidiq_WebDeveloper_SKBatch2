import { Briefcase, Globe, Layers, Sparkles } from "lucide-react";
import { divisions, roles } from "../data/roles";
import RoleCard from "./RoleCard";

export default function RecruitmentSection() {
  const totalDivisions = divisions.filter((div) => div !== "All").length;

  return (
    <section
      aria-labelledby="recruitment-heading"
      className="min-h-screen bg-slate-50 py-14 sm:py-20 lg:py-24 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Open Recruitment - Batch 2</span>
          </div>

          {/* Main Headline */}
          <h1
            id="recruitment-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Bangun Masa Depan Karir Indonesia Bersama{" "}
            <span className="text-blue-600">Sekolah Karir</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kami mengembangkan berbagai website, tools, dan produk digital untuk
            membantu talenta muda berkembang. Kami membuka kesempatan bagi
            mahasiswa dan early-career talent untuk berkembang melalui real
            projects, collaboration, dan pengalaman kerja langsung bersama tim
            Sekolah Karir.
          </p>

          {/* Quick Stats / Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-sm text-slate-700">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>
                <strong className="font-semibold text-slate-900">
                  {roles.length}
                </strong>{" "}
                Posisi Terbuka
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-sm text-slate-700">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>
                <strong className="font-semibold text-slate-900">
                  {totalDivisions}
                </strong>{" "}
                Divisi
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-sm text-slate-700">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>
                <strong className="font-semibold text-slate-900">100%</strong>{" "}
                Remote (WFA)
              </span>
            </div>
          </div>
        </div>

        {/* Role Cards Grid Area */}
        <div id="open-roles" className="mt-12 sm:mt-16 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
