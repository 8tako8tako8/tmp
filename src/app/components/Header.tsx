import Link from 'next/link'
import React from 'react'

const Header = () => {
  const isLogin = true

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* <Image
            src={'/comeback_basketball_icon.png'}
            alt=""
            width={50}
            height={50}
          /> */}
          <Link
            href={'/'}
            className="text-3xl font-bold font-sans tracking-tighter text-orange-400"
          >
            カムバス
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href={isLogin ? '/users/1' : '/login'}
            className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
          >
            {isLogin ? 'プロフィール' : 'ログイン'}
          </Link>

          <Link href={`/users/1`}>
            {/* <Image
              width={50}
              height={50}
              alt="profile_icon"
              src={'/default_user_icon.png'}
            /> */}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
