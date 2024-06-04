import { FaArrowRight, FaArrowRightArrowLeft } from 'react-icons/fa6'
import bannerImg from '../../assets/banner.png'
import bannerShape from '../../assets/bannerShap.png'
const Banner = () => {
  return (
    <div className=' flex md:flex-row flex-col-reverse justify-between items-center container mx-auto gap-5 lg:gap-10 px-4 pt-10 z-10 mt-24'>
      <div className='space-y-5'>
      <h2 className='text-4xl md:text-5xl lg:6xl font-extrabold text-blue-900'>One More Friend</h2>
      <h2 className='text-blue-950 font-bold text-3xl md:text-4xl lg:5xl'>Thousend More Fun</h2>
      <p className='text-black font-semibold '>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
      <button className='btn bg-blue-950 text-white px-5 py-3 text-xl flex items-center gap-3 rounded-full'>Adopt Now <FaArrowRight></FaArrowRight> </button>
      </div>
      
      <div className='relative '>
            <img className=' -bottom-10'  src={bannerShape} alt="" />
            <img className='absolute bottom-0 ' src={bannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner