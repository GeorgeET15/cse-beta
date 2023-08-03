import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Uploadform = () => {
  const types = ["image/png", "image/jpeg"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changehandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please selct an image file( png or jpeg )");
    }
  };
  return (
    <form>
      <input type="file" onChange={changehandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Uploadform;
