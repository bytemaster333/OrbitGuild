import { Link } from "react-router-dom";
import Quiz from "../components/Quiz";

export default function AcademyQuiz() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link to="/academy/lesson" className="text-medieval-primary hover:text-medieval-secondary transition-colors mb-4 inline-flex items-center">
          <i className="fas fa-arrow-left mr-2"></i>Back to Lesson
        </Link>
      </div>
      <Quiz />
    </div>
  );
}
