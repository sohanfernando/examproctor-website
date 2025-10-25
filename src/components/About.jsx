// src/components/About.js
import React from 'react';

const About = ({ id }) => {
  // Team Members Data - Profile images added
  const teamMembers = [
    {
      name: "Sohan Fernando",
      role: "Team Leader",
      email: "it21314360@my.sliit.lk",
      profileImage: "/profileImages/Sohan.png",
      bio: "Leading the development team and coordinating project activities for the AI-powered exam proctoring system."
    },
    {
      name: "Sehana Senanayake", 
      role: "Team Member",
      email: "it21815164@my.sliit.lk",
      profileImage: "/profileImages/Sehana.png",
      bio: "Contributing to the development and implementation of advanced features for the exam proctoring platform."
    },
    {
      name: "Gihan Pathirana",
      role: "Team Member", 
      email: "it21816468@my.sliit.lk",
      profileImage: "/profileImages/Gihan.jpeg",
      bio: "Working on core system functionality and ensuring robust performance of the proctoring solution."
    },
    {
      name: "Sanjana Perera",
      role: "Team Member",
      email: "it21334856@my.sliit.lk", 
      profileImage: "/profileImages/Sanjana.png",
      bio: "Specialized in system integration and testing to ensure reliable exam proctoring capabilities."
    }
  ];

  // Supervisors Data - Profile images can be added later
  const supervisors = [
    {
      name: "Dr. Dinuka Wijendra",
      role: "Project Supervisor",
      email: "dinuka.w@sliit.lk",
      profileImage: "/profileImages/DrDinuka.jpg", // Add supervisor image when available
      bio: "Academic supervisor providing guidance and oversight for the AI-powered exam proctoring research project."
    },
    {
      name: "Dr. Dharshana Kasthurirathna",
      role: "Co-Supervisor", 
      email: "dharshana.k@sliit.lk",
      profileImage: "/profileImages/DrDharshana.jpg", // Add co-supervisor image when available
      bio: "Co-supervisor supporting the project with technical expertise and academic guidance in AI and computer vision."
    }
  ];


  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            About <span className="gradient-text">ExamProcter</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We are a specialized platform designed for secure and reliable online exam proctoring, 
            ensuring academic integrity in remote learning environments.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white p-8">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Proctoring</h3>
                <p className="text-lg opacity-90">Advanced technology for academic integrity</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Who Are We?</h3>
              <p className="text-gray-300 leading-relaxed">
                We are a specialized web application platform designed for secure online exam proctoring. 
                Our mission is to maintain academic integrity while providing a seamless experience for 
                educational institutions and students in the digital learning era.
              </p>
            </div>

            <div className="p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize online assessment through cutting-edge AI technology, ensuring 
                fair and secure examinations for all students while providing institutions with 
                reliable tools to maintain academic standards.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-100 mb-12">Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
                    {member.profileImage ? (
                      <img 
                        src={member.profileImage} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 flex flex-col items-center justify-center text-gray-300"
                      style={{ display: member.profileImage ? 'none' : 'flex' }}
                    >
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 mb-1">{member.name}</h4>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-300 mb-3">{member.email}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supervisors Section */}
        <div className="mb-11">
          <h3 className="text-3xl font-bold text-center text-gray-100 mb-12">Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-lg overflow-hidden mb-4 relative">
                    {supervisor.profileImage ? (
                      <img 
                        src={supervisor.profileImage} 
                        alt={supervisor.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 flex flex-col items-center justify-center text-gray-300"
                      style={{ display: supervisor.profileImage ? 'none' : 'flex' }}
                    >
                      <span className="text-3xl">👨‍🏫</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 mb-1">{supervisor.name}</h4>
                  <p className="text-emerald-400 font-medium mb-2">{supervisor.role}</p>
                  <p className="text-sm text-gray-300 mb-3">{supervisor.email}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{supervisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;