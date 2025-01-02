import React from 'react';
import { Rocket, Satellite, Globe } from 'lucide-react';
import '../assets/styles/custom.css';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Star Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white opacity-50 rounded-full animate-twinkle"
              style={{
                width: '2px',
                height: '2px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-blue-200">
            Exploring the Frontiers of Space Technology
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Empowering the next generation of space explorers, roboticists, 
            and technological innovators through cutting-edge educational programs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
                title: "Space Science",
                description: "Comprehensive programs exploring the mysteries of the universe"
              },
              {
                icon: <Satellite className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
                title: "Robotics",
                description: "Advanced workshops in robotic design and artificial intelligence"
              },
              {
                icon: <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
                title: "Technology Olympiads",
                description: "Competitive platforms for young innovators to showcase their skills"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-900 bg-opacity-50 p-6 rounded-xl border border-blue-800 hover:bg-opacity-70 transition"
              >
                {feature.icon}
                <h2 className="text-xl font-semibold mb-3 text-blue-200">
                  {feature.title}
                </h2>
                <p className="text-blue-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;