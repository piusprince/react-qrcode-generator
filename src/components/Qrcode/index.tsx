import { useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode";
import { BsCloudDownload } from "react-icons/bs";
import { GiCycle } from "react-icons/gi";

interface URL {
  url: string;
}

interface QR {
  qr: string;
}

// interface IGenerateQR {
//   url: string;
//   properties: {
//     errorCorrectionLevel: string;
//     margin: number;
//     width: number;
//     color: {
//       dark: string;
//       light: string;
//     };
//   };
// }

const Qrcode = () => {
  const [url, setUrl] = useState<URL | string>("");
  const [qr, setQr] = useState<QR | string>("");
  let _: HTMLCanvasElement;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const GenerateQr = () => {
    QRCode.toDataURL(
      _,
      url as string,
      {
        errorCorrectionLevel: "H",
        margin: 1,
        width: 200,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      },
      function (err, url) {
        if (err) return console.error(err);
        setQr(url);
      }
    );
  };

  return (
    <Wrapper>
      <Title>QR Code Generator</Title>

      <input
        type="text"
        value={url as string}
        placeholder="eg https://twitter.com"
        onChange={handleChange}
      />

      <Button onClick={GenerateQr}>
        Generate
        <GiCycle />
      </Button>
      {qr && (
        <>
          <img src={qr as string} alt="qr" />

          <a href={qr as string} download="qrcode.png">
            Download
            <BsCloudDownload />
          </a>
        </>
      )}
    </Wrapper>
  );
};

export default Qrcode;

const Wrapper = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  margin: auto;

  input {
    padding: 1rem;
    border: none;
    outline: none;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    font-size: 1.6rem;

    &:focus {
      padding: 1.5rem 1rem;
    }
  }

  img {
    margin: 5rem;
  }

  a {
    text-decoration: none;
    text-align: center;
    color: #000;
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  @media (max-width: 450px) {
    width: 90%;
    max-width: 70rem;
  }
`;

const Title = styled.h1`
  font-size: 4.8rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background-color: #262626;
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #262626;
  }
`;
