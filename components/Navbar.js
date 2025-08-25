'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to check token and update state
  const checkAuth = () => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  };

  // Run on mount and on pathname change
  useEffect(() => {
    checkAuth(); // Initial check
    checkAuth(); // Trigger immediately after render to catch login redirect

    // Lightweight polling for same-tab changes
    const interval = setInterval(checkAuth, 300); // 300ms for responsiveness

    return () => clearInterval(interval);
  }, [pathname]); // Depend on pathname to trigger on route changes

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    router.push('/'); // Redirect to home
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          E-commerce
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleLogout}
                className="text-white hover:underline"
              >
                Logout
              </button>
              <Link href="/cart" className="text-white hover:underline">
                Cart
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white hover:underline mr-4">
                Login
              </Link>
              <Link href="/register" className="text-white hover:underline mr-4">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}