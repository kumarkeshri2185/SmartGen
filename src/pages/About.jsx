import React from 'react';
import { Award, Users, Target } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-200 mb-12">
          About SmartGen SpacedTech
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-900 bg-opacity-50 p-8 rounded-xl border border-blue-800">
            <h2 className="text-2xl font-semibold mb-6 text-blue-200">
              Our Mission
            </h2>
            <p className="text-blue-100 leading-relaxed">
              SmartGen SpacedTech is dedicated to inspiring and educating the next 
              generation of space scientists, roboticists, and technological innovators. 
              We believe in nurturing young minds through comprehensive, hands-on 
              educational programs that blend theoretical knowledge with practical experience.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-400" />,
                title: "Excellence in Education",
                description: "Providing world-class educational programs in space science and technology"
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: "Community of Innovators",
                description: "Building a collaborative network of young scientists and technologists"
              },
              {
                icon: <Target className="w-12 h-12 text-blue-400" />,
                title: "Future-Focused Learning",
                description: "Preparing students for challenges and opportunities in space exploration"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 bg-blue-900 bg-opacity-50 p-4 rounded-xl border border-blue-800"
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-200">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;