export interface ProfileRating {
  rate: number
  userId: string
}

export interface ProfileRatingSchema {
  rate?: ProfileRating
  isLoading: boolean
  error?: string
}
