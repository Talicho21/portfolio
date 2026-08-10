import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Protect /admin and /api/projects routes
  if (pathname.startsWith('/admin') || (pathname.startsWith('/api/projects') && request.method !== 'GET')) {
    const token = request.cookies.get('admin_token')?.value;

    if (token !== 'authenticated') {
      if (pathname.startsWith('/api')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      } else {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/projects/:path*'],
};
