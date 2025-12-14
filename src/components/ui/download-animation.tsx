import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Check } from 'lucide-react';

interface DownloadButtonProps {
  onDownload?: () => void;
  pdfUrl?: string;
  fileName?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  onDownload,
  pdfUrl = '/brochure.pdf',
  fileName = 'AI-Agentathon-Brochure.pdf'
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownloadClick = () => {
    if (isDownloading || isComplete) return;

    setIsDownloading(true);
    
    // Trigger PDF download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Call custom handler if provided
    onDownload?.();

    // Show completion state
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      // Reset after showing complete state
      setTimeout(() => {
        setIsComplete(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="flex justify-start items-center w-full">
      <motion.button
        onClick={handleDownloadClick}
        disabled={isDownloading || isComplete}
        className={`
          relative flex items-center justify-center gap-2 px-6 py-3
          rounded-full overflow-hidden
          font-medium text-base whitespace-nowrap
          transition-all duration-300
          ${isDownloading || isComplete
            ? 'cursor-wait' 
            : 'cursor-pointer hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]'
          }
        `}
        initial={{ scale: 1 }}
        whileHover={!isDownloading && !isComplete ? { scale: 1.02 } : {}}
        whileTap={!isDownloading && !isComplete ? { scale: 0.98 } : {}}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          animate={!isDownloading && !isComplete ? {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

        {/* Progress bar */}
        <AnimatePresence>
          {isDownloading && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-300 via-white to-cyan-300"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>

        {/* Icon and text content */}
        <div className="relative z-10 flex items-center gap-2">
          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="download"
                initial={{ scale: 1, y: 0 }}
                animate={isDownloading ? {
                  y: [0, -3, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                } : {}}
                exit={{ scale: 0, rotate: 180 }}
              >
                <Download className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.span
                key="downloaded"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white font-medium"
              >
                Downloaded!
              </motion.span>
            ) : isDownloading ? (
              <motion.span
                key="downloading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white font-medium"
              >
                Downloading...
              </motion.span>
            ) : (
              <motion.span
                key="download"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white font-medium"
              >
                Download Brochure
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </motion.button>
    </div>
  );
};
