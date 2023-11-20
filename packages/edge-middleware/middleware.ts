import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Trigger this middleware to run on the `/country` route
export const config = {
    matcher: '/country',
};

export default function middleware(request: NextRequest) {
    // nextUrl is read-only. Clone it.
    const url = request.nextUrl.clone();

    // Extract country. Default to US if not found.
    const country = (request.geo && request.geo.country) || 'US';

    url.pathname = `/country/${country}`;
    return NextResponse.rewrite(url);
}