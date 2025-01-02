import React from 'react';
import { 
  Telescope, 
  Bot, 
  CloudLightning, 
  Award 
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Telescope className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
      title: "Space Science Program",
      description: "Comprehensive curriculum exploring astronomical concepts, planetary science, and space research methodologies.",
      details: [
        "Theoretical and practical learning modules",
        "Expert-led workshops",
        "Advanced research opportunities"
      ]
    },
    {
      icon: <Bot className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
      title: "Robotics",
      description: "Cutting-edge robotics training for students of all skill levels.",
      details: [
        "Hands-on robotics design and programming",
        "AI and machine learning integration",
        "Competitive robotics challenges"
      ]
    },
    {
      icon: <CloudLightning className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
      title: "Space Technology Workshops",
      description: "Immersive workshops focusing on emerging space technologies.",
      details: [
        "Satellite design principles",
        "Space mission simulation",
        "Latest technological innovations"
      ]
    },
    {
      icon: <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />,
      title: "Space Science Olympiads",
      description: "National and international competitive events for young scientists.",
      details: [
        "Multiple difficulty levels",
        "Scholarships for top performers",
        "Recognition and awards"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-200 mb-12">
          Our Services
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-blue-900 bg-opacity-50 p-6 rounded-xl border border-blue-800 hover:bg-opacity-70 transition"
            >
              {service.icon}
              <h2 className="text-2xl font-semibold mb-4 text-blue-200 text-center">
                {service.title}
              </h2>
              <p className="text-blue-100 mb-4 text-center">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;