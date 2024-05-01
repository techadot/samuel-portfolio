import Link from "next/link";

interface DownloadLinkProps {
  filename: string; // Example: 'my_cv.pdf'
}

const DownloadLink: React.FC<DownloadLinkProps> = ({ filename }) => {
  return (
    <a href={`/${filename}`} download="Abiodun_Bankole_Resume">
      <p>Download CV</p>
    </a>
  );
};

export default DownloadLink;
