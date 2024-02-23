import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import AlbumList from './Components/AlbumList';
import AddAlbumForm from './Components/AddAlbumForm';

function App() {
  const [albums, setAlbums] = useState([]);

  const handleSaveAlbum = (newAlbum) => {
    setAlbums([...albums, { id: Date.now(), ...newAlbum }]);
  };

  const handleDeleteAlbum = (albumId) => {
    const updatedAlbums = albums.filter((album) => album.id !== albumId);
    setAlbums(updatedAlbums);
    alert('Album deleted successfully.');
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid" color='white'>
            <Link className="navbar-brand" to="/albums">
              Music Store
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav" color='white'>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/albums">
                    Album List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-album">
                    Add Album
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/albums"
            element={<AlbumList albums={albums} onDelete={handleDeleteAlbum} />}
          />
          <Route
            path="/add-album"
            element={<AddAlbumForm onSave={handleSaveAlbum} />}
          />
          <Route path="/*" element={<Navigate to="/albums" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

