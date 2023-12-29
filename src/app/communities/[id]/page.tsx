import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CommunityPage = ({ params }: { params: { id: string } }) => {
  const community = {
    communityId: 1,
    name: '東京都バスケットボール研究会',
    description: 'バスケットボールを楽しむコミュニティです',
    image: '/thumbnails/basketball-1.jpeg',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-4xl text-center mb-10 mt-10">{community.name}</h1>
      <Image src={community.image} alt="" width={1280} height={300} />
      <div className="text-lg leading-relaxed text-justify">
        <p>
          {community.description.length > 70
            ? community.description.substring(0, 70) + '...'
            : community.description}
        </p>
      </div>
      <p className="text-blue-800 hover:text-black">続きを読む</p>
      <h2 className="text-2xl mt-5">コミュニティリーダー</h2>
      <p>hoge</p>
      <h2 className="text-2xl mt-5">コミュニティメンバー</h2>
      <p>hoge</p>
    </div>
  )
}

export default CommunityPage
