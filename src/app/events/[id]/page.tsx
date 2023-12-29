import { MaterialSymbolsCalendarMonthOutlineSharpIcon } from '@/app/components/atoms/MaterialSymbolsCalendarMonthOutlineSharpIcon'
import { MaterialSymbolsCurrencyYenIcon } from '@/app/components/atoms/MaterialSymbolsCurrencyYenIcon'
import { MaterialSymbolsGroupsIcon } from '@/app/components/atoms/MaterialSymbolsGroupsIcon'
import { MaterialSymbolsLocationOnIcon } from '@/app/components/atoms/MaterialSymbolsLocationOnIcon'
import { EventType } from '@/app/types/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EventPage = ({ params }: { params: { id: string } }) => {
  const isRegistered = false

  const event: EventType = {
    eventId: 1,
    name: '東京で最高のバスケイベントです！',
    description:
      'バスケットボールに興味はあるけど、どこから始めていいかわからない方、大歓迎！\n\n私たちのコミュニティは、初心者の方々が安心してバスケットボールの基礎から学べる場所です。\n\n一緒に楽しく基本を学びながら、バスケットボールの魅力を発見しましょう。\n\n経験豊富なコーチや親切なメンバーがサポートしますので、初めての方でも安心して参加できます。\n\nバスケットボールを始めたいと考えている方、新しい趣味を探している方、私たちと一緒にプレイしませんか？',
    image: '/thumbnails/basketball-1.jpeg',
    fee: 1500,
    cancelDeadline: new Date(2023, 0, 9, 14, 0),
    location: '東京都渋谷区 日本体育館',
    communityId: 1,
    userId: 1,
    startAt: new Date(2023, 0, 10, 14, 0),
    endAt: new Date(2023, 0, 10, 17, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const community = {
    communityId: 1,
    name: '東京都バスケットボール研究会',
    description: 'バスケットボールを楽しむコミュニティです',
    image: '/thumbnails/basketball-1.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const organizer = {
    user_id: 1,
    nickname: 'たけし',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const participants = [
    {
      user_id: 1,
      nickname: 'たけし',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      nickname: 'けんた',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 3,
      nickname: 'ケンシロウ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 4,
      nickname: 'みさき',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 5,
      nickname: 'ken',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 6,
      nickname: 'basketball大好き',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 7,
      nickname: 'みさき',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 8,
      nickname: 'ken',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 9,
      nickname: 'バスケの神様',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 10,
      nickname: 'コービー',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 11,
      nickname: 'ジョーダン',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  const startAt = new Date(event.startAt)
  const startAtString = `${startAt.getFullYear()}年${
    startAt.getMonth() + 1
  }月${startAt.getDate()}日${startAt.getHours()}:00`
  const endAt = new Date(event.endAt)
  const endAtString = `${endAt.getHours()}:00`
  const cancelDeadline = new Date(event.cancelDeadline)
  const cancelDeadlineString = `${cancelDeadline.getFullYear()}年${
    cancelDeadline.getMonth() + 1
  }月${cancelDeadline.getDate()}日${cancelDeadline.getHours()}:00`

  return (
    <div className="h-dvh w-10/12 mx-auto">
      <div className="mt-4">
        <h1 className="text-3xl mb-5">{event.name}</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="col-span-2 overflow-y-scroll h-screen hidden-scrollbar">
          <div>
            {/* <Image src={event.image} alt="" width={700} height={300} /> */}
          </div>
          <div className="text-lg leading-relaxed text-justify whitespace-pre-wrap mt-4">
            <p>{event.description}</p>
          </div>
          <div className="">
            <div className="border-b-4 border-black">
              <h2 className="text-2xl mt-5">主催者</h2>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <div>
                <div className="mt-2 mb-1">
                  {/* <Image
                    width={70}
                    height={70}
                    alt="profile_icon"
                    src={'/default_user_icon.png'}
                  /> */}
                </div>
                <div className="text-center">
                  <span className="text-xs">
                    {organizer.nickname.length > 6
                      ? organizer.nickname.substring(0, 6) + '...'
                      : organizer.nickname}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-b-4 border-black">
              <h2 className="text-2xl mt-5">参加者</h2>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {participants.map((participant) => (
                <div key={participant.user_id}>
                  <div className="mt-1 mb-1">
                    {/* <Image
                      width={70}
                      height={70}
                      alt="profile_icon"
                      src={'/default_user_icon.png'}
                    /> */}
                  </div>
                  <div className="text-center">
                    <span className="text-xs">
                      {participant.nickname.length > 6
                        ? participant.nickname.substring(0, 6) + '...'
                        : participant.nickname}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <div className="border-b-4 border-black">
              <h2 className="text-2xl">時間</h2>
            </div>
            <div className="mt-2">
              <p className="text-xl">{`${startAtString}〜${endAtString}`}</p>
            </div>
          </div>
          <div className="mt-7">
            <div className="border-b-4 border-black">
              <h2 className="text-2xl">場所</h2>
            </div>
            <div className="mt-2">
              <p className="text-xl">{event.location}</p>
            </div>
          </div>
          <div className="mt-7">
            <div className="border-b-4 border-black">
              <h2 className="text-2xl mt-5">参加費</h2>
            </div>
            <div className="mt-2">
              <p className="text-xl">1500円 現地徴収</p>
            </div>
          </div>

          <div className="mt-7">
            <div className="border-b-4 border-black">
              <h2 className="text-2xl mt-5">キャンセル規定</h2>
            </div>
            <div className="mt-2">
              <p className="">{`キャンセル期限 ${cancelDeadlineString}`}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <MaterialSymbolsCalendarMonthOutlineSharpIcon
                    width="1.5em"
                    height="1.5em"
                  />
                </div>
                <div className="text-xl">{`${startAtString}〜${endAtString}`}</div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <MaterialSymbolsLocationOnIcon width="1.5em" height="1.5em" />
                </div>
                <div className="text-xl">{event.location}</div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <MaterialSymbolsCurrencyYenIcon
                    width="1.5em"
                    height="1.5em"
                  />
                </div>
                <div className="text-xl">1500円 (現地徴収)</div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <MaterialSymbolsGroupsIcon width="1.5em" height="1.5em" />
                </div>
                <div className="text-xl">定員：20人</div>
              </div>
              <div className="text-sm text-gray-500 mb-2">
                申し込み期限: 1月10日14:00
              </div>
              <div>
                {isRegistered ? (
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-2 w-full">
                    申込済み
                  </button>
                ) : (
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-2 w-full">
                    今すぐ参加申込
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage
