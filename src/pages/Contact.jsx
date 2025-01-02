import React, { useState } from 'react';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Phone, 
  MapPin,
  ExternalLink 
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare email body
    const emailBody = `Name: ${formData.name},
Contact: ${formData.phone},
Email: ${formData.email},
Message: ${formData.message}`;

    try {
      const response = await fetch('https://formspree.io/f/mvgojpjj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          message: emailBody
        })
      });

      if (response.ok) {
        // Success handling
        setSubmitStatus({
          success: true,
          error: false,
          message: 'Message sent successfully!'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        // Error handling
        setSubmitStatus({
          success: false,
          error: true,
          message: 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        success: false,
        error: true,
        message: 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-blue-900 bg-opacity-50 p-8 rounded-xl border border-blue-800">
          <h2 className="text-3xl font-bold text-blue-200 mb-6">
            Contact Information
          </h2>
          
          <div className="space-y-6">
            {[
              { 
                Icon: MapPin, 
                title: 'Address', 
                content: 'Hullimangala Road, Bommasandra, Bangalore, Karnataka - 560099' 
              },
              { 
                Icon: Phone, 
                title: 'Phone', 
                content: '+91 88823 23555' 
              },
              { 
                Icon: Mail, 
                title: 'Email', 
                content: 'Smartgenspace@outlook.com' 
              }
            ].map(({ Icon, title, content }, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Icon className="text-blue-400 w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-200">{title}</h3>
                  <p className="text-blue-100">{content}</p>
                </div>
              </div>
            ))}

            {/* New Google Form Button */}
            <div className="mt-6">
              <a 
                href="https://forms.gle/1E1pkef6BsaRZ2g18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300 space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Fill a Form</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-blue-200 mb-6 text-center">
            Send Us a Message
          </h2>
          
          <form 
            onSubmit={handleSubmit} 
            className="bg-blue-900 bg-opacity-50 p-8 rounded-xl border border-blue-800"
          >
            <div className="space-y-4">
              {[
                { 
                  name: 'name', 
                  type: 'text', 
                  placeholder: 'Your Name', 
                  Icon: User,
                  required: true
                },
                { 
                  name: 'email', 
                  type: 'email', 
                  placeholder: 'Your Email', 
                  Icon: Mail,
                  required: true
                },
                { 
                  name: 'phone', 
                  type: 'tel', 
                  placeholder: 'Phone Number', 
                  Icon: Phone,
                  required: false
                }
              ].map(({ name, type, placeholder, Icon, required }) => (
                <div key={name} className="relative">
                  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required={required}
                    className="w-full p-3 pl-10 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-blue-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full p-3 pl-10 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {submitStatus.success && (
                <div className="text-green-400 text-center mb-4">
                  {submitStatus.message}
                </div>
              )}

              {submitStatus.error && (
                <div className="text-red-400 text-center mb-4">
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;