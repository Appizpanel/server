// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = req.headers['appizpanel-api-key'];

  if (!apiKey || apiKey !== 'your_api_key') {
    res.status(401).json({ error: 'An API key is required to connect to Appizpanel' });
    return;
  }

  // API anahtarı doğrulandıysa, başarılı bir durumda mesaj döndür.
  res.status(200).json({ message: 'API Connection Successful' });
};
