// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-4 text-center">
    <div className="text-gold font-playfair text-8xl font-bold opacity-20 mb-4">404</div>
    <h1 className="font-playfair text-3xl font-semibold text-dark-text mb-3">Page Not Found</h1>
    <p className="font-inter text-dark-text/55 text-sm max-w-sm mb-8">
      The page you're looking for doesn't exist. Let's take you back to Vanam Valley.
    </p>
    <Link to="/" className="btn-gold inline-flex">
      <ArrowLeft size={15} />
      Back to Home
    </Link>
  </div>
);

export default NotFound;

