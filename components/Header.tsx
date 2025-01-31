import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <div className="hidden p-4 sm:flex items-center gap-4 justify-between bg-transparent">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Strada Libertății 1, Dej, jud. Cluj
      </p>
      <div className="flex gap-4 m-4">
        <Link href="https://www.instagram.com" target="_blank">
          <FaInstagram className="w-6 h-6  hover:text-pink-500 transition-all duration-300" />
        </Link>

        <Link
          href="https://www.facebook.com/p/Terasa-Black-Tulip-100083790402834"
          target="_blank"
        >
          <FaFacebook className="w-6 h-6  hover:text-blue-600 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
}
