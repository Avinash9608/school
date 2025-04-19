import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import './Alert.css';

const Alert = () => {
  const { error, clearError } = useContext(AuthContext);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (error) {
      setAlert({ type: 'danger', message: error });
      
      // Clear error after 5 seconds
      const timer = setTimeout(() => {
        clearError();
        setAlert(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  // Function to set custom alerts
  const setCustomAlert = (type, message, timeout = 5000) => {
    setAlert({ type, message });
    
    // Clear alert after timeout
    const timer = setTimeout(() => {
      setAlert(null);
    }, timeout);
    
    return () => clearTimeout(timer);
  };

  // Expose setCustomAlert to global window object
  useEffect(() => {
    window.setAlert = setCustomAlert;
    
    return () => {
      delete window.setAlert;
    };
  }, []);

  if (!alert) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type}`}>
      <i className={`fas ${alert.type === 'danger' ? 'fa-exclamation-circle' : 'fa-info-circle'}`}></i>
      <span>{alert.message}</span>
      <button className="close-btn" onClick={() => setAlert(null)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default Alert;
