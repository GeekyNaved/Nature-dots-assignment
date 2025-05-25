import { API_BASE_URL } from "../../lib/config";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const response = await fetch(`${API_BASE_URL}/locations?coordinates=51.5074,-0.1278&radius=25000&parameters_id=3&parameters_id=5&limit=30`, {
            headers: {
                "X-API-KEY": process.env.API_KEY,
            }
        });
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch stations data" }, { status: response.status });
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            error: "Internal server error",
            details: error.message
        }, { status: 500 })
    }
}