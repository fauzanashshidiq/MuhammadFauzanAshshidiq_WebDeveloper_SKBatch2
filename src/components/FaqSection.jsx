import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Siapa saja yang bisa mendaftar di Open Recruitment Batch 2?",
    answer:
      "Program ini terbuka untuk mahasiswa aktif dari semua semester/jurusan, fresh graduate, maupun early-career talent yang memiliki minat tinggi untuk berkembang di bidang teknologi, produk digital, kreatif, dan manajemen komunitas.",
  },
  {
    question: "Bagaimana sistem kerja selama program berlangsung?",
    answer:
      "Seluruh posisi dijalankan secara 100% Remote (Work From Anywhere) dengan komunikasi dan koordinasi tim yang terstruktur secara online, sehingga tetap fleksibel mengikuti jadwal perkuliahan atau aktivitas utamamu.",
  },
  {
    question: "Apakah saya harus memiliki pengalaman kerja sebelumnya?",
    answer:
      "Pengalaman kerja formal tidak wajib. Kami lebih menilai kemauan belajar, kemampuan problem-solving yang praktis, serta kesesuaian minat atau portofolio dasar dengan posisi yang kamu lamar.",
  },
  {
    question: "Apakah saya boleh melamar lebih dari satu posisi?",
    answer:
      "Kami menyarankan kamu memilih 1 posisi utama yang paling sesuai dengan keahlian dan minatmu agar fokus saat proses evaluasi dan pengerjaan mini assignment.",
  },
  {
    question: "Bagaimana tahapan seleksi di Sekolah Karir?",
    answer:
      "Tahapan seleksi meliputi: (1) Pengisian formulir & screening berkas/CV, (2) Pengerjaan mini assignment sesuai posisi yang dipilih, (3) Interview, dan (4) Pengumuman hasil seleksi.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div id="faq" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 text-left lg:sticky lg:top-24">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            FAQ
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Temukan jawaban singkat seputar proses pendaftaran, kriteria
            kandidat, dan sistem kerja di Sekolah Karir Batch 2.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-colors bg-white ${
                  isOpen
                    ? "border-blue-200 shadow-xs"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
