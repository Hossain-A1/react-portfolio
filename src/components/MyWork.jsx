import work_1 from "../assets/portfolio_images/images/work-1.png";
import work_2 from "../assets/portfolio_images/images/work-2.png";
import work_3 from "../assets/portfolio_images/images/work-3.png";
import work_4 from "../assets/portfolio_images/images/work-4.png";
import send from "../assets/portfolio_images/images/send-icon.png";

const MyWork = () => {
  return (
    <div id="work" className='containers py-20'>
      <div className='flex flex-col gap-1 items-center justify-center'>
        <h2 className='text-xl font-medium italic '>Project</h2>
        <h1 className='text-4xl font-bold mb-5'>My recent work</h1>
        <p className='font-light text-center text-lg mb-10 max-w-2xl'>
          I’m an experienced Full-Stack Developer with over 5 years of expertise
          in building scalable solutions. Throughout my career, I’ve contributed
          to impactful projects and worked with diverse teams.
        </p>

        <div className='flex-wrap gap-4 md:flex justify-center items-center w-full '>
          <div className='p-4 w-full h-full sm:h-80 sm:w-80 shadow-md rounded-lg  space-y-2 border border-white relative group'>
            <img className='w-full h-full ' src={work_1} alt='work one' />
            <div className='absolute left-10 right-10 bottom-10 px-4 py-2 bg-white rounded-md group-hover:scale-105 transition-all duration-300 '>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='font-semibold text-lg text-black'>
                    Full-Stack E-com
                  </h2>
                  <p className='text-slate-600'>Web Development</p>
                </div>
                <div>
                  <a
                    href='https://forever-ecommerce-ui.vercel.app/'
                    target='_blank'
                    className=' flex items-center justify-center'
                  >
                    <img
                      className=' w-8 p-1.5 text-center  shadow-md shadow-black rounded-full  hover:bg-green-300 border'
                      src={send}
                      alt='send icon'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 w-full h-full sm:h-80 sm:w-80 rounded-lg shadow-md  space-y-2  border border-white relative group'>
            <img className='w-full h-full' src={work_2} alt='work tow' />

            <div className='absolute left-10 right-10 bottom-10 px-4 py-2 bg-white rounded-md group-hover:scale-105 transition-all duration-300'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='font-semibold text-lg text-black'>
                    Doc-Book-Apoint..
                  </h2>
                  <p className='text-slate-600'>Web design</p>
                </div>
                <div>
                  <a
                    href='https://doctors-booking-appiontment.vercel.app/'
                    target='_blank'
                    className=' flex items-center justify-center'
                  >
                    <img
                      className=' w-8 p-1.5 text-center  shadow-md shadow-black rounded-full  hover:bg-green-300 border'
                      src={send}
                      alt='send icon'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 w-full h-full sm:h-80 sm:w-80 rounded-lg shadow-md  space-y-2  border border-white relative group'>
            <img className='w-full h-full' src={work_3} alt='work three' />

            <div className='absolute left-10 right-10 bottom-10 px-4 py-2 bg-white rounded-md group-hover:scale-105 transition-all duration-300'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='font-semibold text-lg text-black'>
                    BG-Removal
                  </h2>
                  <p className='text-slate-600'>Web development</p>
                </div>
                <div>
                  <a
                    href='https://bg-removal-client-navy.vercel.app/'
                    target='_blank'
                    className=' flex items-center justify-center'
                  >
                    <img
                      className=' w-8 p-1.5 text-center  shadow-md shadow-black rounded-full  hover:bg-green-300 border'
                      src={send}
                      alt='send icon'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 w-full h-full sm:h-80 sm:w-80 rounded-lg shadow-md  space-y-2  border border-white relative group'>
            <img className='w-full h-full' src={work_4} alt='work four' />

            <div className='absolute left-10 right-10 bottom-10 px-4 py-2 bg-white rounded-md group-hover:scale-105 transition-all duration-300'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='font-semibold text-lg text-black'>
                    Food-Delivery
                  </h2>
                  <p className='text-slate-600'>Mern-Stack App</p>
                </div>
                <div>
                  <a
                    href='https://food-del-ui.vercel.app/'
                    target='_blank'
                    className=' flex items-center justify-center'
                  >
                    <img
                      className=' w-8 p-1.5 text-center  shadow-md shadow-black rounded-full  hover:bg-green-300 border'
                      src={send}
                      alt='send icon'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
