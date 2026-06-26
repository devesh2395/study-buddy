import { useState } from "react";

import WorkspaceLayout from "../layout/WorkspaceLayout";

import QuizSettings from "../components/quiz/QuizSettings";
import QuizQuestion from "../components/quiz/QuizQuestion";
import QuizResults from "../components/quiz/QuizResults";

import { generateQuiz } from "../api/api";

export default function QuizPage() {
    const [topic, setTopic] =
        useState("");

    const [
        questionCount,
        setQuestionCount,
    ] = useState(5);

    const [
        difficulty,
        setDifficulty,
    ] = useState("Mixed");

    const [loading, setLoading] =
        useState(false);

    const [questions, setQuestions] =
        useState([]);

    const [answers, setAnswers] =
        useState({});

    const [submitted, setSubmitted] =
        useState(false);

    const [score, setScore] =
        useState(0);

    async function handleGenerateQuiz() {
        if (!topic.trim()) {
            return;
        }

        try {
            setLoading(true);

            const result =
                await generateQuiz(
                    topic,
                    questionCount,
                    difficulty
                );

            console.log(
                "Quiz API Response:",
                result
            );

            setQuestions(
                result.questions || []
            );

            setAnswers({});

            setSubmitted(false);

            setScore(0);
        } catch (error) {
            console.error(error);

            alert(
                "Failed to generate quiz."
            );
        } finally {
            setLoading(false);
        }
    }

    function handleAnswerSelect(
        questionId,
        optionIndex
    ) {
        if (submitted) {
            return;
        }

        setAnswers((previous) => ({
            ...previous,
            [questionId]:
                optionIndex,
        }));
    }

    function handleSubmitQuiz() {
        let correct = 0;

        questions.forEach(
            (question) => {
                if (
                    answers[
                        question.id
                    ] ===
                    question.correct_option
                ) {
                    correct++;
                }
            }
        );

        setScore(correct);

        setSubmitted(true);
    }

    const answeredCount =
        Object.keys(answers).length;

    return (
        <WorkspaceLayout title="AI Quiz">

            <QuizSettings
                topic={topic}
                setTopic={setTopic}
                questionCount={
                    questionCount
                }
                setQuestionCount={
                    setQuestionCount
                }
                difficulty={
                    difficulty
                }
                setDifficulty={
                    setDifficulty
                }
                loading={loading}
                onGenerate={
                    handleGenerateQuiz
                }
            />

            {questions.length > 0 && (
                <>

                    <div className="mt-10 rounded-2xl border border-gray-800 bg-black p-6">

                        <div className="flex justify-between mb-3">

                            <span className="text-white font-semibold">
                                Progress
                            </span>

                            <span className="text-gray-400">
                                {
                                    answeredCount
                                }
                                {" / "}
                                {
                                    questions.length
                                }
                            </span>

                        </div>

                        <div className="w-full h-3 rounded-full bg-gray-800 overflow-hidden">

                            <div
                                className="h-full bg-red-500 transition-all duration-300"
                                style={{
                                    width: `${
                                        (answeredCount /
                                            questions.length) *
                                        100
                                    }%`,
                                }}
                            />

                        </div>

                    </div>

                    <div className="mt-10 space-y-8">

                        {questions.map(
                            (
                                question
                            ) => (
                                <QuizQuestion
                                    key={
                                        question.id
                                    }
                                    question={
                                        question
                                    }
                                    selectedAnswer={
                                        answers[
                                            question.id
                                        ]
                                    }
                                    onAnswerSelect={(
                                        option
                                    ) =>
                                        handleAnswerSelect(
                                            question.id,
                                            option
                                        )
                                    }
                                    submitted={
                                        submitted
                                    }
                                />
                            )
                        )}

                    </div>

                    {!submitted && (
                        <button
                            onClick={
                                handleSubmitQuiz
                            }
                            className="mt-10 w-full rounded-xl bg-red-500 py-4 text-lg font-semibold text-white hover:bg-red-600"
                        >
                            Submit Quiz
                        </button>
                    )}

                    {submitted && (
                        <div className="mt-10">

                            <QuizResults
                                score={
                                    score
                                }
                                total={
                                    questions.length
                                }
                            />

                        </div>
                    )}

                </>
            )}

        </WorkspaceLayout>
    );
}