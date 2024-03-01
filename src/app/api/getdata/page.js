// api/getdata/page.js
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = "force-dynamic";

async function handler() {
  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.05&longitude=-16.54&hourly=temperature_2m,weathercode,windspeed_10m,windgusts_10m,winddirection_10m,uv_index&models=gfs_global&current_weather=true&windspeed_unit=kn&timezone=Europe%2FLondon";
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Guarda los datos en un archivo
  const filePath = path.join(process.cwd(), 'data.js');
  
  // Write the data to the file
  await fs.writeFile(filePath, `export const data = ${JSON.stringify(data, null, 2)};`);

  console.log('Data has been written to data.js');
}

export default handler;
