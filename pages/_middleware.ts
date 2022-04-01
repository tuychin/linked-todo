import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, evt) {
    if (isAuth) {
      return NextResponse.redirect('/login')
    }

    return NextResponse.next()
}
