import Event from './components/Event'
import { EventType } from './types/types'

const events: EventType[] = [
  {
    eventId: 1,
    name: 'ワイワイやってるよ！',
    description:
      'ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！',
    image: '/thumbnails/basketball-1.jpeg',
    location: '東京都渋谷区 日本体育館',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    eventId: 2,
    name: 'ワイワイやってるよ！',
    description:
      'ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！',
    image: '/thumbnails/basketball-2.jpeg',
    location: '東京都渋谷区 日本体育館',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    eventId: 3,
    name: 'ワイワイやってるよ！',
    description:
      'ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！',
    image: '/thumbnails/basketball-3.jpeg',
    location: '東京都渋谷区 日本体育館',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    eventId: 4,
    name: 'ワイワイやってるよ！',
    description:
      'ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！',
    image: '/thumbnails/basketball-3.jpeg',
    location: '東京都渋谷区 日本体育館',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    eventId: 5,
    name: 'ワイワイやってるよ！',
    description:
      'ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！',
    image: '/thumbnails/basketball-3.jpeg',
    location: '東京都渋谷区 日本体育館',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    eventId: 6,
    name: 'ワイワイやってるよ！',
    description:
      'ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！ワイワイやってるよ！',
    image: '/thumbnails/basketball-3.jpeg',
    location: '東京都渋谷区 日本体育館',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  return (
    <>
      <main className="flex flex-wrap justify-center items-center mt-6 mb-6">
        <h2 className="text-center w-full font-bold text-3xl mb-6">
          イベント一覧
        </h2>
        {events.map((event) => (
          <Event key={event.eventId} event={event} />
        ))}
      </main>
    </>
  )
}
