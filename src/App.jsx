import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecruitmentSection from "./components/RecruitmentSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <RecruitmentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
