import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import TeacherPage from "./pages/TeacherPage";
import NotesPage from "./pages/NotesPage";
import QuizPage from "./pages/QuizPage";
import PlannerPage from "./pages/PlannerPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/teacher"
                    element={<TeacherPage />}
                />

                <Route
                    path="/notes"
                    element={<NotesPage />}
                />

                <Route
                    path="/quiz"
                    element={<QuizPage />}
                />

                <Route
                    path="/planner"
                    element={<PlannerPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}