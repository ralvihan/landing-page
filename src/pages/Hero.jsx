const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4 relative"
      style={{
        backgroundImage: 'url(/bghero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-orange-100"></div>
      
      <div className="max-w-4xl mx-auto space-y-3 md:space-y-4 lg:space-y-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Unlock Your Career Potential with LinkedIn
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Personal Branding & Networking untuk Dapat Kerja Lebih Cepat
        </p>
        <div className="pt-10 md:pt-10">
          <a
            href="#features"
            className="inline-block bg-orange-500 text-white px-5 py-2.5 md:px-6 md:py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 font-semibold text-sm md:text-base"
          >
            Join the Class
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;