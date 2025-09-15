import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const SubmitProof = () => {
  const [notes, setNotes] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting proof:', { notes, image: selectedImage });
    // Handle submission logic here
  };

  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">SUBMIT PROOF</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="greenpoint-card p-4 mb-4">
          <div className="text-center">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded mb-3"
              style={{ 
                width: '120px', 
                height: '120px', 
                backgroundColor: 'hsl(var(--secondary))',
                border: '2px dashed hsl(var(--border))'
              }}
            >
              {selectedImage ? (
                <img 
                  src={URL.createObjectURL(selectedImage)} 
                  alt="Selected proof" 
                  className="img-fluid rounded"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              ) : (
                <span className="fs-1 text-muted">📷</span>
              )}
            </div>
            
            <div>
              <label htmlFor="imageUpload" className="btn btn-outline-primary">
                Choose Image
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="d-none"
              />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="greenpoint-card p-4 mb-4">
          <div className="mb-3">
            <textarea
              className="form-control"
              rows={4}
              placeholder="Add notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button 
            type="submit" 
            className="btn btn-primary btn-lg"
            disabled={!selectedImage}
          >
            SUBMIT
          </button>
        </div>
      </form>

      <Navigation />
    </div>
  );
};

export default SubmitProof;