'use client'

import Link from 'next/link'

import { EventType } from '../types/types'

type Props = {
  event: EventType
}

const Event = ({ event }: Props) => {
  const startAt = new Date(event.startAt)
  const startAtString = `${startAt.getFullYear()}年${
    startAt.getMonth() + 1
  }月${startAt.getDate()}日${startAt.getHours()}:00`
  const endAt = new Date(event.endAt)
  const endAtString = `${endAt.getHours()}:00`

  return (
    <>
      {/* アニメーションスタイル */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="flex flex-col items-center m-4">
        <Link
          href={`/events/${event.eventId}`}
          className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
        >
          {/* <Image
            priority
            src={event.image}
            alt={event.name}
            width={450}
            height={350}
            className="rounded-t-md"
          /> */}
          <div className="px-4 py-4 bg-slate-100 rounded-b-md">
            <h2 className="text-lg font-semibold">{`${event.location} ${startAtString}〜${endAtString}`}</h2>
            <p className="mt-2 text-lg text-slate-600">{event.name}</p>
            <p className="mt-2 text-md text-slate-700"></p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Event
