const beats = [
  {
    id: 1,
    title: 'Trap Vibes',
    bpm: 140,
    key: 'C# Minor',
    priceLease: '$25',
    priceExclusive: '$150',
    audio: '/trap-vibes.mp3', // You can upload sample audio here
  },
  {
    id: 2,
    title: 'LoFi Nights',
    bpm: 85,
    key: 'G Major',
    priceLease: '$20',
    priceExclusive: '$120',
    audio: '/lofi-nights.mp3',
  },
];

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/logo-bg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'relative',
        color: '#fff',
      }}
    >
      {/* Overlay */}
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
      {/* Hero Section */}
      <div
        style={{
          zIndex: 2,
          position: 'relative',
          textAlign: 'center',
          paddingTop: '5rem',
          paddingBottom: '2rem',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>Welcome to Sensei7 Beats</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>Buy Beats. Lease Tracks. Build Hits.</p>
      </div>

      {/* Beat Store Section */}
      <div
        style={{
          zIndex: 2,
          position: 'relative',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {beats.map((beat) => (
          <div
            key={beat.id}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '1rem',
              borderRadius: '12px',
              textAlign: 'left',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '.5rem' }}>{beat.title}</h3>
            <p>BPM: {beat.bpm}</p>
            <p>Key: {beat.key}</p>
            <audio controls style={{ marginTop: '0.5rem', width: '100%' }}>
              <source src={beat.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <button style={buttonStyle}>Lease {beat.priceLease}</button>
              <button style={buttonStyle}>Exclusive {beat.priceExclusive}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#fff',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

