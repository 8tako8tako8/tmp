import Image from 'next/image'

import { ProfileType } from '../../types/types'

const user: ProfileType = {
  userId: 1,
  name: 'takeshi',
  nickname: 'たけし',
  birthyear: 1990,
  livingArea: '東京都',
  skillLevel: '中級',
  experiencePeriod: '5年〜10年',
  introduction:
    'こんにちは、たけしと申します。\n\n小さい頃からバスケットボールが大好きで、長年プレイしています。\n\n自分の実力は中級程度だと思います。\n\nこのコミュニティに参加することで、スキルを磨き、同じ趣味を持つ人たちと交流したいです。\n\n得意なポジションはセンターで、特にダンクが得意です（笑）\n\nよろしくお願いします！',
  image: '/thumbnails/basketball-1.jpeg',
}

const entryCommunities = [
  {
    communityId: 1,
    name: '川崎ブレイブサンダース',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    communityId: 2,
    name: '東京都バスケットボール研究会',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const ProfilePage = () => {
  return (
    <div className="container mx-auto flex flex-col w-1/2">
      <div className="mb-6 flex flex-col items-center justify-center">
        <div>
          <Image
            src={'/default_user_icon.png'}
            alt="プロフィール画像"
            width={150}
            height={150}
            className="rounded-full mb-2"
          />
        </div>
        <div className="text-2xl font-bold text-center">{user.nickname}</div>
      </div>
      <div className="grid grid-cols-4 divide-x-2 mb-4 pb-8 border-b-2">
        <div className="col-auto text-center px-8">
          <div className="text-base">{user.birthyear}年</div>
          <div className="text-sm text-gray-500">誕生年</div>
        </div>
        <div className="col-auto text-center px-8">
          <div className="text-base">男性</div>
          <div className="text-sm text-gray-500">性別</div>
        </div>
        <div className="col-auto text-center px-8">
          <div className="text-base">{user.skillLevel}</div>
          <div className="text-sm text-gray-500">レベル</div>
        </div>
        <div className="col-auto text-center px-8">
          <div className="text-base">{user.experiencePeriod}</div>
          <div className="text-sm text-gray-500">バスケ歴</div>
        </div>
      </div>
      <div className="whitespace-pre-wrap mt-2 pt-4 mb-4 pb-4">
        <p className="text-sm font-light">{user.introduction}</p>
      </div>
      <div className="">
        <div className="border-b-4 border-black">
          <h2 className="text-2xl">所属コミュニティ</h2>
        </div>
        <div className="flex flex-wrap gap-4 mt-2">
          {entryCommunities.map((community) => (
            <div
              key={community.communityId}
              className="flex flex-col items-center w-28"
            >
              <div className="mt-2 mb-1">
                <Image
                  width={100}
                  height={100}
                  alt="profile_icon"
                  src={'/default_user_icon.png'}
                />
              </div>
              <div className="text-center text-xs">{community.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
