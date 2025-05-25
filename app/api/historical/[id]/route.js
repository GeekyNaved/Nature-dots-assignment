import dayjs from "dayjs";
import { API_BASE_URL } from "../../../lib/config";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;

    // getting past 7 days
    const dateTo = dayjs();
    const dateFrom = dayjs().subtract(7, 'day');

    // format dates
    const date_to = dateTo.toISOString();
    const date_from = dateFrom.toISOString();

    try {
        const response = await fetch(`${API_BASE_URL}/sensors/${id}/days/dayofweek?date_to=${date_to}&date_from=${date_from}`, {
            headers: {
                "X-API-KEY": process.env.API_KEY,
            }
        });
        if (!response.ok) {
            return NextResponse.json({ error: "Failed to fetch historical data" }, { status: response.status });
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