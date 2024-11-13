import img from '..//assets/portfolio_images/images/protfolio-img.jpg';
import vscode from '..//assets/portfolio_images/images/vscode.png';
import figma from '..//assets/portfolio_images/images/figma.png';
import firebase from '..//assets/portfolio_images/images/firebase.png';
import git from '..//assets/portfolio_images/images/git.png';
import db from '..//assets/portfolio_images/images/mongodb.png';

const About = ({isDarkMode}) => {
  return (
    <div id='about' className={`containers py-20 ${isDarkMode ?"text-white":"text-black"} `}>
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-medium italic ">Introduction</h2>
        <h1 className="text-4xl font-bold ">About Me</h1>
     
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8">
     <div className='overflow-hidden'>
      <img className='object-cover ' height={740} width={350} src={img} alt="" />

     </div>

     <div className='flex-1' >
     <div className='flex flex-col max-lg:items-center gap-4' >
     <p className="font-light text-lg max-lg:text-center mb-10">
          I’m an experienced Full-Stack Developer with over 5 years of expertise in building scalable solutions. 
          Throughout my career, I’ve contributed to impactful projects and worked with diverse teams.
        </p>

    
        <div className='sm:flex max-lg:flex-wrap max-lg:justify-center max-lg:items-center gap-4'>
            {/* Languages */}
            <div className="border w-60 h-[11.5rem] rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:scale-105 duration-300 transition-all">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-lg font-semibold">Languages</h3>
            <p className={`mt-2  ${isDarkMode?"text-white":"text-gray-600"}`}>HTML, CSS, JavaScript, React, Node.js</p>
          </div>

          {/* Education */}
          <div className="border w-60 h-[11.5rem] rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:scale-105 duration-300 transition-all">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold">Education</h3>
            <p className={`mt-2  ${isDarkMode?"text-white":"text-gray-600"}`}>B.Sc in Computer Science</p>
          </div>

          {/* Projects */}
          <div className="border w-60 h-[11.5rem] rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:scale-105 duration-300 transition-all">
            <div className="text-3xl mb-3">📂</div>
            <h3 className="text-lg font-semibold">Projects</h3>
            <p className={`mt-2  ${isDarkMode?"text-white":"text-gray-600"}`}>Built more than 15 major projects</p>
          </div>
        </div>

              {/* Tools Section */}
      <div className="mt-10  ">
        <h3 className={`text-2xl font-semibold ${isDarkMode?"text-slate-50":"text-gray-500"} mt-5`}>Tools I Use</h3>
        <div className="flex mt-4 gap-4">
          <img className=' max-sm:w-12 w-16 shadow-md hover:scale-105 duration-300 border rounded-md p-2' src={vscode} alt="" />
          <img className='max-sm:w-12 w-16 shadow-md hover:scale-105 duration-300 border rounded-md p-2' src={firebase} alt="" />
          <img className='max-sm:w-12 w-16 shadow-md hover:scale-105 duration-300 border rounded-md p-2' src={db} alt="" />
          <img className=' max-sm:w-12 w-16 shadow-md hover:scale-105 duration-300 border rounded-md p-2' src={figma} alt="" />
          <img className='max-sm:w-12 w-16 shadow-md hover:scale-105 duration-300 border rounded-md p-2' src={git} alt="" />
        
        </div>
      </div>
     </div>
     </div>
        </div>
     

  
    </div>
  );
};

export default About;
