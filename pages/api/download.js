import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';

export default async function handler(req, res) {
    console.log("yes");
    try {
        const filename = './CV.pdf'; // Replace 'your-file.pdf' with the actual name of your PDF file

    // Set response headers to trigger PDF download
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/pdf');

    // Resolve the file path correctly
    const filePath = resolve(process.cwd(), 'CV.pdf'); // Replace 'your-file.pdf' with the actual path to your PDF file
    const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      } catch (error) {
        console.error('Error while downloading file:', error);
        res.status(500).end();
      }
}