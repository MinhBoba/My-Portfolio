import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, INDUSTRIAL_PROJECTS, PERSONAL_PROJECTS } from '../constants';

// Initialize the Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
const PROJECTS = [...INDUSTRIAL_PROJECTS, ...PERSONAL_PROJECTS];
// Construct the system instruction to give the AI context about the candidate
const constructSystemInstruction = (): string => {
  const skillsStr = SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ');
  const expStr = EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ');
  const projStr = PROJECTS.map(p => `${p.title} (${p.techStack.join(', ')})`).join('; ');

  return `
    You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website.
    Your goal is to answer questions from recruiters or potential clients about ${PERSONAL_INFO.name}.
    
    Here is the context about ${PERSONAL_INFO.name}:
    - Title: ${PERSONAL_INFO.title}
    - Tagline: ${PERSONAL_INFO.tagline}
    - Bio: ${PERSONAL_INFO.bio}
    - Skills: ${skillsStr}
    - Experience: ${expStr}
    - Projects: ${projStr}
    - Contact Email: ${PERSONAL_INFO.email}
    
    Tone: Professional, enthusiastic, concise, and helpful.
    If asked about something not in this context, politely say you don't have that specific information but suggest contacting ${PERSONAL_INFO.name} directly via email.
    Keep answers relatively short (under 100 words) as this is a chat interface.
  `;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm sorry, my brain (API Key) is missing. Please contact the developer to fix this configuration.";
    }

    const systemInstruction = constructSystemInstruction();
    
    // Using gemini-3-flash-preview as it is fast and efficient for text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I didn't get a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};
