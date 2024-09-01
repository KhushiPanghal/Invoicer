import { useState, useContext } from "react";
import AuthContext from "../context/auth";

export default function CreateAccount() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login({ username, password });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {isAuthenticated ? (
        <p className="text-green-600 text-lg font-bold">Welcome back!</p>
      ) : (
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            onClick={handleLogin}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-150 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Log in or create an account"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Log In or Create Account'}
          </button>
        </div>
      )}
    </div>
  );
}
