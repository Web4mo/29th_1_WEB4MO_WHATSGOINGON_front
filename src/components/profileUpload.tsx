import React, { useState } from 'react';
import { Camera } from 'assets';

const ProfileUpload: React.FC = () => {
  const placeholderImage =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlMWUxZTEiIC8+PHRleHQgeD0iMTAwIiB5PSIxMDAiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iI2RkZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+PC9zdmc+';

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (
        fileExtension === 'png' ||
        fileExtension === 'jpg' ||
        fileExtension === 'jpeg'
      ) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePicture(reader.result as string);
          setError(null);
        };
        reader.readAsDataURL(file);
      } else {
        setError('Only PNG and JPG files are allowed.');
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        accept=".png,.jpg,.jpeg"
        onChange={handleFileChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginTop: '-500px' }}>
        <img
          src={profilePicture || placeholderImage}
          alt="Profile"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            marginLeft: '100px',
          }}
        />
        <Camera
          onClick={() => document.getElementById('fileInput')?.click()}
          style={{ marginLeft: '-60px' }}
        />
      </div>
    </div>
  );
};

export default ProfileUpload;
