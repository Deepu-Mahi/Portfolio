import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';

const certificates = Array.from({ length: 11 }, (_, i) => ({
  file: `/certificates/cert${i + 1}.png`
}));

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative group bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => setSelectedCert(cert.file)}
          >
            {/* Image */}
            <img
              src={cert.file}
              alt=""
              className="w-full h-64 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center rounded-xl">
              <div className="flex items-center mb-4 space-x-2 text-white text-sm font-medium bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
                <Expand className="w-4 h-4" />
                <span>View Certificate</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal View */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-3 text-gray-700 hover:text-black text-3xl font-bold z-10"
            >
              ×
            </button>
            <img
              src={selectedCert}
              alt="Full Certificate"
              className="w-full h-auto object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
