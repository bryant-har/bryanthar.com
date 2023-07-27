import InputBar from '../components/InputBar'
import Script from 'next/script'
import { Construction, HardHat } from 'lucide-react'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className='space-y-6 my-36'>
        <h1 className='bg-center flex items-center justify-center space-x-3 heading'>
          <Construction />
          <span>Page Under Construction! </span>
          <HardHat />
        </h1>
        <p className='bg-center text-center link'><Link href='/about'> Click me for the about page </Link></p>
        {/* <Script src="//unpkg.com/mathlive"/>      
      <math-field/>
      <InputBar/> */}
      </div>
    </>
  )
}
