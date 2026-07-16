import Image from 'next/image'
import IkramSection from '@/components/Introduction'
import  AboutSection from '@/components/About'
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
    <IkramSection />
    <AboutSection />
    
  </main>
  )
}
