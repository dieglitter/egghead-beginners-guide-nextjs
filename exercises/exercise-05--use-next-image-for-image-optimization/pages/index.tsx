// ✍️ import the Image component from 'next/image'
import Image from "next/image"

// ✍️ import "lazar.png" statically
import lazar from '../lazar.png'

const TWITTER_IMAGE_URL = 'https://pbs.twimg.com/profile_images/1523480124133359617/UsDrb64J_400x400.jpg'

const Home = () => {
  return (
    <>
        <Image src={lazar} alt='Lazar Nikolov' />
        <Image src={TWITTER_IMAGE_URL} alt='Remote picture of Lazar' width={550} height={550} />
    </>
  )
}

export default Home
