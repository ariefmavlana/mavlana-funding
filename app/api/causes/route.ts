import { NextRequest, NextResponse } from 'next/server';

// Mock database - akan diganti dengan Prisma
const causes = [
  {
    id: '1',
    title: 'Hunger is stalking the globe',
    description: 'Help us provide food for thousands of families in need',
    image: '/assets/images/causes/causes_1.jpg',
    category: 'Food',
    targetAmount: 50000,
    raisedAmount: 32500,
    donors: 342,
    daysLeft: 15,
    progressPercentage: 65,
    featured: true,
  },
  // ... tambah lebih banyak causes sesuai kebutuhan
];

export async function GET(request: NextRequest) {
  try {
    // Optional: Filter by ID atau category dari query params
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    let result = causes;

    if (id) {
      result = causes.filter((cause) => cause.id === id);
      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Cause not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(result[0]);
    }

    if (category) {
      result = causes.filter((cause) => cause.category === category);
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
