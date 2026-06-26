import StudyDay from "./StudyDay";

export default function StudyPlan({
    plan,
}) {
    if (
        !plan ||
        !plan.days ||
        plan.days.length === 0
    ) {
        return null;
    }

    return (
        <div className="mt-10">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-white">
                    📖 {plan.topic}
                </h2>

                <p className="mt-2 text-gray-400">
                    {plan.days.length}-Day Study Plan
                </p>

            </div>

            <div className="space-y-8">

                {plan.days.map((day) => (
                    <StudyDay
                        key={day.day}
                        day={day}
                    />
                ))}

            </div>

        </div>
    );
}