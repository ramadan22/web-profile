import Link from 'next/link';
import Image from 'next/image';
import { BiLogoGmail, BiPhone } from 'react-icons/bi';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import bgFooterImage from '@/assets/images/bg-footer.png';

const FooterUI = () => (
  <footer className="flex flex-col bg-transparent">
    <Image src={bgFooterImage} className="w-full" alt="background footer" />
    <div className="flex flex-col gap-y-2.5 bg-primary items-center justify-center -mt-10 pb-20 text-white/80">
      <h1 className="text-2xl text-center mb-10">Contact Me</h1>
      <Link
        className="flex items-center gap-x-2 hover:text-white/90"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=harisramadan22@gmail.com"
        target="_blank"
      >
        <span className="text-2xl">
          <BiLogoGmail />
        </span>
        harisramadan22@gmail.com
      </Link>
      <Link
        className="flex items-center gap-x-2 hover:text-white/90"
        href="https://api.whatsapp.com/send?phone=081514422393"
        target="_blank"
      >
        <span className="text-2xl">
          <BiPhone />
        </span>
        +6281514422393
      </Link>
      <div className="flex gap-x-4 py-5">
        <Link
          className="hover:text-white/90"
          href="https://api.whatsapp.com/send?phone=081514422393"
          target="_blank"
        >
          <span className="text-2xl">
            <FaWhatsapp />
          </span>
        </Link>
        <Link
          className="hover:text-white/90"
          href="https://github.com/ramadan22"
          target="_blank"
        >
          <span className="text-2xl">
            <FaGithub />
          </span>
        </Link>
        <Link
          className="hover:text-white/90"
          href="https://www.linkedin.com/in/haris-ramadan"
          target="_blank"
        >
          <span className="text-2xl">
            <FaLinkedin />
          </span>
        </Link>
        <Link
          className="hover:text-white/90"
          href="https://www.instagram.com/haris_ramadan"
          target="_blank"
        >
          <span className="text-2xl">
            <FaInstagram />
          </span>
        </Link>
        <Link
          className="hover:text-white/90"
          href="https://www.facebook.com/harisramadan301297"
          target="_blank"
        >
          <span className="text-2xl">
            <FaFacebook />
          </span>
        </Link>
      </div>
    </div>
  </footer>
);

export default FooterUI;
