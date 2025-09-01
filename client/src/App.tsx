import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage.tsx";
import Home from "./pages/Home.tsx";
import Academy from "./pages/Academy.tsx";
import AcademyLesson from "./pages/AcademyLesson.tsx";
import AcademyQuiz from "./pages/AcademyQuiz.tsx";
import BuilderSingle from "./pages/BuilderSingle.tsx";
import Replay from "./pages/Replay.tsx";
import MedievalLayout from "./ui/MedievalLayout";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <MedievalLayout>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/academy" element={<Academy/>}/>
              <Route path="/academy/lesson" element={<AcademyLesson/>}/>
              <Route path="/academy/quiz" element={<AcademyQuiz/>}/>
              <Route path="/builder/single" element={<BuilderSingle/>}/>
              <Route path="/replay" element={<Replay/>}/>
            </Routes>
          </MedievalLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
