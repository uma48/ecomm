'use client';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode'; // Default import for 3.x

export default function UserInfo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      try {
        const decoded = jwtDecode(token);
        setUserName(decoded.name || 'User');
        setUserEmail(decoded.email || '');
      } catch (err) {
        setUserName('User');
        setUserEmail('');
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
      setUserName('');
      setUserEmail('');
    }
  };

  useEffect(() => {
    checkAuth();
    const interval = setInterval(checkAuth, 300); // Poll every 300ms
    return () => clearInterval(interval);
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div className="bg-gray-100 p-4 text-center">
      <p className="text-sm text-gray-700">
        Welcome, <span className="font-semibold">{userName}</span>
      </p>
      <p className="text-sm text-gray-700">Email: {userEmail}</p>
    </div>
  );
}