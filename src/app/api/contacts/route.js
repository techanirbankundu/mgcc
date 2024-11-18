import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Configure Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
const table = base(process.env.AIRTABLE_TABLE_NAME);

// Handle POST requests
export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, message } = body;

    // Add record to Airtable
    const createdRecord = await table.create([
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
    ]);

    // Respond with success
    return NextResponse.json({ success: true, record: createdRecord }, { status: 200 });
  } catch (error) {
    console.error('Error adding record to Airtable:', error);

    // Respond with an error
    return NextResponse.json(
      { success: false, error: 'Failed to save data.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
