import React, { useState } from 'react';
import { Lock, User, Mail, Rocket } from 'lucide-react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isLogin) {
      // Login logic
      console.log('Login Attempt:', {
        email: formData.email,
        password: formData.password
      });
    } else {
      // Signup logic
      console.log('Signup Attempt:', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black flex items-center justify-center p-4">
      <div className="bg-blue-900 bg-opacity-50 p-8 rounded-xl border border-blue-800 w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6">
          <Rocket className="text-blue-400 w-16 h-16" />
        </div>
        
        <h2 className="text-3xl font-bold text-center text-blue-200 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 pl-10 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 pl-10 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 pl-10 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              minLength="6"
            />
          </div>

          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full p-3 pl-10 bg-blue-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="6"
              />
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-blue-200">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;