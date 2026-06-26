export default function QuizResults({
    score,
    total,
}) {
    const percentage = Math.round(
        (score / total) * 100
    );

    function getMessage() {
        if (percentage >= 90) {
            return "🌟 Outstanding!";
        }

        if (percentage >= 75) {
            return "🎉 Great job!";
        }

        if (percentage >= 50) {
            return "👍 Good effort!";
        }

        return "📚 Keep practicing!";
    }

    return (
        <div className="rounded-2xl border border-gray-800 bg-black p-8 text-center">

            <h2 className="text-3xl font-bold text-white mb-6">
                Quiz Results
            </h2>

            <div className="text-6xl font-bold text-red-500 mb-4">
                {score}/{total}
            </div>

            <div className="text-3xl font-semibold text-white mb-4">
                {percentage}%
            </div>

            <p className="text-xl text-gray-300">
                {getMessage()}
            </p>

        </div>
    );
}