type EventType = {
  eventId: number
  name: string
  description: string
  location: string
  image: string
  fee: number
  cancelDeadline: Date
  startAt: Date
  endAt: Date
  communityId: number
  userId: number
  createdAt: Date
  updatedAt: Date
}

type CommunityType = {
  communityId: number
  name: string
  description: string
  activityArea: string
  createdAt: Date
  updatedAt: Date
}

type ProfileType = {
  userId: number
  name: string
  nickname: string
  birthyear: number
  livingArea: string
  skillLevel: string
  experiencePeriod: string
  introduction: string
  image: string
}

export type { CommunityType, EventType, ProfileType }
