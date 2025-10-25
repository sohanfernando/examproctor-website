// src/components/Domain.js
import React from 'react';
import {
  FaPython, 
  FaReact
} from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { SiOpencv } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";


const YOLOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF6B6B"/>
    <circle cx="12" cy="12" r="3" fill="#4ECDC4"/>
    <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1" stroke="#45B7D1" strokeWidth="2" fill="none"/>
  </svg>
);

const DotNetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z" fill="#512BD4"/>
    <path d="M8 8H16V10H8V8Z" fill="#512BD4"/>
    <path d="M8 12H16V14H8V12Z" fill="#512BD4"/>
    <path d="M8 16H14V18H8V16Z" fill="#512BD4"/>
  </svg>
);

const Domain = ({ id }) => {
  const researchAreas = [
    {
      icon: '🧠',
      title: "AI Proctoring",
      description: "Advanced artificial intelligence for real-time exam monitoring and suspicious behavior detection using computer vision and machine learning.",
      technologies: ["Computer Vision", "Machine Learning", "Behavior Analysis", "Real-time Processing"]
    },
    {
      icon: '🔐',
      title: "Identity Verification",
      description: "Facial recognition and ID verification systems to ensure candidate authenticity and prevent impersonation.",
      technologies: ["Facial Recognition", "OCR Technology", "Biometric Verification", "Liveness Detection"]
    },
    {
      icon: '🛡️',
      title: "Security Monitoring",
      description: "Comprehensive device and network security monitoring during examinations to prevent cheating attempts.",
      technologies: ["Network Security", "Device Monitoring", "Screen Recording", "Browser Lockdown"]
    },
    {
      icon: '📊',
      title: "Analytics & Reporting",
      description: "Detailed analytics and reporting systems for exam integrity assessment and performance insights.",
      technologies: ["Data Analytics", "Real-time Reporting", "Performance Metrics", "Risk Assessment"]
    }
  ];

  const technologies = [
    { name: "Python", icon: <FaPython />, description: "Backend + AI Models", color: "#3776ab" },
    { name: "TensorFlow", icon: <SiTensorflow />, description: "Machine Learning Framework", color: "#ff6f00" },
    { name: "YOLO", icon: <YOLOIcon />, description: "Object Detection", color: "#ff6b6b" },
    { name: "OpenCV", icon: <SiOpencv />, description: "Computer Vision", color: "#5c3ee8" },
    { name: "React", icon: <FaReact />, description: "Frontend Framework", color: "#61dafb" },
    { name: "NodeJS", icon: <FaNodeJs />, description: "Backend Framework", color: "#339933" },
    { name: ".NET", icon: <DotNetIcon />, description: "Backend Framework", color: "#512BD4" }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Research <span className="gradient-text">Domain</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced research in AI-powered exam proctoring and academic integrity preservation
          </p>
        </div>

        {/* Literature Insights */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <h3 className="text-2xl font-bold gradient-text mb-6">Literature Insights</h3>
          <p className="text-gray-300 leading-relaxed mb-8">
            Recent studies show a rapid shift toward online learning, but existing remote exam systems heavily rely on manual or one-dimensional proctoring — primarily webcam monitoring. These conventional methods fail to detect subtle cheating behaviors like whispering, use of hidden devices, impersonation, or AI-assisted fraud.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'Real-time behavior analysis and anomaly detection',
              'Multi-factor identity verification system',
              'Comprehensive security monitoring framework',
              'Advanced analytics and reporting dashboard'
            ].map((objective, index) => (
              <div key={index} className="flex items-start space-x-2 md:space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold mt-0.5 flex-shrink-0">✓</div>
                <span className="text-white text-sm md:text-base">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Problem & Gap Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-6">The Core Problem</h3>
            <p className="text-gray-300 leading-relaxed italic text-lg">
              "How can we ensure academic honesty in online examinations by accurately detecting fraudulent behaviors in real time — without invading student privacy or disrupting the exam experience?"
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold gradient-text-secondary mb-6">Identified Research Gap</h3>
            <p className="text-gray-300 leading-relaxed">
              Most current systems detect only one type of malpractice (e.g., face only or audio only). There is a lack of intelligent, multi-layered, real-time fraud detection that analyzes the person, environment, behavior, and intent — all together with AI.
            </p>
          </div>
        </div>

        {/* Research Objectives */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <h3 className="text-2xl font-bold gradient-text-secondary mb-6">Research Objectives</h3>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'To build an AI-powered multi-modal proctoring system',
              'To detect face spoofing, unauthorized devices, voice cues, and behavioral anomalies',
              'To ensure secure, ethical, and non-intrusive online exams',
              'To design a solution that is scalable and education-friendly'
            ].map((objective, index) => (
              <div key={index} className="flex items-start space-x-2 md:space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold mt-0.5 flex-shrink-0">✓</div>
                <span className="text-gray-300 text-sm md:text-base">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proposed Methodology */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <h3 className="text-2xl font-bold gradient-text-secondary mb-6">Proposed Methodology</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system continuously monitors the test environment using Computer Vision + Behavior Analysis + Audio Intelligence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Each input is processed through AI risk-based scoring to flag suspicious events in real-time — ensuring fairness and zero human bias.
          </p>
        </div>

        {/* Technologies Used */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <h3 className="text-2xl font-bold gradient-text-warning mb-6">Technologies Used</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-700 border border-gray-600 rounded-xl hover:bg-gray-600 transition-colors duration-200">
                <div className="text-2xl" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-100">{tech.name}</h4>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-100 mb-12">Research Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-3xl">{area.icon}</div>
                  <h4 className="text-xl font-bold text-gray-100">{area.title}</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;