import Link from 'next/link'
import Image from 'next/image'
import MyLogo from '@/public/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      {/* <Image src={MyLogo}  className='max-w-[40px]' /> */}
      
    </Link>
  )
}
