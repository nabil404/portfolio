export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiMedia {
  id: number
  name: string
  url: string
  formats?: {
    thumbnail?: { url: string }
    small?: { url: string }
    medium?: { url: string }
  }
}

export interface StrapiData<T> {
  id: number
  attributes: T
}

export interface Global {
  siteTitle: string
  designation1: string
  designation2: string
  tagline: string
  resume: StrapiMedia
  heroImage: StrapiMedia
}
