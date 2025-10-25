import React from 'react';
import { 
  FaEye, 
  FaBullseye, 
  FaSearch, 
  FaRobot 
} from 'react-icons/fa';

const Hero = ({ id }) => {

  const features = [
    {
      icon: <FaEye />,
      title: 'Multimodal Monitoring',
      description: 'Real-time video, audio, keystroke, and screen activity tracking'
    },
    {
      icon: <FaBullseye />,
      title: 'AI Object Detection',
      description: 'Detects prohibited devices like phones, smartwatches, and notes'
    },
    {
      icon: <FaSearch />,
      title: 'Identity Verification',
      description: 'Multiple face detection and impersonation prevention'
    },
    {
      icon: <FaRobot />,
      title: 'AI Content Detection',
      description: 'Advanced plagiarism and AI-generated text identification'
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mt-11 mb-16">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Revolutionizing{' '}
            <span className="gradient-text">Exam Integrity</span>
            <br />
            with AI Precision
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI-powered proctoring solutions that ensure academic integrity 
            with real-time monitoring and comprehensive security measures.
          </p>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 bg-gray-800 border border-gray-700 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-semibold text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;