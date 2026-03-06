import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateTattooImage(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: `A high quality, professional tattoo design. ${prompt}. Clean lines, tattoo flash style, isolated on white background.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image generated");
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

export async function answerTattooQuestion(question: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: "You are a professional tattoo artist. Answer questions about tattoos, aftercare, pain, and styles accurately and professionally.",
        tools: [{ googleSearch: {} }],
      },
    });
    return response.text || "Sorry, I couldn't answer that right now.";
  } catch (error) {
    console.error("Error answering question:", error);
    throw error;
  }
}
