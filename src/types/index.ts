export interface User {
    id: string
    fullName: string
    email: string
    password: string
    createdOn: string
  }
  
  export interface TravelStory {
    id: string
    title: string
    story: string
    visitedLocation: string[]
    isFavorite: boolean
    userId: string
    createdOn: string
    imageUrl: string
    visitedDate: string
  }
  
  export interface AuthResponse {
    error: boolean
    message: string
    user?: {
      fullName: string
      email: string
    }
    accessToken?: string
  }
  
  