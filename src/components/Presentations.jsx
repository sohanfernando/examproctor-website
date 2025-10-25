// src/components/Presentations.js
import React, { useState } from 'react';

const Presentations = ({ id }) => {
  const [downloading, setDownloading] = useState(false);
  
  const presentations = [
    {
      title: "Proposal Presentation",
      description: "Initial project proposal presentation showcasing the research methodology and objectives for the AI-powered exam proctoring system.",
      status: "Completed",
      icon: "📋",
      // TODO: Add Google Drive link here
      downloadUrl: "https://docs.google.com/presentation/d/1L2uiUwbqMu0B0KAQiomllUhsR_zPU3e9/edit?usp=drive_link&ouid=106857955575542278132&rtpof=true&sd=true", // Replace with actual Google Drive link
    },
    {
      title: "Progress Presentation-1",
      description: "First progress presentation demonstrating initial development milestones and preliminary results of the exam proctoring system.",
      status: "Completed",
      icon: "📊",
      // TODO: Add Google Drive link here
      downloadUrl: "https://docs.google.com/presentation/d/1PGOdteFmMwe1KDOvqOSpDoUQTAfhfjgM/edit?usp=drive_link&ouid=106857955575542278132&rtpof=true&sd=true", // Replace with actual Google Drive link
    },
    {
      title: "Progress Presentation-2",
      description: "Second progress presentation showcasing advanced features, testing results, and system integration progress.",
      status: "Completed",
      icon: "📈",
      // TODO: Add Google Drive link here
      downloadUrl: "https://docs.google.com/presentation/d/1kFFzRvzifUIjk_5QgNJN-bJtnGkHUSEq/edit?usp=drive_link&ouid=106857955575542278132&rtpof=true&sd=true", // Replace with actual Google Drive link
    },
    {
      title: "Final Presentation",
      description: "Final comprehensive presentation of the completed system demonstrating all features and implementation results.",
      status: "Completed",
      icon: "🎯",
      // TODO: Add Google Drive link here
      downloadUrl: "", // Replace with actual Google Drive link
    }
  ];

  const handleDownload = async (presentation) => {
    if (downloading) return;
    
    setDownloading(true);
    try {
      // Open Google Drive link in new tab
      if (presentation.downloadUrl && presentation.downloadUrl !== "#") {
        window.open(presentation.downloadUrl, '_blank');
      } else {
        console.log('Download URL not provided for:', presentation.title);
        alert('Download link not available for this presentation.');
      }
    } catch (error) {
      console.error('Error opening download link:', error);
      alert('Unable to open download link. Please try again.');
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Project <span className="gradient-text">Presentations</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Key milestones and presentations throughout our project development journey
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentations.map((presentation, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{presentation.icon}</div>
                  <span className="px-3 py-1 bg-green-900 text-green-200 text-sm font-medium rounded-full">
                    {presentation.status}
                  </span>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h3 className="text-lg font-bold text-gray-100 mb-3">{presentation.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{presentation.description}</p>
                </div>

                <button 
                  className={`w-full btn-gradient px-6 py-4 font-semibold text-white hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden ${downloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  onClick={() => handleDownload(presentation)}
                  disabled={downloading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  {downloading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  <span className="relative z-10">{downloading ? 'Opening...' : 'Download'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;