import React, { useState } from 'react';
import ytdl from 'ytdl-core';
import { TextField, Button, Typography } from '@mui/material';

export default function YoutubeQuery() {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [mp3Link, setMp3Link] = useState('');
  const [mp4Link, setMp4Link] = useState('');

  const handleConvert = async () => {
    try {
      const info = await ytdl.getInfo(youtubeLink);

      // MP3 Conversion
      const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
      const audioDownloadUrl = audioFormat.url;
      setMp3Link(audioDownloadUrl);

      // MP4 Conversion
      const videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
      const videoDownloadUrl = videoFormat.url;
      setMp4Link(videoDownloadUrl);
    } catch (error) {
      console.error('Error converting:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6" component="div" sx={{ marginBottom: '1rem' }}>
        YouTube Converter
      </Typography>
      <TextField
        fullWidth
        label="Enter YouTube link"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" onClick={handleConvert} sx={{ marginBottom: '1rem' }}>
        Convert to MP3/MP4
      </Button>
      {mp3Link && (
        <div>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            MP3 Download:
          </Typography>
          <a href={mp3Link} download>
            Download MP3
          </a>
        </div>
      )}
      {mp4Link && (
        <div>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            MP4 Download:
          </Typography>
          <a href={mp4Link} download>
            Download MP4
          </a>
        </div>
      )}
    </div>
  );
};