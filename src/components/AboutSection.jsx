import { Laptop, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Real-World Product Impact",
    description:
      "Terlibat langsung dalam merancang dan mengembangkan website, AI tools, serta produk digital yang digunakan oleh talenta muda Indonesia.",
  },
  {
    icon: Laptop,
    title: "100% Remote & Fleksibel",
    description:
      "Sistem kerja Work From Anywhere (WFA) yang terstruktur dan ramah bagi mahasiswa maupun early-career talent dari seluruh Indonesia.",
  },
  {
    icon: Users,
    title: "Kolaborasi Lintas Divisi",
    description:
      "Rasakan pengalaman bekerja di ekosistem kolaboratif bersama 6 divisi mulai dari AI & Data, Engineering, Creative, hingga People.",
  },
  {
    icon: Lightbulb,
    title: "Portofolio & Pengembangan Diri",
    description:
      "Bangun portofolio nyata dari proyek yang dieksekusi langsung serta tingkatkan kompetensi melalui sesi berbagi ilmu internal.",
  },
];

export default function AboutSection() {
  return (
    <div
      id="about"
      className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-stone-300/60 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/80 border border-stone-300 text-blue-700 text-xs font-semibold">
            Tentang Program
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kenapa Bertumbuh Bersama Sekolah Karir?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            Sekolah Karir bukan sekadar tempat belajar, melainkan ruang
            eksplorasi produk dan karir di mana setiap kontribusi kamu
            memberikan dampak nyata bagi perkembangan karir generasi muda.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
