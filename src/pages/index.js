import Head from 'next/head'
import Fromsection from '../../components/home/Fromsection'
import Hero from '../../components/home/Hero'
import Newsletter from '../../components/home/Newsletter'
import Ourgallery from '../../components/home/Ourgallery'
import Testimonials from '../../components/home/testimonials'
import Events from "../../components/home/Events"
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <>
      <Head>
        <title>UpskillEdu Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <>
          <Hero />
          <Fromsection />
          <Ourgallery />
          <Newsletter />
          <Testimonials />
          {/* <Events /> */}
        </>
      </main>
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });