'use client';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ backgroundImage: 'url(/Oil-Tanker-Truck.jpg)' }}
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
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        {/* Logo/Brand Section */}
        <div className="mb-12 animate-fadeIn">
          <div className="inline-block mb-6">
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#DF2327' }}></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
            <span className="block drop-shadow-2xl">سامانه حمل و نقل</span>
            <span className="block mt-2 drop-shadow-2xl" style={{ color: '#DF2327' }}>هوشمند دژپا</span>
          </h1>
          
          <div className="w-24 h-1 mx-auto rounded-full mt-6" style={{ backgroundColor: '#DF2327' }}></div>
        </div>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 mb-16 font-light leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
          قابل اعتماد در حمل و نقل باری
        </p>

        {/* Call to Action Button */}
        <div className="space-y-6">
          <a 
            href="https://example.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-4 px-16 py-6 text-2xl font-bold text-white rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 border-2 border-white/20"
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
              className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>ورود به سامانه</span>
          </a>
          
          {/* Subtle Helper Text */}
          <p className="text-white/70 text-sm tracking-wide">
            برای دسترسی به سامانه کلیک کنید
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-white/70">پشتیبانی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#DF2327' }}>100%</div>
              <div className="text-sm text-white/70">قابل اعتماد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+۱۰۰۰</div>
              <div className="text-sm text-white/70">مشتری راضی</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10 pointer-events-none"></div>
    </div>
  );
}
