// src/components/Documents.js
import React, { useState } from 'react';

const Documents = ({ id }) => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const documents = [
    {
      title: "Project Charter",
      description: "Project charter outlining research goals, objectives, scope, and resource requirements for the AI-powered exam proctoring system.",
      icon: "📋",
      status: "Completed",
      // TODO: Add Google Drive link here
      downloadUrl: "https://drive.google.com/file/d/14vu_BN8mIL4JJ1HuR-LaewRszUF7MJ9g/view?usp=drive_link", // Replace with actual Google Drive link
    },
    {
      title: "Proposal Document",
      description: "Comprehensive proposal document defining project methodology, research approach, and implementation strategy for the exam proctoring solution.",
      icon: "📄",
      status: "Completed",
      // TODO: Add Google Drive link here
      downloadUrl: "https://drive.google.com/drive/folders/1unYu0lYb1g4DY9d9bhN1UPOj82k0v3ah?usp=drive_link", // Replace with actual Google Drive link
    },
    {
      title: "Check List Documents",
      description: "Detailed checklist documents covering project milestones, deliverables, and quality assurance procedures for the proctoring system.",
      icon: "✅",
      status: "Completed",
      // TODO: Add Google Drive link here
      downloadUrl: "https://drive.google.com/drive/folders/134VGAGIO-Axcqcyhd7P3x8txgMhGTIx6?usp=drive_link", // Replace with actual Google Drive link
    },
    {
      title: "Final Document",
      description: "Final comprehensive document summarizing the complete research project, findings, implementation results, and future recommendations.",
      icon: "📑",
      status: "Completed",
      // TODO: Add Google Drive link here
      downloadUrl: "https://drive.google.com/drive/folders/1r6gjHZ4dinkrrdNdl7uFcl4sdQPMLdFb?usp=drive_link", // Replace with actual Google Drive link
    }
  ];

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDoc(null);
  };

  const handleDownload = async (doc) => {
    if (downloading) return;
    
    setDownloading(true);
    try {
      // Open Google Drive link in new tab
      if (doc.downloadUrl && doc.downloadUrl !== "#") {
        window.open(doc.downloadUrl, '_blank');
      } else {
        console.log('Download URL not provided for:', doc.title);
        alert('Download link not available for this document.');
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
            Project <span className="gradient-text">Documents</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive documentation covering all aspects of our research project
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col h-full"
              onClick={() => handleDocClick(doc)}
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{doc.icon}</div>
                  <span className="px-3 py-1 bg-green-900 text-green-200 text-sm font-medium rounded-full">
                    {doc.status}
                  </span>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h3 className="text-lg font-bold text-gray-100 mb-3">{doc.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{doc.description}</p>
                </div>

                <button 
                  className={`w-full btn-gradient px-6 py-4 font-semibold text-white hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden ${downloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(doc);
                  }}
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

        {/* Document Modal */}
        {openModal && selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={handleCloseModal}>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-100">{selectedDoc.title}</h3>
                <button 
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  onClick={handleCloseModal}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{selectedDoc.icon}</div>
                <p className="text-gray-300 leading-relaxed">{selectedDoc.description}</p>
              </div>
              
              <button 
                className={`w-full btn-gradient px-8 py-5 font-semibold text-white hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden ${downloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                onClick={() => handleDownload(selectedDoc)}
                disabled={downloading}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                {downloading ? (
                  <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                <span className="relative z-10">{downloading ? 'Opening...' : 'Download Document'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Documents;