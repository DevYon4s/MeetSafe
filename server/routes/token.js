import express from 'express';
import axios from 'axios';
import { generateSignedJwt } from '../utils/jwtGenerator.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { code } = req.body;

  if (!code) return res.status(400).json({ error: 'Missing code' });

  try {
    const jwt = await generateSignedJwt();
    console.log('Generated JWT (client_assertion):', jwt);

    console.log('TOKEN_ENDPOINT:', process.env.TOKEN_ENDPOINT);
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.REDIRECT_URI,
      client_id: process.env.CLIENT_ID,
      client_assertion_type: process.env.CLIENT_ASSERTION_TYPE,
      client_assertion: jwt,
      code_verifier: 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk'
    });
    console.log('Token request params:', params.toString());

    console.log('Sending token request...');
    const response = await axios.post(
      process.env.TOKEN_ENDPOINT,
      params.toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    console.log('Token request successful!');

    res.json({ access_token: response.data.access_token });
  } catch (err) {
    console.error('Token request failed. Error details:', err.response?.data || err.message);
    res.status(500).json({ error: 'Token request failed' });
  }
});

export default router;