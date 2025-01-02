import { Link } from 'react-router-dom';
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-blue-200 mb-4">
            SmartGen SpacedTech
          </h3>
          <p className="text-blue-100 mb-4">
            Inspiring the next generation of space explorers, roboticists, 
            and technological innovators through cutting-edge educational programs and hands-on experience.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            {[{ Icon: Facebook, link: '#' }, { Icon: Twitter, link: '#' }, { Icon: Instagram, link: '#' }, { Icon: Linkedin, link: '#' }].map(({ Icon, link }, index) => (
              <a 
                key={index} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-blue-200 mb-4">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Media', path: '/media' },
              { name: 'Contact', path: '/contact' },
              { name: 'Login', path: '/login' }
            ].map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="text-blue-100 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold text-blue-200 mb-4">
            Contact Us
          </h4>
          <div className="space-y-3">
            {[
              { 
                Icon: Mail, 
                text: 'Smartgenspace@outlook.com',
                link: 'mailto:Smartgenspace@outlook.com'
              },
              { 
                Icon: Phone, 
                text: '+91 88823 23555',
                link: 'tel:+918882323555'
              },
              { 
                Icon: MapPin, 
                text: 'Hullimangala Road, Bommasandra, Bangalore, Karnataka - 560099',
                link: 'https://www.google.com/maps/place/Hulimangala+Rd,+Karnataka/@12.8291856,77.640666,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae6b9cb8f7f571:0x78c69a6d4155637a!8m2!3d12.8291856!4d77.640666!16s%2Fg%2F11bw8677jn?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'
              }
            ].map(({ Icon, text, link }, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon className="text-blue-400 w-5 h-5" />
                <a 
                  href={link} 
                  className="text-blue-100 hover:text-white transition"
                >
                  {text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Additional Info */}
      <div className="mt-8 pt-6 border-t border-blue-800 text-center">
        <p className="text-blue-200">
          © {new Date().getFullYear()} SmartGen SpacedTech Pvt Ltd. 
          All Rights Reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link to="/" className="text-blue-100 hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/" className="text-blue-100 hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
