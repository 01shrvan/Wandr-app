// import { executeQuery } from '@/lib/db'
// import { signToken } from '@/lib/auth'
// import { hash } from 'bcryptjs'
// import { nanoid } from 'nanoid'
// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   try {
//     const { fullName, email, password } = await request.json()

//     if (!fullName || !email || !password) {
//       return NextResponse.json(
//         { error: true, message: 'All fields are required.' },
//         { status: 400 }
//       )
//     }

//     // Check if user exists
//     const existingUser = await executeQuery(
//       'SELECT * FROM users WHERE email = ?',
//       [email]
//     )

//     if (existingUser.rows.length > 0) {
//       return NextResponse.json(
//         { error: true, message: 'User already exists.' },
//         { status: 400 }
//       )
//     }

//     const hashedPassword = await hash(password, 10)
//     const userId = nanoid()

//     await executeQuery(
//       'INSERT INTO users (id, fullName, email, password) VALUES (?, ?, ?, ?)',
//       [userId, fullName, email, hashedPassword]
//     )

//     const accessToken = await signToken({ userId })

//     return NextResponse.json({
//       error: false,
//       user: { fullName, email },
//       accessToken,
//       message: 'Registration successful.',
//     })
//   } catch (error) {
//     return NextResponse.json(
//       { error: true, message: 'Registration failed.' },
//       { status: 500 }
//     )
//   }
// }

