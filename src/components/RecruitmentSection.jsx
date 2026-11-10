import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Globe,
  Layers,
  RotateCcw,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { divisions, roles } from "../data/roles";
import AboutSection from "./AboutSection";
import FaqSection from "./FaqSection";
import RoleCard from "./RoleCard";
import RoleModal from "./RoleModal";

const INITIAL_VISIBLE_COUNT = 6;

export default function RecruitmentSection() {
  const [selectedDivision, setSelectedDivision] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const totalDivisions = divisions.filter((div) => div !== "All").length;

  const filteredRoles = roles.filter((role) => {
    const matchesDivision =
      selectedDivision === "All" || role.division === selectedDivision;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      role.title.toLowerCase().includes(query) ||
      role.division.toLowerCase().includes(query) ||
      role.skills.some((skill) => skill.toLowerCase().includes(query));

    return matchesDivision && matchesSearch;
  });

  const displayedRoles = filteredRoles.slice(0, visibleCount);
  const hasMoreRoles = visibleCount < filteredRoles.length;

  const handleDivisionChange = (division) => {
    setSelectedDivision(division);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleResetFilter = () => {
    setSelectedDivision("All");
    setSearchQuery("");
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section
      aria-labelledby="recruitment-heading"
      className="min-h-screen text-slate-900"
    >
      {/* Header */}
      <div className="bg-[#FAF7F2] py-14 sm:py-20 lg:py-24 border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-300 text-blue-700 text-xs sm:text-sm font-medium mb-6 shadow-2xs">
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
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 leading-relaxed">
              Kami mengembangkan berbagai website, tools, dan produk digital
              untuk membantu talenta muda berkembang. Kami membuka kesempatan
              bagi mahasiswa dan early-career talent untuk berkembang melalui
              real projects, collaboration, dan pengalaman kerja langsung
              bersama tim Sekolah Karir.
            </p>

            {/* Quick Stats / Highlights */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200/80 shadow-xs text-sm text-slate-700">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>
                  <strong className="font-semibold text-slate-900">
                    {roles.length}
                  </strong>{" "}
                  Posisi Terbuka
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200/80 shadow-xs text-sm text-slate-700">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>
                  <strong className="font-semibold text-slate-900">
                    {totalDivisions}
                  </strong>{" "}
                  Divisi
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200/80 shadow-xs text-sm text-slate-700">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>
                  <strong className="font-semibold text-slate-900">100%</strong>{" "}
                  Remote (WFA)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter, Search & Role Cards Area */}
      <div id="open-roles" className="bg-slate-50 py-16 sm:py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            {/* Division Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter berdasarkan divisi"
              className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 no-scrollbar"
            >
              {divisions.map((division) => {
                const isActive = selectedDivision === division;
                return (
                  <button
                    key={division}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleDivisionChange(division)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {division}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari posisi atau skill..."
                aria-label="Cari posisi atau skill"
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Showing Count Info */}
          <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <p>
              Menampilkan{" "}
              <strong className="font-semibold text-slate-900">
                {displayedRoles.length}
              </strong>{" "}
              dari{" "}
              <strong className="font-semibold text-slate-900">
                {filteredRoles.length}
              </strong>{" "}
              posisi tersedia
              {selectedDivision !== "All" && (
                <span>
                  {" "}
                  di divisi{" "}
                  <strong className="font-semibold text-blue-600">
                    {selectedDivision}
                  </strong>
                </span>
              )}
            </p>
            {(selectedDivision !== "All" || searchQuery.trim() !== "") && (
              <button
                type="button"
                onClick={handleResetFilter}
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filter</span>
              </button>
            )}
          </div>

          {/* Role Cards Grid or Empty State */}
          {filteredRoles.length > 0 ? (
            <>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedRoles.map((role) => (
                  <RoleCard
                    key={role.id}
                    role={role}
                    onSelectRole={(item) => setSelectedRole(item)}
                  />
                ))}
              </div>

              {/* Load More / Show Less Controls */}
              {filteredRoles.length > INITIAL_VISIBLE_COUNT && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  {hasMoreRoles && (
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((prev) => prev + INITIAL_VISIBLE_COUNT)
                      }
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-xs text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <span>
                        Tampilkan Lebih Banyak (
                        {filteredRoles.length - visibleCount} lagi)
                      </span>
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </button>
                  )}

                  {visibleCount > INITIAL_VISIBLE_COUNT && (
                    <button
                      type="button"
                      onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 text-sm font-medium transition-colors cursor-pointer"
                    >
                      <span>Tampilkan Lebih Sedikit</span>
                      <ChevronUp className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <p className="text-base sm:text-lg font-semibold text-slate-800">
                Posisi tidak ditemukan
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Tidak ada posisi yang cocok dengan kata kunci{" "}
                <span className="font-medium text-slate-700">
                  &ldquo;{searchQuery}&rdquo;
                </span>{" "}
                pada divisi ini.
              </p>
              <button
                type="button"
                onClick={handleResetFilter}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tampilkan Semua Posisi</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* FAQ */}
      <div className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />

          {/* Bottom CTA Banner */}
          <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-8 sm:p-12 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
                Siap Bertumbuh Bersama?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Sudah Menemukan Peran yang Sesuai dengan Minatmu?
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                Jangan lewatkan kesempatan untuk berkontribusi langsung dalam
                membangun ekosistem karir dan produk digital di Sekolah Karir.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Daftar Sekarang</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#open-roles"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
              >
                Lihat Posisi Lagi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Role Detail & Apply Modal */}
      <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} />
    </section>
  );
}
