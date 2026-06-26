const API_BASE_URL = "http://localhost:8000";

export async function uploadDocument(file) {
    const formData = new FormData();

    formData.append(
        "file",
        file
    );

    const response = await fetch(
        `${API_BASE_URL}/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to upload document"
        );
    }

    return await response.json();
}

export async function askTeacher(question) {
    const response = await fetch(
        `${API_BASE_URL}/teacher`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                question,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to get teacher response"
        );
    }

    return await response.json();
}

export async function generateNotes(topic) {
    const response = await fetch(
        `${API_BASE_URL}/notes`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                topic,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to generate notes"
        );
    }

    return await response.json();
}

export async function generateQuiz(
    topic,
    questionCount = 5,
    difficulty = "Mixed"
) {
    const response = await fetch(
        `${API_BASE_URL}/quiz`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                topic,
                question_count:
                    questionCount,
                difficulty,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to generate quiz"
        );
    }

    return await response.json();
}

export async function generatePlan(
    topic,
    days
) {
    const response = await fetch(
        `${API_BASE_URL}/planner`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                topic,
                days,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to generate plan"
        );
    }

    return await response.json();
}

export async function askBuddy(
    question,
    history
) {
    const response = await fetch(
        `${API_BASE_URL}/chat`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                question,
                history,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to chat with Buddy"
        );
    }

    return await response.json();
}