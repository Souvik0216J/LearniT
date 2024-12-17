import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBus-_Uuag8kjkdLd1mOYNSmdjvDFtmTBM");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// console.log(result.response.text());
export async function GET(request: NextRequest) {
    // const prompt = "Explain how AI works";
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    if (!q) {
        return NextResponse.json({ error: 'Missing query parameter: q' }, { status: 400 });   
    }
    const result = await model.generateContent(q);
     return NextResponse.json({ success: result }, { status: 200 });

}