import { Auth } from 'aws-amplify';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    await Auth.currentAuthenticatedUser();
    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error(error);
    throw NextResponse.redirect(new URL('/login', request.url));
  }
}