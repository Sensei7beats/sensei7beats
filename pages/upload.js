import { useState } from 'react';

export default function Upload() {
  const [beat, setBeat] = useState({
    title: '',
    bpm: '',
    key: '',
    leasePrice: '',
    exclusivePrice: '',
    releaseDate: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeat({ ...beat, [name]: value });
  };

  const handleFileChange = (e) => {
    setBeat({ ...beat, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (backend storage coming next)');
  };

  return (
    <div style={{ backgroundColor: '#111', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Upload New Beat</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }}>
        <input type="file" accept="audio/*" onChange={handleFileChange} required />
        {/* Tunebat Link */}
        <a
          href="https://tunebat.com/Analyzer"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1db954', textDecoration: 'underline', fontSize: '0.9rem' }}
        >
          🎵 Detect Key & BPM via Tunebat
        </a>
        <input name="title" value={beat.title} onChange={handleChange} placeholder="Title" required />
        <input name="bpm" value={beat.bpm} onChange={handleChange} placeholder="BPM (from Tunebat)" />
        <input name="key" value={beat.key} onChange={handleChange} placeholder="Key (from Tunebat)" />
        <input name="leasePrice" value={beat.leasePrice} onChange={handleChange} placeholder="Lease Price" />
        <input name="exclusivePrice" value={beat.exclusivePrice} onChange={handleChange} placeholder="Exclusive Price" />
        <input type="datetime-local" name="releaseDate" value={beat.releaseDate} onChange={handleChange} />
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Upload Beat
        </button>
      </form>
    </div>
  );
}
