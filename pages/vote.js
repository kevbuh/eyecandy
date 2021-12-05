import Link from "next/link";
import React from "react";
import Image from "next/image";

// function FileUpload() {
//   // State to store uploaded file
//   const [file, setFile] = React.useState("");

//   // Handles file upload event and updates state
//   function handleUpload(event) {
//     setFile(event.target.files[0]);

//     // Add code here to upload file to server
//     // ...
//   }
// }

function Vote() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

  return (
    <main>
      <p>
        <Link href="/">
          <a>
            <codeUnderline>EYE CANDY</codeUnderline>
          </a>
        </Link>
        {/* <input
          type="file"
          id="BtnBrowseHidden"
          name="files"
          // style="display: none;"
        /> */}
        {/* <label for="BtnBrowseHidden" id="LblBrowse">
          Browse
        </label> */}
        <br />
      </p>
      <code2>UPLOAD PICTURES TO TRAIN THE AI</code2>
      <br />

      <div id="upload-box">
        <code2>
          <input
            type="file"
            id="actual-btn"
            className="userButton"
            onChange={handleUpload}
            hidden
          />
          <label className="userButton" htmlFor="actual-btn">
            Upload
          </label>
          <br />
          <div className="marginTop">
            Filename: {file.name}
            File type: {file.type}
            File size: {file.size} bytes
            <div>
              {file ? <input className="userButton" type="submit" /> : null}
            </div>
            {file && <ImageThumb image={file} />}
          </div>
        </code2>
      </div>
      <br />
    </main>
  );
}

const ImageThumb = ({ image }) => {
  return (
    <Image
      src={URL.createObjectURL(image)}
      alt={image.name}
      width="1000vw"
      height={300}
      layout="responsive"
      objectFit="contain"
    />
  );
};

export default Vote;
