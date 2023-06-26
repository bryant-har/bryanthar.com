import InputBar from '../components/InputBar'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="//unpkg.com/mathlive"/>      
      <math-field/>
      <InputBar/>
    </>
  )
}
