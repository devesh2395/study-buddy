import { useState } from "react";

import WorkspaceLayout from "../layout/WorkspaceLayout";
import PromptInput from "../components/common/PromptInput";
import ResponsePanel from "../components/common/ResponsePanel";

import { generateNotes } from "../api/api";

export default function NotesPage() {
    const [loading, setLoading] =
        useState(false);

    const [response, setResponse] =
        useState(null);

    async function handleGenerateNotes(
        topic
    ) {
        try {
            setLoading(true);

            const result =
                await generateNotes(topic);

            console.log(
                "Notes API Response:",
                result
            );

            setResponse(result);
        } catch (error) {
            console.error(error);

            setResponse({
                answer:
                    "Something went wrong while generating notes.",
                sources: [],
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <WorkspaceLayout
            title="AI Notes Generator"
        >
            <PromptInput
                placeholder="Enter a topic from your uploaded document..."
                buttonText="Generate Notes"
                onSubmit={
                    handleGenerateNotes
                }
            />

            <ResponsePanel
                loading={loading}
                response={response}
            />
        </WorkspaceLayout>
    );
}