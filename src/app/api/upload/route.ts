import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return NextResponse.json(
        { error: true, message: 'No file uploaded.' },
        { status: 400 }
      )
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: true, message: 'Please upload only images.' },
        { status: 400 }
      )
    }

    const blob = await put(file.name, file, {
      access: 'public',
    })

    return NextResponse.json({ imageUrl: blob.url })
  } catch (error) {
    return NextResponse.json(
      { error: true, message: 'Failed to upload image.' },
      { status: 500 }
    )
  }
}

