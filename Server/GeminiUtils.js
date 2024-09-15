const { GoogleGenerativeAI } = require("@google/generative-ai");
const { response } = require("express");
const { stringify } = require("querystring");
require("dotenv").config();
const readline = require('readline')

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
    - Dont give any special characters just alphanumerics
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
    - Dont add any font formatting
    Use clear, simple language throughout. If you must use legal terms, define them immediately. 
    Your Response should be in JSON format in the below structure
    - "Law": An In-Depth Explanation
    - "History": Its content
    - "KeyProvision":Its content without formatting
    - "PracticalApps" : Its content without formatting
    -  "Penalties" : Its content
    - "Summary" : Its content
    - Dont give any special characters just alphanumerics
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

const getCaseStudy = async (law) =>{
    const prompt = `Act as a legal expert and create a case study based on the following law: ${law}.
   Your role is to narrate the victim’s experience in detail. Describe:
    - What happened to the victim.
    - How the victim was affected by the situation.
    - The steps the victim took in response to the issue.
    - The victim's feelings, challenges, and perspective on the situation.
    Focus only on the victim's side of the story, without introducing courtroom interactions or other characters yet. The story should highlight the legal challenges the victim faced under this law and their response to the situation.The story should be contradictory , sometimes the victim must have made some wrong choices which goes against the law.
    Return the story in this format:
    {
        "name" : victim's name,
        "age" : Age of the Victim
        "gender":Gender of the victim
        "backstory": "A brief description of the events leading to the legal situation.It should be exact 5 lines",
        "conversations" : ["Message1(What the victim has to say" ,"Message2",...so on],
        "Micromcqs" : [{
            "question" : Question ( like what would the you do in this kind of situation),
            "option1" : [context of  Option 1,color],("r" - for correct answer,"w"-for wrong answer) 
            "option2" : [context of  Option 2,color],  
            "option3" : [context of  Option 3,color],
            "option4" : [context of  Option 4,color],
        },{ question2 } and so on...] (I need a micro mcq question for every three conversations)
    }
        I don't need any extra message before or after this json response . I need at maximum of 10 conversations.
    `
    try {
        const result = await model.generateContent(prompt);
        console.log("CaseStudy Sent");
        return result.response; // Returning response
    } catch (e) {
        console.error("Gemini API Error in CaseStudy Generation:", e);
        throw new Error("Failed to generate CaseStudy.");
    }
}

const setCourtRoom = async (law,context,role) => {
    let prompt = `I will say you a context of a casestudy related to the law : ${law}. Context : ${context}.`;
    
    if (role === "for") {
        prompt += " You are a lawyer fighting for the victim. Your role is to prove the victims innocence and argue against the lawyer of the accused";
    } else {
        prompt += " You are a lawyer fighting for the accused. Your role is to prove the victim guilty and argue against the victims lawyer";
    }

    prompt += " Your responses must be strictly less than 100 words. your responses must be like a conversation";


    const chat = model.startChat({
        history: [
            {
            role: "user",
            parts: [{ text:  prompt}],
            },
            {
            role: "model",
            parts: [{ text: "Alrighty"}],
            },
        ],
    });
    
    // let response = await chat.sendMessage("The victim is not innocent");
    // console.log(response.response.candidates[0].content.parts[0].text);


    return chat;
    
}

let law = 'Law: Self-Defense (Section 96 to 106 of the Indian Penal Code, 1860)';
let context = "Alice Johnson, a 29-year-old graphic designer, was involved in a car accident caused by a faulty brake system in her vehicle. Despite reporting the issue to the dealership, the problem was not addressed. The faulty brakes led to a collision that caused Alice significant injuries and damages to her vehicle. Alice Johnson: 'I was driving home from work when the brakes failed. I tried to stop, but the car just kept moving and crashed into another vehicle.Alice Johnson: 'I reported the brake issue to the dealership before the accident, but they said it was fine and didn’t fix it.Alice Johnson: 'After the accident, I was taken to the hospital with several injuries. I had to undergo surgery and extensive physical therapy.Alice Johnson: 'I contacted the dealership again, but they refused to accept responsibility for the faulty brakes.Alice Johnson: 'I’m struggling with medical bills and car repairs, and I’m worried about how I will manage financially.Alice Johnson: 'I decided to file a complaint with a consumer protection agency, hoping they would investigate the dealership’s practices.Alice Johnson: 'The consumer protection agency confirmed that the dealership had a history of complaints about brake issues.Alice Johnson: 'I’m currently preparing to file a lawsuit against the dealership for negligence and seeking compensation for my damages.Alice Johnson: 'I feel frustrated and betrayed by the dealership. I trusted them to ensure my vehicle was safe.Alice Johnson: 'I hope to get justice and prevent others from going through a similar situation. I want the dealership to be held accountable.'"
let rol = "for";

module.exports = { simplifyLaw, expandLaw , getMCQs , getCaseStudy , setCourtRoom };


