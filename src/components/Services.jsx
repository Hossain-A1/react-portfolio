import web from '../assets/portfolio_images/images/web-icon.png'
import re_web from '../assets/portfolio_images/images/dev-icon.png'
import code from '../assets/portfolio_images/images/code-icon.png'
import team from '../assets/portfolio_images/images/project-icon-dark.png'
import team_1 from '../assets/portfolio_images/images/project-icon.png'

const Services = ({isDarkMode}) => {
  return (
    <div id='services' className='containers py-20'>

      <div className='flex flex-col gap-1 items-center justify-center'>
      <h2 className="text-xl font-medium italic ">What i offer</h2>
        <h1 className="text-4xl font-bold mb-5">My Services</h1>
        <p className="font-light text-center text-lg mb-10 max-w-2xl">
          I’m an experienced Full-Stack Developer with over 5 years of expertise in building scalable solutions. 
          Throughout my career, I’ve contributed to impactful projects and worked with diverse teams.
        </p>

        <div className='flex-wrap gap-4 md:flex justify-center items-center '>
          <div className='p-4 w-72 h-[13.5rem] rounded-lg shadow-md hover:scale-105 duration-300 space-y-2 border border-white'>
            <img className='w-10' src={web} alt="web" />
            <h3 className='font-medium'>Web design</h3>
            <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita...</p>

            <p className='text-slate-500'>Read more →</p>
          </div>
          <div className='p-4 w-72 h-[13.5rem] rounded-lg shadow-md hover:scale-105 duration-300 space-y-2  border border-white'>
          <img className='w-10' src={re_web} alt="web" />
            <h3 className='font-medium'>Web re-design</h3>
            <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita...</p>

            <p className='text-slate-500'>Read more →</p>
          </div>
          <div className='p-4 w-72 h-[13.5rem] rounded-lg shadow-md hover:scale-105 duration-300 space-y-2  border border-white'>
          <img className='w-10' src={code} alt="web" />
            <h3 className='font-medium'>Web development</h3>
            <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita...</p>

            <p className='text-slate-500'>Read more →</p>
          </div>
          <div className='p-4 w-72 h-[13.5rem] rounded-lg shadow-md hover:scale-105 duration-300 space-y-2  border border-white'>
          <img className='w-10' src={ isDarkMode? team:team_1} alt="web" />
            <h3 className='font-medium'>Team work</h3>
            <p className='text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita...</p>

            <p className='text-slate-500'>Read more →</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services