import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validasi input
    const { amount, donorName, donorEmail, message, causeId } = body;

    if (!amount || !donorName || !donorEmail || !causeId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (amount < 1) {
      return NextResponse.json(
        { error: 'Donation amount must be at least $1' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate dengan payment gateway (Stripe, PayPal, etc)
    // TODO: Save donation ke database dengan Prisma

    const donation = {
      id: Math.random().toString(36).substr(2, 9),
      causeId,
      amount,
      donorName,
      donorEmail,
      message: message || null,
      date: new Date(),
      status: 'pending', // akan berubah ke 'completed' setelah payment
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Donation created successfully',
        donation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Donation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const causeId = searchParams.get('causeId');

    // TODO: Fetch donations dari database berdasarkan causeId
    // For now, return mock data
    const donations = [
      {
        id: '1',
        causeId: causeId || '1',
        amount: 50,
        donorName: 'Anonymous',
        date: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      },
    ];

    return NextResponse.json(donations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
