// import React, { useState } from 'react';

// const AddAlbumForm = ({ onSave }) => {
//   const [title, setTitle] = useState('');
//   const [artist, setArtist] = useState('');

//   const handleSave = () => {
//     if (title && artist) {
//       onSave({ title, artist });
//       setTitle('');
//       setArtist('');
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Album</h2>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Artist:
//         <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handleSave}>Save Album</button>
//     </div>
//   );
// };
// export default AddAlbumForm;

// src/components/AddAlbumForm.js
import React, { useState } from 'react';

const AddAlbumForm = ({ onSave }) => {
  const [albumId,setAlbumId]=useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (albumId&&title && artist && price) {
      onSave({ albumId,title, artist,price });
      setAlbumId('');
      setTitle('');
      setArtist('');
      setPrice('');
    } else {
      alert('Please fill all the required fields.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Album</h2>
      <form>
        <div className="mb-3">
        <label htmlFor="albumId" className="form-label">
            Album ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="albumId"
            placeholder='enter album ID'
            required
            value={albumId}
            onChange={(e) => setAlbumId(e.target.value)}
          />
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder='enter title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist:
          </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            placeholder='Enter artist name'
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder='enter price'
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-success" onClick={handleSave}>
          Save Album
        </button>
      </form>
    </div>
  );
};

export default AddAlbumForm;
