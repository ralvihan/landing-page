import { useRef } from "react";

import linkedinImage from '../assets/images/linkedin.jpg';
import jobHuntingImage from '../assets/images/job-hunting.jpg';
import networkTipsImage from '../assets/images/networktips.jpg';
import resumeImage from '../assets/images/resume.jpg';
import interviewImage from '../assets/images/interview.jpg';

const Features = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "next" ? clientWidth : -clientWidth,
        behavior: "smooth",
      });
    }
  };

  const features = [
    {
      title: "Optimized LinkedIn Profile",
      description: "Tingkatkan profil LinkedIn Anda agar lebih menarik bagi perekrut dengan strategi headline dan optimasi kata kunci",
      image: linkedinImage,
    },
    {
      title: "Job Hunting Strategies",
      description: "Pelajari teknik pencarian kerja efektif, termasuk melewati ATS dan menemukan lowongan tersembunyi",
      image: jobHuntingImage,
    },
    {
      title: "Networking Tips",
      description: "Bangun koneksi profesional autentik dan ubah jaringan menjadi peluang karier nyata",
      image: networkTipsImage,
    },
    {
      title: "Resume Optimization",
      description: "Buat resume menonjol yang lolos ATS dan menarik perhatian perekrut",
      image: resumeImage,
    },
    {
      title: "Interview Preparation",
      description: "Persiapkan diri menghadapi wawancara dengan strategi dan tips menjawab pertanyaan sulit",
      image: interviewImage,
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 relative bg-gradient-to-b from-orange-100 to-white/70" id="features">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Features
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-1xl mx-auto">
            Kuasai keterampilan LinkedIn penting untuk mempercepat pertumbuhan karier Anda
          </p>
        </div>

        <div className="relative z-10 mx-4">
          <button
            onClick={() => scroll("prev")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-orange-500 shadow-md rounded-full w-10 h-10 items-center justify-center z-20 hover:bg-orange-600 transition text-white text-xl font-bold"
          >
            ‹
          </button>

          <button
            onClick={() => scroll("next")}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-orange-500 shadow-md rounded-full w-10 h-10 items-center justify-center z-20 hover:bg-orange-600 transition text-white text-xl font-bold"
          >
            ›
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 scroll-snap-x scroll-smooth px-6">
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-80 scroll-snap-start">
                <div className="bg-white w-full h-[25rem] shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col relative pb-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {feature.description}
                    </p>
                    <div className="absolute bottom-4 right-6 text-sm text-orange-500 font-semibold cursor-pointer hover:underline">
                      Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
