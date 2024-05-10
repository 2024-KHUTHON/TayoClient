import React from "react";
import QRCode from "react-qr-code";

function QRcode({ hash }) {
  return (
    <>
      <QRCode value={hash} />
    </>
  );
}

export default QRcode;
