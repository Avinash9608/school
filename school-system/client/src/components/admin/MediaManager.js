import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import "./MediaManager.css";

const MediaManager = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/media`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMedia(response.data.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(`${API_URL}/api/media/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setMedia([response.data.data, ...media]);
      setSelectedFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Error uploading media:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this media?")) {
      try {
        await axios.delete(`${API_URL}/api/media/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMedia(media.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting media:", error);
      }
    }
  };

  if (loading) {
    return <div className="media-manager">Loading...</div>;
  }

  return (
    <div className="media-manager">
      <h2>Media Manager</h2>
      
      {/* Upload Section */}
      <div className="upload-section">
        <h3>Upload New Media</h3>
        <div className="upload-area">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileSelect}
            className="file-input"
          />
          {preview && (
            <div className="preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            className="upload-btn"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>

      {/* Media List */}
      <div className="media-list">
        <h3>Uploaded Media</h3>
        <div className="media-grid">
          {media.map((item) => (
            <div key={item._id} className="media-item">
              <div className="media-preview">
                {item.type === "image" ? (
                  <img src={`${API_URL}${item.url}`} alt={item.title} />
                ) : (
                  <video controls>
                    <source src={`${API_URL}${item.url}`} type={item.mimeType} />
                  </video>
                )}
              </div>
              <div className="media-info">
                <h4>{item.title}</h4>
                <p>Type: {item.type}</p>
                <p>Size: {(item.size / 1024 / 1024).toFixed(2)} MB</p>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaManager; 