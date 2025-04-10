export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/logo-bg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Overlay for 70% opacity */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      {/* Text content */}
      <div style={{ zIndex: 2 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Sensei7 Beats</h1>
        <p style={{ fontSize: '1.25rem' }}>Buy Beats. Lease Tracks. Build Hits.</p>
        <button
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Browse Beats
        </button>
      </div>
    </div>
  );
}
