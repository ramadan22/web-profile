// import FormLogin from '@/features/form-login';

'use client';

import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebook, FaGithub, FaHtml5, FaInstagram, FaLinkedin,
  FaWhatsapp, FaLaptopCode, FaCss3Alt, FaBootstrap, FaReact, FaGit, FaNodeJs, FaRegFileCode,
} from 'react-icons/fa';
import {
  BiLogoGmail, BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript, BiPhone,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import Marquee from 'react-fast-marquee';
import { BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs';
import ProfileImage from '../assets/images/profile.png';
import codelabsIndonesiaImage from '../assets/images/codelabsindonesia.png';
import incubesolutionImage from '../assets/images/incubesolution.png';
import alteacareImage from '../assets/images/alteacare.png';
import pinaIndonesiaImage from '../assets/images/pinaindonesia.png';
import bgFooterImage from '../assets/images/bg-footer.png';
import Button from '@/components/button';
import ScrollToTopButton from '@/ui/scroll-to-top-button';

const HomePage = () => (
  <>
    <ScrollToTopButton />
    <nav className="border-b border-gray-lightest shadow-xl bg-white">
      <div className="container flex justify-between px-20 py-2.5 items-center mx-auto">
        <div className="text-xl">
          Harisramadan
          <span className="text-primary text-3xl">Code</span>
        </div>
        <ul className="flex gap-x-6 [&>li>a]:text-primary [&>li>a:hover]:text-primary/50">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Profile</Link></li>
          <li><Link href="/">Articles</Link></li>
          <li><Link href="/">Portfolio</Link></li>
          <li><Link href="/">Contact Me</Link></li>
        </ul>
      </div>
    </nav>
    <div className="[&>section:nth-child(odd)]:bg-white">
      <section className="px-10 pt-20 pb-16">
        <div className="container mx-auto flex items-center justify-around">
          <div className="flex flex-col gap-y-4">
            <Label className="text-[#EAB308] animate-slide-top-to-bottom animation-duration-[0.5s]">Hello, Welcome</Label>
            <Label className="text-5xl animate-slide-top-to-bottom animation-duration-[1s]">I m Haris Ramadan</Label>
            <p className="text-lg animate-slide-top-to-bottom animation-duration-[1.5s]">
              Learn, Sharing, Problem solving, Try something new. I love all of those.
              <br />
              {'let\'s'}
              {' '}
              talk to build some miracle!
            </p>
            <div className="mt-5 animate-slide-top-to-bottom animation-duration-[2s]">
              <Button>Contact Me</Button>
            </div>
          </div>
          <div className="flex items-start justify-center w-1/3 relative">
            <div className="w-7/12 h-[375px] border-8 border-primary/90 rounded-xl overflow-hidden relative bg-white animate-slide-left-to-right animation-duration-[2.5s]" />
            <div className="w-7/12 h-[375px] overflow-hidden bg-white absolute -mt-8 -mr-20 shadow-lg border border-gray-100 rounded-xl animate-slide-left-to-right animation-duration-[3.5s]">
              <Image src={ProfileImage} objectFit="contain" fill alt="Profile" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-20">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center mb-10">Educational</h1>
          <div className="relative grid grid-cols-2 gap-x-20 px-28">
            <div className="bg-white h-[280px] flex items-center justify-between rounded-lg animate-slide-left-to-right animation-duration-[4s]">
              <div className="w-16 h-16 rounded-[10px] bg-white -ml-10" />
              <div className="flex-1 h-full py-10 px-4">
                <h2 className="text-2xl">Al-Amanah High School</h2>
                <Label className="text-black/50">Software Enginer</Label>
                <ul className="list-disc pl-4 py-5">
                  <li>
                    Runner Up Lomba Web Design
                    {' '}
                    <Link href="https://www.alamanahbantani.sch.id/berita/smk-al-amanah/8/smk-al-amanah-meraih-posisi-runner-up-kota-tangerang-selatan.html" target="_blank" className="text-primary hover:text-primary/50">link</Link>
                  </li>
                  <li>Pernah Membuat Pemilihan Ketua Osis Online</li>
                  <li>Praktek Kerja Lapangan - PUSPITEK</li>
                  <li>Peringkat Satu Uji Kompetensi</li>
                </ul>
              </div>
              <div className="w-16 h-16 rounded-[10px] bg-gray-50 -mr-4" />
            </div>
            <div className="bg-white h-[280px] flex items-center justify-between rounded-lg animate-slide-right-to-left animation-duration-[4s]">
              <div className="w-16 h-16 rounded-[10px] bg-white -ml-10" />
              <div className="flex-1 h-full py-10 px-4">
                <h2 className="text-2xl">Pamulang University</h2>
                <Label className="text-black/50">Software Enginer</Label>
                <ul className="list-disc pl-4 py-5">
                  <li>Penyelenggara Seminar Wordpress</li>
                </ul>
              </div>
              <div className="w-16 h-16 rounded-[10px] bg-gray-50 -mr-4" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-20">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center mb-10">Careers Experience</h1>
          <div className="grid grid-cols-4 gap-x-5 items-start">
            <div className="border rounded-lg bg-white flex flex-col justify-center items-center pb-5 pt-2.5 px-5">
              <Image src={incubesolutionImage} width={100} height={100} alt="incube solutions" />
              <h2 className="text-lg text-center my-1.5">Incube Solutions</h2>
              <p className="text-sm text-gray-500 text-center">INCUBE Solutions is an IT Solution provider company, offering a wide range of IT solutions customized to various verticals and horizontals.</p>
            </div>
            <div className="border rounded-lg bg-white flex flex-col justify-center items-center pb-5 pt-1 px-5">
              <Image src={codelabsIndonesiaImage} width={150} height={150} alt="codelabs indonesia" />
              <h2 className="text-lg text-center my-1.5">Codelabs Indonesia</h2>
              <p className="text-sm text-gray-500 text-center">Codelabs is an intelligent IT solutions provider specializing in the development, implementation and maintenance</p>
            </div>
            <div className="border rounded-lg bg-white flex flex-col justify-center items-center py-5 px-5">
              <Image src={alteacareImage} width={150} height={150} alt="alteacare" />
              <h2 className="text-lg text-center mt-4 mb-2">Alteacare</h2>
              <p className="text-sm text-gray-500 text-center">AlteaCare, under PT. Sehat Digital Nusantara, is a leading health app in Indonesia, providing diverse services such as teleconsultations with specialists, prescription drug delivery, vaccination registration, and up-to-date health information.</p>
            </div>
            <div className="border rounded-lg bg-white flex flex-col justify-center items-center py-5 px-5">
              <Image src={pinaIndonesiaImage} width={100} height={100} alt="pina indonesia" className="mt-2" />
              <h2 className="text-lg text-center mt-4 mb-2">Pina Indonesia</h2>
              <p className="text-sm text-gray-500 text-center">PINA is shaping the future of personal finance, striving to empower everyone for financial freedom. Their mission involves simplifying complex financial decisions through personalized advice and robust online tools, enabling smarter investing.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-20">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center mb-10">Skills</h1>
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto">
            <Marquee className="flex text-xl py-5">
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <BsFiletypeHtml />
                <Label>Html</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaHtml5 />
                <Label>Html5</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <BsFiletypeCss />
                <Label>CSS</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaCss3Alt />
                <Label>CSS3</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaBootstrap />
                <Label>Bootstrap</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <BiLogoTailwindCss />
                <Label>Tailwind</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <BiLogoJavascript />
                <Label>Javascript</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaReact />
                <Label>React.js</Label>
              </div>
            </Marquee>
            <Marquee direction="right" className="flex text-xl py-5">
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <TbBrandNextjs />
                <Label>Next.js</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <BiLogoTypescript />
                <Label>Typescript</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaGit />
                <Label>GIT</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <SiMysql />
                <Label>MySQL</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaNodeJs />
                <Label>Node.js</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <DiResponsive />
                <Label>Responsive WEB</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaLaptopCode />
                <Label>Clean Code</Label>
              </div>
              <div className="flex items-center gap-x-2 px-5 py-2 border rounded-full shadow-lg bg-white mr-5">
                <FaRegFileCode />
                <Label>Rest API</Label>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section className="p-20">
        <h1 className="text-2xl text-center mb-10">Project History</h1>
      </section>
      <section className="p-20 opacity-0">
        <h1 className="text-2xl text-center mb-10">Personal Learning</h1>
      </section>
    </div>
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
  </>
);

export default HomePage;
