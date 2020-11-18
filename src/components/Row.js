import React, { useState } from "react";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
