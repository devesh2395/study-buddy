import { useNavigate } from "react-router-dom";

export default function FeatureGrid() {
    const navigate = useNavigate();

    const features = [
        {
            title: "Teacher",
            subtitle: "Ask questions",
            route: "/teacher",
        },
        {
            title: "Quiz",
            subtitle: "Test knowledge",
            route: "/quiz",
        },
        {
            title: "Notes",
            subtitle: "Generate notes",
            route: "/notes",
        },
        {
            title: "Planner",
            subtitle: "Create study plan",
            route: "/planner",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
                <button
                    key={feature.title}
                    onClick={() =>
                        navigate(feature.route)
                    }
                    className="p-5 rounded-2xl border border-gray-700 bg-black hover:border-red-500 transition-all"
                >
                    <h3 className="text-white text-xl font-bold">
                        {feature.title}
                    </h3>

                    <p className="text-gray-400 mt-2">
                        {feature.subtitle}
                    </p>
                </button>
            ))}
        </div>
    );
}