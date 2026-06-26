export default function PlannerSettings({
    topic,
    setTopic,
    days,
    setDays,
    loading,
    onGenerate,
}) {
    return (
        <div className="rounded-2xl border border-gray-800 bg-black p-8">

            <div className="grid md:grid-cols-2 gap-6">

                <div>

                    <label className="block text-sm text-gray-400 mb-2">
                        Study Topic
                    </label>

                    <input
                        type="text"
                        value={topic}
                        onChange={(event) =>
                            setTopic(
                                event.target.value
                            )
                        }
                        placeholder="e.g. Chemical Equations"
                        className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                    />

                </div>

                <div>

                    <label className="block text-sm text-gray-400 mb-2">
                        Number of Days
                    </label>

                    <input
                        type="number"
                        min={1}
                        max={30}
                        value={days}
                        onChange={(event) =>
                            setDays(
                                Number(
                                    event.target.value
                                )
                            )
                        }
                        className="w-full rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                    />

                </div>

            </div>

            <button
                onClick={onGenerate}
                disabled={loading}
                className="mt-8 w-full rounded-xl bg-red-500 py-4 text-lg font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading
                    ? "Generating..."
                    : "Generate Study Plan"}
            </button>

        </div>
    );
}