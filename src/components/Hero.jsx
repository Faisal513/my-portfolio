import React from 'react';
import profileImage from '../assets/faisal.jpeg';
import profileImage2 from '../assets/Faisal-removebg.png';
import { HiDownload, HiMail } from 'react-icons/hi';
import resumePDF from '../assets/Faisal Iqbal - Frontend UI_UX Engineer-1.pdf';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Faisal_Iqbal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-7 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left side - Image (5 columns on large screens) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="relative">
                <img
                  src={profileImage2}
                  alt="Faisal Iqbal - Frontend UI/UX Engineer"
                  className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl dark:shadow-gray-900/50 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  }}
                />
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-purple-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-6 w-3 h-3 bg-indigo-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
          
          {/* Right side - Text content (7 columns on large screens) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="animate-fade-in-up space-y-3">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium mb-3">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              {/* Split greeting into two lines */}
              <div className="space-y-1">
                <h1 className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                  Hi,
                </h1>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Faisal Iqbal
                  </span>
                </h1>
              </div>
              
              <h2 className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Frontend UI/UX Engineer
              </h2>
              
              <p className="text-base md:text-md text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-none leading-relaxed">
                Detail-oriented Frontend UI/UX Engineer with 4 years of experience building responsive, accessible, and user-focused web applications. Skilled in React.js, Next.js, and design systems like Material-UI, Ant Design, and Tailwind CSS.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-3">
                <button 
                  onClick={handleDownloadResume}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    Download Resume
                    <HiDownload className="ml-2 text-xl" />
                  </span>
                </button>
                <button className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center justify-center">
                    Contact Me
                    <HiMail className="ml-2 text-xl"/>
                  </span>
                </button>
              </div>
              
              {/* Contact Info with icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <div className="text-center lg:text-left">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Location</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Lahore, Pakistan
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Email</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    fyxal.iqbal@gmail.com
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Phone</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +92 305 8427980
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 