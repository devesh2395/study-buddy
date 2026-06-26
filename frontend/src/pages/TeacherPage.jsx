import { useState } from "react";

import WorkspaceLayout from "../layout/WorkspaceLayout";
import PromptInput from "../components/common/PromptInput";
import ResponsePanel from "../components/common/ResponsePanel";

import { askTeacher } from "../api/api";

export default function TeacherPage() {
    const [loading, setLoading] = useState(false);

    const [response, setResponse] = useState(null);

    async function handleQuestion(question) {
        try {
            setLoading(true);

            const result = await askTeacher(question);

            console.log("Teacher API Response:", result);

            // Store the entire response object
            setResponse(result.answer);
        } catch (error) {
            console.error(error);

            setResponse({
                answer: "Something went wrong.",
                sources: [],
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <WorkspaceLayout title="AI Teacher">
            <PromptInput
                placeholder="Ask anything from your uploaded document..."
                buttonText="Ask"
                onSubmit={handleQuestion}
            />

            <ResponsePanel
                loading={loading}
                response={response}
            />
        </WorkspaceLayout>
    );
}