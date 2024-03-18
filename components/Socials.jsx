import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <FaFacebookSquare />
      <FaXTwitter />
      <FaInstagramSquare />
      <FaYoutube />
    </div>
  );
};

export default Socials;
