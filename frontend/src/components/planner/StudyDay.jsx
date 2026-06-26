export default function StudyDay({
    day,
}) {
    return (
        <div className="rounded-2xl border border-gray-800 bg-black p-8">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-white">
                    📅 Day {day.day}
                </h2>

                <span className="rounded-full bg-red-500/20 px-4 py-2 text-red-400 font-medium">
                    ⏱ {day.study_time}
                </span>

            </div>

            <section className="mb-8">

                <h3 className="text-lg font-semibold text-white mb-4">
                    📚 Topics
                </h3>

                <ul className="space-y-3">

                    {day.topics.map((topic, index) => (
                        <li
                            key={index}
                            className="flex gap-3 text-gray-300"
                        >
                            <span className="text-red-500">
                                •
                            </span>

                            <span>{topic}</span>
                        </li>
                    ))}

                </ul>

            </section>

            <section className="mb-8">

                <h3 className="text-lg font-semibold text-white mb-4">
                    📝 Practice
                </h3>

                <ul className="space-y-3">

                    {day.practice.map(
                        (practice, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-300"
                            >
                                <input
                                    type="checkbox"
                                    className="mt-1 accent-red-500"
                                />

                                <span>
                                    {practice}
                                </span>

                            </li>
                        )
                    )}

                </ul>

            </section>

            <section>

                <h3 className="text-lg font-semibold text-white mb-4">
                    🔁 Revision
                </h3>

                <ul className="space-y-3">

                    {day.revision.map(
                        (revision, index) => (
                            <li
                                key={index}
                                className="flex gap-3 text-gray-300"
                            >
                                <span className="text-red-500">
                                    •
                                </span>

                                <span>
                                    {revision}
                                </span>

                            </li>
                        )
                    )}

                </ul>

            </section>

        </div>
    );
}