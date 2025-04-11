import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('sensei7beats'); // You can name this whatever you like
    const collection = db.collection('beats');

    const beat = req.body;
    beat.createdAt = new Date();

    const result = await collection.insertOne(beat);

    res.status(200).json({ message: 'Beat saved to DB!', id: result.insertedId });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload beat' });
  }
}
