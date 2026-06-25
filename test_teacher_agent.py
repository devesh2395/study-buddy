from app.services.teacher_agent import (
    TeacherAgent
)

agent = TeacherAgent()

response = agent.answer_question(
    "What is a chemical reaction?"
)

print("\n=== ANSWER ===\n")
print(response)
print("\n==============\n")