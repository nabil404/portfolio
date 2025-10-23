import { Global, StrapiResponse } from '@/types/strapi'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

interface FetchOptions extends RequestInit {
  headers?: HeadersInit
}

export async function fetchAPI<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const defaultOptions: FetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_API_TOKEN && {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      }),
    },
  }

  const mergedOptions: FetchOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }

  const response = await fetch(`${STRAPI_URL}/api${path}`, mergedOptions)

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export function getStrapiMediaUrl(url: string): string {
  return `${STRAPI_URL}${url}`
}

export async function getGlobalData() {
  return fetchAPI<StrapiResponse<Global>>('/global?populate=*')
}
