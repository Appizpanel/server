// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiKey = req.headers['appizpanel-api-key'];

  if (!apiKey || apiKey !== '') {
    res.status(401).json({ error: 'An API key is required to connect to Appizpanel' });
    return;
  }
};


