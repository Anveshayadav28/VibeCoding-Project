import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ZoomIn, ZoomOut, Move3D } from 'lucide-react';

const ProductViewer: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const productImages = [
    'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleRotate = () => {
    setRotation(prev => prev + 90);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 600);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  return (
    <section id="product" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Viewer */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
              {/* 3D Product Display */}
              <motion.div
                className="relative"
                animate={{ 
                  rotateY: rotation,
                  scale: zoom
                }}
                transition={{ 
                  duration: isRotating ? 0.6 : 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={productImages[currentImage]}
                    alt="Neura Smartwatch"
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </AnimatePresence>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  AI
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Control Panel */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-2">
                <motion.button
                  onClick={handleRotate}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                </motion.button>
                
                <motion.button
                  onClick={handleZoomIn}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </motion.button>
                
                <motion.button
                  onClick={handleZoomOut}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ZoomOut className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Image Selector */}
            <div className="flex justify-center space-x-2 mt-6">
              {productImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentImage === index
                      ? 'bg-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Interactive Product Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore every detail of the Neura with our interactive 3D viewer. 
                Rotate, zoom, and discover the premium craftsmanship.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Move3D className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold">360° Rotation View</span>
              </div>
              <div className="flex items-center space-x-3">
                <ZoomIn className="w-6 h-6 text-teal-600" />
                <span className="text-lg font-semibold">High-Resolution Zoom</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-lg font-semibold">Multiple Color Options</span>
              </div>
            </div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Customize Your Watch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;