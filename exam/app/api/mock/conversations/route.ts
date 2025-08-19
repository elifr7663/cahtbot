import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

export async function GET() {
  try {
    // Get the path to the mock data file
    const dataPath = path.join(process.cwd(), 'data', 'mock', 'conversations.json');
    
    // Read the file
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    
    // Parse the JSON data
    const data = JSON.parse(fileContents);
    
    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading mock data:', error);
    return NextResponse.json(
      { error: 'Failed to load conversations data' },
      { status: 500 }
    );
  }
} 