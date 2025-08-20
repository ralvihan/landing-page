import profile from '/image.png'

const Testimonial = () => {
  const testimonials = [
    {
      name: "Raihan",
      role: "Mahasiswa",
      company: "Jakarta Global University",
      content: "Kursus ini benar-benar mengubah cara saya mengelola LinkedIn. Saya belajar membuat profil lebih profesional, memilih kata kunci yang tepat, dan menulis headline yang menarik perhatian perekrut. Setelah menerapkan semua tipsnya, koneksi saya meningkat, interaksi di profil saya jauh lebih tinggi, dan saya bahkan menerima tiga tawaran kerja dalam waktu satu bulan. Materinya jelas, terstruktur, dan sangat mudah dipahami.",
      photo: profile,
      rating: 4.5
    },
    {
      name: "Alvian", 
      role: "Mahasiswa",
      company: "Jakarta Global University",
      content: "Panduan ini sangat membantu bagi siapa saja yang serius mencari pekerjaan. Dari membuat resume yang menarik, mempersiapkan wawancara dengan strategi yang tepat, hingga membangun jaringan yang relevan, semuanya dijelaskan secara rinci dan praktis. Saya berhasil mengaplikasikan semua tipsnya dalam proses rekrutmen terakhir saya, dan hasilnya langsung terasa. Materinya sangat berguna, mudah diikuti, dan memberikan nilai tambah nyata.",
      photo: profile,
      rating: 4
    },
    {
      name: "Ralvihan",
      role: "Mahasiswa", 
      company: "Harvard University",
      content: "Setelah mengikuti kursus ini, profil LinkedIn Views saya meningkat hingga 300%, interaksi dengan koneksi meningkat, dan saya belajar membangun jaringan yang relevan dengan tujuan karier saya. Semua tips yang diberikan bisa langsung diterapkan dan memberikan hasil nyata. Saya juga mendapatkan pekerjaan impian saya yang sebelumnya terasa sulit dicapai. Kursus ini sangat direkomendasikan bagi siapa pun yang ingin menonjol di dunia profesional.",
      photo: profile,
      rating: 5
    }
  ];

  // Triple testimonials untuk smooth infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonial" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white/90 to-orange-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Testimonial
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real people who transformed their careers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden -mx-2">
          <div className="flex animate-continuous-slide space-x-6 px-2">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/2">
                <div className="bg-white w-full min-h-[18rem] md:min-h-[17rem] shadow-lg rounded-xl overflow-hidden transition-shadow duration-300 flex flex-col p-5 md:p-6">
                  
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-md ring-2 ring-orange-100"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-bold text-gray-900 leading-tight mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                        <p className="text-sm text-orange-800 font-semibold">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex-shrink-0 ml-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, starIndex) => {
                          const isFull = starIndex < Math.floor(testimonial.rating);
                          const isHalf = starIndex === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0;

                          return (
                            <div key={starIndex} className="relative w-4 h-4">
                              <svg className="w-4 h-4 text-gray-300 absolute top-0 left-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {isFull && (
                                <svg className="w-4 h-4 text-yellow-400 absolute top-0 left-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              )}
                              {isHalf && (
                                <svg className="w-4 h-4 text-yellow-400 absolute top-0 left-0" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: "inset(0 50% 0 0)" }}>
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              )}
                            </div>
                          );
                        })}
                        <span className="text-sm text-gray-600 ml-1">({testimonial.rating})</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 relative">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed italic pl-3 pr-3 overflow-hidden">
                      "{testimonial.content}"
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonial;
