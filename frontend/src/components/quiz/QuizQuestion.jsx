import QuizOption from "./QuizOption";

export default function QuizQuestion({
    question,
    selectedAnswer,
    onAnswerSelect,
    submitted,
}) {
    function getDifficultyColor(
        difficulty
    ) {
        switch (
            difficulty.toLowerCase()
        ) {
            case "easy":
                return "bg-green-600";

            case "medium":
                return "bg-yellow-600";

            case "hard":
                return "bg-red-600";

            default:
                return "bg-blue-600";
        }
    }

    return (
        <div className="rounded-2xl border border-gray-800 bg-black p-6 space-y-6">

            <div className="flex items-center justify-between">

                <h2 className="text-xl font-semibold text-white">
                    Question {question.id}
                </h2>

                <span
                    className={`rounded-full px-4 py-1 text-sm text-white ${getDifficultyColor(
                        question.difficulty
                    )}`}
                >
                    {question.difficulty}
                </span>

            </div>

            <p className="text-gray-200 text-lg leading-8">
                {question.question}
            </p>

            <div className="space-y-4">

                {question.options.map(
                    (
                        option,
                        index
                    ) => (
                        <QuizOption
                            key={index}
                            option={option}
                            index={index}
                            selected={
                                selectedAnswer
                            }
                            onSelect={
                                onAnswerSelect
                            }
                            submitted={
                                submitted
                            }
                            correctOption={
                                question.correct_option
                            }
                        />
                    )
                )}

            </div>

        </div>
    );
}