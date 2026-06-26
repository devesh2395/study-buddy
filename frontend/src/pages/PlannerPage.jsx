import { useState } from "react";

import WorkspaceLayout from "../layout/WorkspaceLayout";

import PlannerSettings from "../components/planner/PlannerSettings";
import StudyPlan from "../components/planner/StudyPlan";

import { generatePlan } from "../api/api";

export default function PlannerPage() {
    const [topic, setTopic] =
        useState("");

    const [days, setDays] =
        useState(5);

    const [loading, setLoading] =
        useState(false);

    const [plan, setPlan] =
        useState(null);

    async function handleGenerate() {
        if (!topic.trim()) {
            alert(
                "Please enter a study topic."
            );
            return;
        }

        try {
            setLoading(true);

            const result =
                await generatePlan(
                    topic,
                    days
                );

            console.log(
                "Planner API Response:",
                result
            );

            setPlan(result);
        } catch (error) {
            console.error(error);

            alert(
                "Failed to generate study plan."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <WorkspaceLayout title="Study Planner">
            <PlannerSettings
                topic={topic}
                setTopic={setTopic}
                days={days}
                setDays={setDays}
                loading={loading}
                onGenerate={handleGenerate}
            />

            <StudyPlan
                plan={plan}
            />
        </WorkspaceLayout>
    );
}