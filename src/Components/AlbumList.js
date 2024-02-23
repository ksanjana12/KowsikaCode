// import React, { useState } from 'react';

// const AlbumList = ({ albums, onDelete }) => {
//   return (
//     <div>
//       <h2>Album List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Artist</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {albums.map((album) => (
//             <tr key={album.id}>
//               <td>{album.title}</td>
//               <td>{album.artist}</td>
//               <td>
//                 <button onClick={() => onDelete(album.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default AlbumList;


// src/components/AlbumList.js
import React from 'react';

const AlbumList = ({ albums, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Album List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Album ID</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
                <td>{album.albumId}</td>
              <td>{album.title}</td>
              <td>{album.artist}</td>
              <td>{album.price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onDelete(album.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumList;
