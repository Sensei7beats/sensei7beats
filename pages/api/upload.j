export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const {
    title,
    bpm,
    key,
    leasePrice,
    exclusivePrice,
    releaseDate,
  } = req.body;

  // Simulate saving to DB (you'll upgrade this later)
  const newBeat = {
    id: Date.now(),
    title,
    bpm,
    key,
    leasePrice,
    exclusivePrice,
    releaseDate,
  };

  console.log('Beat received:', newBeat);

  // Send back confirmation
  res.status(200).json({ message: 'Beat uploaded successfully!', beat: newBeat });
}
