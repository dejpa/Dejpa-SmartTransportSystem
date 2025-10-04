'use client';

import { useState, useEffect } from 'react';

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count.toLocaleString('fa-IR')}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ backgroundImage: 'url(/Cargo.jpeg)' }}
      ></div>
      
      {/* Premium Gradient Overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ 
          background: 'linear-gradient(135deg, rgba(22, 30, 64, 0.92) 0%, rgba(22, 30, 64, 0.85) 50%, rgba(223, 35, 39, 0.80) 100%)' 
        }}
      ></div>
      
      {/* Subtle Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        {/* Logo/Brand Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16 animate-fadeIn">
          <img src="/logo-dejpa.png" alt="dejpa-logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 block mx-auto mb-4 sm:mb-6" />
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#DF2327' }}></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight px-4">
            <span className="block drop-shadow-2xl">سامانه حمل و نقل</span>
            <span className="block mt-1 sm:mt-2 drop-shadow-2xl" style={{ color: '#DF2327' }}>هوشمند دژپا</span>
          </h1>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full mt-4 sm:mt-6" style={{ backgroundColor: '#DF2327' }}></div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/95 mb-8 sm:mb-12 lg:mb-16 font-light leading-relaxed drop-shadow-lg max-w-4xl mx-auto px-4">
          قابل اعتماد در حمل و نقل باری
        </p>

        {/* Call to Action Button */}
        <div className="space-y-4 sm:space-y-6 px-4">
          <a 
            href="https://example.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold text-white rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 border-2 border-white/20 w-full sm:w-auto"
            style={{ backgroundColor: '#DF2327' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c41f23';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(223, 35, 39, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#DF2327';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>ورود به سامانه</span>
          </a>
          
          {/* Subtle Helper Text */}
          <p className="text-white/70 text-xs sm:text-sm tracking-wide">
            برای دسترسی به سامانه کلیک کنید
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12 border-t border-white/10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* 24/7 Support */}
            <div className="group text-center relative">
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Container */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 hover:scale-105">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/30 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
                    24/7
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base lg:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    پشتیبانی
                  </div>
                  
                  {/* Subtle bottom glow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400/50 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* 100% Reliable */}
            <div className="group text-center relative">
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Container */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 hover:scale-105">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{color: '#DF2327'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      {/* Checkmark animation */}
                      <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-ping" style={{backgroundColor: 'rgba(223, 35, 39, 0.3)'}}></div>
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-500 transition-all duration-300">
                    100%
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base lg:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    قابل اعتماد
                  </div>
                  
                  {/* Subtle bottom glow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-red-400/50 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* 1000+ Satisfied Customers */}
            <div className="group text-center relative">
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Container */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 hover:scale-105 sm:col-span-2 lg:col-span-1">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      {/* Heartbeat Animation */}
                      <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-400/30 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Number with counting animation */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 bg-gradient-to-br from-white to-green-200 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-white transition-all duration-300">
                    <CountUp end={1000} duration={2000} /><span className="text-white group-hover:text-green-300">+</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base lg:text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    مشتری راضی
                  </div>
                  
                  {/* Subtle bottom glow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-400/50 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-t-2 border-l-2 border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-b-2 border-r-2 border-white/10 pointer-events-none"></div>
    </div>
  );
}
