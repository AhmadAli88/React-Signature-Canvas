import React, { useRef, useState } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
  const sigCanvas = useRef({});
  const [imageURL, setImageURL] = useState(null); // to save the signature image URL

  // Clear the signature canvas
  const clearSignature = () => sigCanvas.current.clear();

  // Save the signature as an image
  const saveSignature = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  // Reset signature (clears and removes saved image)
  const resetSignature = () => {
    clearSignature();
    setImageURL(null);
  };

  return (
    <div>
      <h2>Signature Pad</h2>
      <ReactSignatureCanvas
        ref={sigCanvas}
        penColor="blue"
        canvasProps={{
          width: 500,
          height: 200,
          className: 'signatureCanvas'
        }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={clearSignature}>Clear</button>
        <button onClick={saveSignature}>Save</button>
        <button onClick={resetSignature}>Reset</button>
      </div>
      {imageURL && (
        <div>
          <h3>Saved Signature:</h3>
          <img src={imageURL} alt="Signature" />
        </div>
      )}
    </div>
  );
};

export default SignaturePad;
