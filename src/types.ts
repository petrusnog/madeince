// Types for the Made in CE application

export interface Activity {
  id: number
  number: string
  title: string
  date: string
  location: string
  description: string
  link?: string
}

export interface Stat {
  label: string
  value: string
}

export interface MediaItem {
  id: number
  source: string
  title: string
  link: string
}

export interface EditMode {
  type: 'activity' | 'media'
  id: number
}

export interface AboutData {
  title: string
  description: string
}

export interface ContactData {
  instagram: string
  youtube: string
  spotify: string
}
