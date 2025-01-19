import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

export async function signToken(payload: { userId: string }) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('72h')
    .sign(secretKey)
  
  return token
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, secretKey)
    return verified.payload as { userId: string }
  } catch (err) {
    throw new Error('Invalid token')
  }
}

export async function getUser(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1]
  if (!token) throw new Error('No token provided')
  
  return verifyToken(token)
}