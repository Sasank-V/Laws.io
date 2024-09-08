const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to simplify the law
const simplifyLaw = async (law) => {
    const prompt = `You are an expert in law with a talent for explaining complex legal concepts in simple terms. Your task is to explain the ${law} to the average citizen. Your explanation should: 
    - State the law's main purpose in 1 sentence.
    - Outline 2-3 key points using everyday language.
    - Provide 1 brief real-world example of the law's impact.
    - Avoid legal jargon or explain any technical terms immediately.
    - Keep the total explanation within 100 words.
    As a legal expert, make the law's essentials clear and accessible to someone without legal training.`;

    try {
        const result = await model.generateContent(prompt);
        console.log("Brief Law Sent");
        return result.response; // Directly return response if it's a structured object
    } catch (e) {
        console.error("Gemini API Error in Simplification:", e);
        throw new Error("Failed to simplify the law.");
    }
};

// Function to expand on the law
const expandLaw = async (law) => {
    const prompt = `You are a knowledgeable law professor with a gift for making complex legal concepts understandable to non-experts. Your student has asked for a more detailed explanation of the ${law}. Provide an in-depth yet accessible explanation that: 
    - Describes the law's historical context and why it was created.
    - Explains the law's main objectives in greater detail.
    - Outlines 4-5 key provisions or aspects of the law.
    - Discusses how the law is implemented or enforced.
    - Provides 2-3 specific examples of how the law applies in real-life situations.
    - Briefly mentions any significant legal precedents or court interpretations, if applicable.
    - Explains potential implications or effects of the law on different groups or sectors.
    Use clear, simple language throughout. If you must use legal terms, define them immediately. 
    Your Response should be in JSON format in the below structure
    - "Law": An In-Depth Explanation
    - "History": Its content
    - "KeyProvision":Its content
    - "PracticalApps" : Its content
    -  "Penalties" : Its content
    - "Summary" : Its content
    No need to add any extra characters before or after the json data. 
    `;

    try {
        const result = await model.generateContent(prompt);
        console.log("In-depth Law Sent");
        return result.response; // Returning response object
    } catch (e) {
        console.error("Gemini API Error in Expansion:", e);
        throw new Error("Failed to expand on the law.");
    }
};

// Function to generate MCQs
const getMCQs = async (law) => {
    const prompt = `You are an AI legal assistant designed to create multiple-choice questions (MCQs) that test the understanding of legal concepts by common citizens. 
    The citizens have just learned about a specific law in a simplified manner. Based on the law provided, generate questions that assess their basic understanding and ability to apply the law in everyday situations.
    The specific law is: ${law}.
    Generate 10 MCQs, each with four options and one correct answer. I need the response in the  Array of Javascript Objects format with the below structure:
    [
        {
            "question" : "The Question",
            "option1" : ["option content","color"]("r"- For Correct Answer, "w" -For Wrong Answer) ,
            "option2" : ["option content","color"],
            "option3" : ["option content","color"],
            "option4" : ["option content","color"],
        },{}... And so on
    } Make the Right option random for each question , Don't make it the same option for all the questions, I don't need any extra Characters to be before and after your response`;

    try {
        const result = await model.generateContent(prompt);
        console.log("MCQs Sent");
        return result.response; // Returning response
    } catch (e) {
        console.error("Gemini API Error in MCQ Generation:", e);
        throw new Error("Failed to generate MCQs.");
    }
};

module.exports = { simplifyLaw, expandLaw, getMCQs };


// const getCaseStudy = async () => {
//     const prompt = `You are an AI legal assistant responsible for generating case studies with conversations between various characters involved in a legal scenario. The request will include a specific caseID, and your task is to generate a conversation based on that case. The conversation should follow the storyline or structure of the case study, ensuring that the dialogue progresses naturally according to the sequence of events.

// The response should be a JSON object containing a conversation in the following format:
// {
//   "person1": "some text",
//   "person2": "some text",
//   ...
// }

// Characters available for the conversation are:
// - Judge
// - FriendlyLawyer
// - OppositionLawyer
// - Man
// - Woman
// - OldMan
// - OldWoman
// - ChildBoy
// - ChildGirl
// - Generic

// **Guidelines:**
// 1. The conversation must follow the flow of the case storyline, starting with introductions, initial claims, and moving toward key arguments, counterarguments, and concluding remarks.
// 2. Use only the provided characters to structure the conversation. Assign realistic dialogue to each character, keeping their role and personality in mind.
// 3. Ensure the conversation builds naturally, with the conflict or issue being clearly discussed by the characters as the story unfolds.
// 4. The dialogue should alternate between characters, ensuring that the conversation stays engaging and relevant to the case events.
// 5. The language should be simple, clear, and accessible for common citizens, with minimal legal jargon.
// 6. Make sure the conversation ends with a resolution or important conclusion.
// `
// }


