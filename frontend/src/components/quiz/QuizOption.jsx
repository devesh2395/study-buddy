export default function QuizOption({
    option,
    index,
    selected,
    onSelect,
    submitted,
    correctOption,
}) {
    const isSelected =
        selected === index;

    const isCorrect =
        correctOption === index;

    let className =
        "w-full rounded-xl border p-4 text-left transition-all ";

    if (!submitted) {
        className += isSelected
            ? "border-red-500 bg-red-500 text-white"
            : "border-gray-700 bg-gray-900 text-gray-300 hover:border-red-500";
    } else {
        if (isCorrect) {
            className +=
                "border-green-500 bg-green-500 text-white";
        } else if (isSelected) {
            className +=
                "border-red-500 bg-red-500 text-white";
        } else {
            className +=
                "border-gray-700 bg-gray-900 text-gray-400";
        }
    }

    return (
        <button
            type="button"
            disabled={submitted}
            onClick={() =>
                onSelect(index)
            }
            className={className}
        >
            <div className="flex items-start gap-4">

                <div className="font-bold text-lg">
                    {String.fromCharCode(
                        65 + index
                    )}
                </div>

                <div className="flex-1">
                    {option}
                </div>

            </div>
        </button>
    );
}