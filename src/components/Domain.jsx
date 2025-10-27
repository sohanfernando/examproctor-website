// src/components/Domain.js
import React from 'react';
import {
  FaPython, 
  FaReact
} from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import { SiOpencv } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";


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
      icon: '📹',
      title: "Multimodal Monitoring",
      description: "Real-time video, audio, keystroke, and screen activity tracking",
      technologies: ["Video Monitoring", "Audio Analysis", "Keystroke Tracking", "Screen Recording"]
    },
    {
      icon: '🔍',
      title: "AI Object Detection",
      description: "Detects prohibited devices like phones, smartwatches, and notes",
      technologies: ["Object Detection", "YOLO", "Computer Vision", "Device Recognition"]
    },
    {
      icon: '🔐',
      title: "Identity Verification",
      description: "Multiple face detection and impersonation prevention",
      technologies: ["Facial Recognition", "Multi-Face Detection", "Liveness Detection", "Anti-Spoofing"]
    },
    {
      icon: '🤖',
      title: "AI Content Detection",
      description: "Advanced plagiarism and AI-generated text identification",
      technologies: ["NLP", "Plagiarism Detection", "AI Text Detection", "Content Analysis"]
    }
  ];

  const technologies = [
    { name: "Python", icon: <FaPython />, description: "AI Models", color: "#3776ab" },
    { name: "TensorFlow", icon: <SiTensorflow />, description: "Machine Learning Framework", color: "#ff6f00" },
    { name: "YOLO", icon: <YOLOIcon />, description: "Object Detection", color: "#ff6b6b" },
    { name: "OpenCV", icon: <SiOpencv />, description: "Computer Vision", color: "#5c3ee8" },
    { name: "Hugging Face", icon: <SiHuggingface />, description: "AI Models", color: "#ffcc00" },
    { name: "React", icon: <FaReact />, description: "Frontend Framework", color: "#61dafb" },
    { name: "NodeJS", icon: <FaNodeJs />, description: "Backend Framework", color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, description: "Database", color: "#47A248" },
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
          <p className="text-gray-300 leading-relaxed mb-4">
            Recent literature reveals a massive acceleration in e-learning adoption post-pandemic — but also a 3–4× surge in online exam fraud cases globally. Existing proctoring systems rely mostly on single-modality webcam monitoring or cloud video recording, which are not only privacy-invasive but also ineffective against:
          </p>
          <ul className="text-gray-300 leading-relaxed mb-6 space-y-2 list-disc list-inside">
            <li>Hidden smartphone usage outside the camera frame</li>
            <li>AI-generated / paraphrased answer pasting</li>
            <li>Ghost typing via remote human or bot assistance</li>
            <li>Whisper-based answer feeding or impersonation</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-8">
            Modern research emphasizes the need for edge-computed, privacy-preserving, multi-modal intelligence — combining video, audio, keystroke, clipboard, and behavioral biometrics in real time.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'AI-driven behavioral anomaly detection',
              'Multi-sensor identity validation (face, voice, keystroke profile)',
              'Real-time prohibited object + multi-user detection',
              'Ethical, secure, low-latency edge processing — no cloud video storage'
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
            <h3 className="text-2xl font-bold gradient-text mb-6">🎯 Core Research Problem</h3>
            <p className="text-gray-300 leading-relaxed italic text-lg">
              "How can we build a privacy-preserving, real-time AI framework that detects collaborative cheating, impersonation, AI-generated content, and prohibited device usage — accurately and instantly — without degrading the student's exam experience?"
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold gradient-text-secondary mb-6">🔍 Research Gap</h3>
            <p className="text-gray-300 leading-relaxed">
              Most existing AI-powered exam proctoring tools operate in isolated silos — focusing on either webcam, or audio, or plagiarism check alone. There is a lack of a unified, multi-modal system that can simultaneously interpret facial behavior, typing biometrics, voice patterns, screen activity, and clipboard events — all locally — with ethical data handling and near-zero latency.
            </p>
          </div>
        </div>

        {/* Research Objectives */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <h3 className="text-2xl font-bold gradient-text-secondary mb-6">🎯 Research Objectives</h3>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'Develop a real-time multimodal AI proctoring system integrating video, audio, keystroke, clipboard, and background app monitoring',
              'Detect impersonation, device-based cheating, AI-generated text usage, behavioral anomalies, and collaborative fraud',
              'Ensure privacy & ethical compliance using edge/localhost processing — no cloud surveillance',
              'Design a lightweight, scalable solution suitable for institutions, universities, and certification platforms globally'
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