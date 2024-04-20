import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WebSocketClient = () => {
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [result, setResult] = useState('');
  const [socket, setSocket] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // crop-ai-model-service-zvj7xjzdgq-ue.a.run.app

  useEffect(() => {
    const newSocket = new WebSocket('https://crop-ai-model-service-zvj7xjzdgq-ue.a.run.app');

    newSocket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    newSocket.onmessage = (event) => {
      setResult(event.data);
      console.log('Received message:', event.data);
    };

    newSocket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    const message = JSON.stringify({
      N,
      P,
      K,
      temperature,
      humidity,
      ph,
      rainfall,
    });

    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-r ${darkMode ? 'from-gray-800 to-gray-900' : 'from-blue-500 to-green-500'
        } text-white`}
      style={{
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <AnimatePresence>
        <motion.div
          className="max-w-md mx-auto p-8 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6">
            <motion.h1
              className="text-2xl font-bold text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Crop Recommender Back-end Client Test
            </motion.h1>
            <motion.button
              onClick={toggleDarkMode}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Enter the input values to get the prediction
          </motion.p>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-gray-300 font-bold">{result}</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.input
              type="number"
              placeholder="Enter N"
              value={N}
              onChange={(e) => setN(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.input
              type="number"
              placeholder="Enter P"
              value={P}
              onChange={(e) => setP(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            <motion.input
              type="number"
              placeholder="Enter K"
              value={K}
              onChange={(e) => setK(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
            <motion.input
              type="number"
              placeholder="Enter temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
            <motion.input
              type="number"
              placeholder="Enter humidity"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            <motion.input
              type="number"
              placeholder="Enter ph"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            />
            <motion.input
              type="number"
              placeholder="Enter rainfall"
              value={rainfall}
              onChange={(e) => setRainfall(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            />
          </div>
          <motion.button
            onClick={sendMessage}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </motion.div>
      </AnimatePresence>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WebSocketClient;
