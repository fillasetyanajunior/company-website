import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
      const data = request.cookies.get('token')
      if (data) {
            return NextResponse.next()
      } else {
            return NextResponse.redirect(new URL('/login', request.url))
      }
}

// See "Matching Paths" below to learn more
export const config = {
      matcher: '/dashboard/:path*',
}