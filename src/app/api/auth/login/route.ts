// import { executeQuery } from '@/lib/db'
// import { signToken } from '@/lib/auth'
// import { compare } from 'bcryptjs'
// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   try {
//     const { email, password } = await request.json()

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: true, message: 'All fields are required.' },
//         { status: 400 }
//       )
//     }

//     const result = await executeQuery(
//       'SELECT * FROM users WHERE email = ?',
//       [email]
//     )

//     const user = result.rows[0]
//     if (!user) {
//       return NextResponse.json(
//         { error: true, message: 'User does not exist.' },
//         { status: 400 }
//       )
//     }

//     const isPasswordValid = await compare(password, user.password)
//     if (!isPasswordValid) {
//       return NextResponse.json(
//         { error: true, message: 'Invalid credentials.' },
//         { status: 400 }
//       )
//     }

//     const accessToken = await signToken({ userId: user.id })

//     return NextResponse.json({
//       error: false,
//       message: 'Login successful.',
//       user: { fullName: user.fullName, email: user.email },
//       accessToken,
//     })
//   } catch (error) {
//     return NextResponse.json(
//       { error: true, message: 'Login failed.' },
//       { status: 500 }
//     )
//   }
// }

