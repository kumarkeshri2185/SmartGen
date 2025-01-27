import React, { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import backgroundImage from "../assets/images/background.jpg";
// import logo from "../assets/images/logo.png";

const Media = () => {
  const [mediaItems] = useState([
    {
      id: 1,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/media/Rocket_Thrust.jpeg`,
      title: 'Advanced Space Robotics',
      description: 'Cutting-edge satellite technology for space exploration'
    },
    {
      id: 2,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/media/Rocket-Body.jpeg`,
      title: 'Rocket Science',
      description: 'Exploring of Rocket Tech and manufacturing'
    },
    {
      id: 3,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/media/Rocket-Parts.jpeg`,
      title: 'Satellite Engineering Workshop',
      description: 'Students learning satellite design principles'
    },
    {
        id: 4,
        type: 'image',
        src: `${process.env.PUBLIC_URL}/media/Rocket-Thrust-Engine-2.jpeg`,
        title: 'Space Exploration',
        description: 'Advanced Space Exploration and Space Technology'
    },
    {
        id: 5,
        type: 'image',
        src: `${process.env.PUBLIC_URL}/media/Student-Engagement-1.jpeg`,
        title: 'Student Engagement',
        description: 'Engaging students in spance science activities'
    },
    {
        id: 6,
        type: 'image',
        src: `${process.env.PUBLIC_URL}/media/Student-Engagement-2.jpeg`,
        title: 'Student Engagement',
        description: 'Student\'s individual participation in Space Projects and Workshop'
    },
    {
        id: 7,
        type: 'image',
        src: `${process.env.PUBLIC_URL}/media/Student-Engagement-3.jpeg`,
        title: 'Student Workshop',
        description: 'Students participation in workshop building simple yet innovative projects'
    },
    {
      id: 8,
      type: 'image',
      src: `${process.env.PUBLIC_URL}/media/GauravSir.jpg`,
      title: 'Space Awareness Program',
      description: ''
  },
  {
    id: 9,
    type: 'image',
    src: `${process.env.PUBLIC_URL}/media/GauravSir1.jpg`,
    title: 'Space Awareness Program',
    description: ''
  },
  {
  id: 10,
  type: 'image',
  src: `${process.env.PUBLIC_URL}/media/GauravSir2.jpg`,
  title: 'Space Conclave 2024',
  description: ''
  },
  {
  id: 11,
  type: 'image',
  src: `${process.env.PUBLIC_URL}/media/GauravSir3new.jpg`,
  title: 'Talks on Space Education',
  description: 'Meeting with ISRO INSPACe Director PD Dr Vinod Kumar'
  },
  {
    id: 12,
    type: 'image',
    src: `${process.env.PUBLIC_URL}/media/GauravSirPic.jpg`,
    title: 'Discussion on New Eduction Policy 2024',
    description: 'Meeting with INSPACe Associate Director Gaurav Kumar to discuss about Space science education and oppotunities around'
    },
  ]);

  const [selectedMedia, setSelectedMedia] = useState(null);

  const openMediaModal = (media) => {
    setSelectedMedia(media);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-galaxy-dark text-white p-8"
    style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-cosmic-blue"
      >
        Space Technology Media Gallery
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((media) => (
          <motion.div
            key={media.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-space-gray rounded-lg overflow-hidden shadow-xl cursor-pointer"
            onClick={() => openMediaModal(media)}
          >
            {media.type === 'image' ? (
              <img 
                src={media.src} 
                alt={media.title} 
                className="w-full h-64 object-cover"
              />
            ) : (
              <video 
                src={media.src} 
                className="w-full h-64 object-cover"
                preload="metadata"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-cosmic-blue">{media.title}</h3>
              <p className="text-gray-300 mt-2">{media.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeMediaModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.title} 
                className="w-full max-h-[80vh] object-contain"
              />
            ) : (
              <video 
                src={selectedMedia.src} 
                controls 
                className="w-full max-h-[80vh]"
              />
            )}
            <div className="mt-4 text-center">
              <h2 className="text-2xl text-cosmic-blue">{selectedMedia.title}</h2>
              <p className="text-gray-300 mt-2">{selectedMedia.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Media;