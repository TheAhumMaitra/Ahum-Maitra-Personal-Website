'use client'; // Important for interactivity in Next.js App Router

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function First_name_magic() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleMagic = () => {
    if (name.trim()) {
      setMessage(`✨ Hello, ${name}! Magic unlocked! ✨`);
    } else {
      setMessage('Please enter your first name.');
    }
  };

  return (
    <main
      className="flex flex-col items-center gap-4 mt-4 p-6 rounded-2xl shadow-xl
                 bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-all"
    >
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <AutoAwesomeIcon className="text-yellow-500" />
        Type your first name to see a bit of magic!
      </h3>

      <TextField
        id="first-name-input"
        label="Your first name"
        variant="filled"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          width: '100%',
          input: { color: 'inherit' },
          label: { color: 'inherit' },
          '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'inherit',
          },
        }}
      />

      <Button
        variant="outlined"
        onClick={handleMagic}
        className="dark:border-white dark:text-white"
      >
        See Magic
      </Button>

      {message && (
        <p className="mt-2 text-green-600 dark:text-green-400 font-medium text-center">
          {message}
        </p>
      )}
    </main>
  );
}
