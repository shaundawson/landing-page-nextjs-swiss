import type { Metadata } from 'next'
import MeetingsClient from './MeetingsClient'

export const meta Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function MeetingsPage() {
  return <MeetingsClient />
}
