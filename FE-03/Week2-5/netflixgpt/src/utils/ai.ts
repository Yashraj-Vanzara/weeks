import { GoogleGenAI } from "@google/genai";
import { openAiKey } from "../constants/constant";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: openAiKey,
});

export default ai;