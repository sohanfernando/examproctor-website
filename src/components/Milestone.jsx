// src/components/Milestone.js
import React from 'react';

const Milestone = ({ id }) => {
  const milestones = [
    {
      date: "28th January 2025",
      event: "Proposal Presentation (PP)",
      description: "Initial project proposal presentation to the academic panel showcasing the research methodology and objectives for the AI-powered exam proctoring system.",
      status: "completed"
    },
    {
      date: "8th April 2025",
      event: "Progress Presentation 1 (PP1)",
      description: "First progress presentation demonstrating initial development milestones and preliminary results of the exam proctoring system.",
      status: "completed"
    },
    {
      date: "15th September 2025",
      event: "Progress Presentation 2 (PP2)",
      description: "Second progress presentation showcasing advanced features, testing results, and system integration progress.",
      status: "completed"
    },
    {
      date: "27th October 2025",
      event: "Final Presentation & VIVA",
      description: "Final comprehensive presentation of the completed system followed by individual viva voce examination to assess understanding and implementation.",
      status: "completed"
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'completed';
      case 'current': return 'current';
      case 'upcoming': return 'upcoming';
      default: return 'upcoming';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✓';
      case 'current': return '●';
      case 'upcoming': return '○';
      default: return '○';
    }
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Project <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tracking our journey from concept to fully functional exam proctoring system
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg ${
                milestone.status === 'completed' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                  : milestone.status === 'current'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse'
                  : 'bg-gradient-to-r from-gray-400 to-gray-500'
              }`}>
                <span>{getStatusIcon(milestone.status)}</span>
              </div>
              
              {/* Timeline Content */}
              <div className="ml-6 md:ml-8 flex-1">
                <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-100">{milestone.event}</h3>
                    <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium ${
                      milestone.status === 'completed' 
                        ? 'bg-green-900 text-green-200' 
                        : milestone.status === 'current'
                        ? 'bg-blue-900 text-blue-200'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                  
                  <div className="text-blue-600 font-medium mb-4">{milestone.date}</div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{milestone.description}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          milestone.status === 'completed' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 w-full' 
                            : milestone.status === 'current'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-3/4'
                            : 'bg-gradient-to-r from-gray-400 to-gray-500 w-1/4'
                        }`}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {milestone.status === 'completed' ? '100%' : milestone.status === 'current' ? '75%' : '25%'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;