import { createClient } from '@libsql/client'

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN as string,
})

export async function executeQuery(query: string, params: any[] = []) {
  try {
    const result = await db.execute({ sql: query, args: params })
    return result
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

