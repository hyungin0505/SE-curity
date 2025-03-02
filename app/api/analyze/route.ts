import { NextResponse } from 'next/server';

const FASTAPI_URL = 'http://localhost:8000/analyze';

export async function POST(request: Request) {
  try {
    const requestData = await request.json();

    const fastApiResponse = await fetch(FASTAPI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

    const result = await fastApiResponse.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error analyzing data:', error);
    return NextResponse.json({ error: '분석 중 오류가 발생했습니다.' }, { status: 500 });
  }
}