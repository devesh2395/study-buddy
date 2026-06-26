export default function QuizSettings({
    topic,
    setTopic,
    questionCount,
    setQuestionCount,
    difficulty,
    setDifficulty,
    loading,
    onGenerate,
}) {
    return (
        <div className="rounded-2xl border border-gray-800 bg-black p-8 space-y-8">

            <div>
                <label className="block text-white text-lg font-semibold mb-3">
                    Topic
                </label>

                <input
                    type="text"
                    value={topic}
                    onChange={(event) =>
                        setTopic(event.target.value)
                    }
                    placeholder="Example: Chemical Equations"
                    className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
            </div>

            <div>
                <label className="block text-white text-lg font-semibold mb-3">
                    Number of Questions
                </label>

                <select
                    value={questionCount}
                    onChange={(event) =>
                        setQuestionCount(
                            Number(event.target.value)
                        )
                    }
                    className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white focus:outline-none focus:border-red-500"
                >
                    <option value={5}>
                        5 Questions
                    </option>

                    <option value={10}>
                        10 Questions
                    </option>

                    <option value={15}>
                        15 Questions
                    </option>

                    <option value={20}>
                        20 Questions
                    </option>
                </select>
            </div>

            <div>
                <label className="block text-white text-lg font-semibold mb-4">
                    Difficulty
                </label>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    {[
                        "Easy",
                        "Medium",
                        "Hard",
                        "Mixed",
                    ].map((level) => (

                        <button
                            key={level}
                            type="button"
                            onClick={() =>
                                setDifficulty(level)
                            }
                            className={`rounded-xl border px-5 py-3 font-medium transition-all ${
                                difficulty === level
                                    ? "bg-red-500 border-red-500 text-white"
                                    : "bg-gray-900 border-gray-700 text-gray-300 hover:border-red-500"
                            }`}
                        >
                            {level}
                        </button>

                    ))}

                </div>
            </div>

            <button
                onClick={onGenerate}
                disabled={
                    loading ||
                    !topic.trim()
                }
                className="w-full rounded-xl bg-red-500 py-4 text-lg font-semibold text-white hover:bg-red-600 disabled:opacity-50"
            >
                {loading
                    ? "Generating Quiz..."
                    : "Generate Quiz"}
            </button>

        </div>
    );
}