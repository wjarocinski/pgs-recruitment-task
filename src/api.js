import axios from 'axios';

export default axios.create({
    baseURL: 'https://makevoid-skicams.p.mashape.com/cams.json',
    headers: {'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'}
  });