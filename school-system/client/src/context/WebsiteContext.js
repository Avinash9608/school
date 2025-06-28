import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const WebsiteContext = createContext();

export const useWebsite = () => {
  const context = useContext(WebsiteContext);
  if (!context) {
    throw new Error('useWebsite must be used within a WebsiteProvider');
  }
  return context;
};

export const WebsiteProvider = ({ children }) => {
  const [header, setHeader] = useState(null);
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch header data
  const fetchHeader = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/header`);
      setHeader(response.data.data);
    } catch (error) {
      console.error('Error fetching header:', error);
      setError('Failed to load header');
    }
  };

  // Fetch footer data
  const fetchFooter = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/footer`);
      setFooter(response.data.data);
    } catch (error) {
      console.error('Error fetching footer:', error);
      setError('Failed to load footer');
    }
  };

  // Load website data on mount
  useEffect(() => {
    const loadWebsiteData = async () => {
      setLoading(true);
      await Promise.all([fetchHeader(), fetchFooter()]);
      setLoading(false);
    };

    loadWebsiteData();
  }, []);

  // Refresh data (called when admin updates)
  const refreshData = async () => {
    setLoading(true);
    await Promise.all([fetchHeader(), fetchFooter()]);
    setLoading(false);
  };

  const value = {
    header,
    footer,
    loading,
    error,
    refreshData
  };

  return (
    <WebsiteContext.Provider value={value}>
      {children}
    </WebsiteContext.Provider>
  );
}; 