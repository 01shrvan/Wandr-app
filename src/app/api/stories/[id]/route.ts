// import { getUser } from '@/lib/auth'
// import { executeQuery } from '@/lib/db'
// import { NextRequest, NextResponse } from 'next/server'

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { userId } = await getUser(request)
//     const { title, story, visitedLocation, imageUrl, visitedDate, isFavorite } = await request.json()

//     // Check if updating favorite status only
//     if (typeof isFavorite === 'boolean') {
//       await executeQuery(
//         'UPDATE travel_stories SET isFavorite = ? WHERE id = ? AND userId = ?',
//         [isFavorite ? 1 : 0, params.id, userId]
//       )

//       return NextResponse.json({
//         error: false,
//         message: 'Favorite status updated successfully.',
//       })
//     }

//     // Full story update
//     if (!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
//       return NextResponse.json(
//         { error: true, message: 'All fields are required.' },
//         { status: 400 }
//       )
//     }

//     const visitedLocationJson = JSON.stringify(visitedLocation)

//     await executeQuery(
//       `UPDATE travel_stories 
//        SET title = ?, story = ?, visitedLocation = ?, imageUrl = ?, visitedDate = ? 
//        WHERE id = ? AND userId = ?`,
//       [
//         title,
//         story,
//         visitedLocationJson,
//         imageUrl,
//         new Date(parseInt(visitedDate)).toISOString(),
//         params.id,
//         userId
//       ]
//     )

//     return NextResponse.json({
//       error: false,
//       message: 'Story updated successfully.',
//     })
//   } catch (error) {
//     return NextResponse.json(
//       { error: true, message: 'Failed to update story.' },
//       { status: 500 }
//     )
//   }
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { userId } = await getUser(request)

//     await executeQuery(
//       'DELETE FROM travel_stories WHERE id = ? AND userId = ?',
//       [params.id, userId]
//     )

//     return NextResponse.json({
//       error: false,
//       message: 'Story deleted successfully.',
//     })
//   } catch (error) {
//     return NextResponse.json(
//       { error: true, message: 'Failed to delete story.' },
//       { status: 500 }
//     )
//   }
// }

