import { Label } from '@radix-ui/react-label';
import {
  FaHtml5, FaLaptopCode, FaCss3Alt, FaBootstrap, FaReact, FaGit, FaNodeJs, FaRegFileCode,
} from 'react-icons/fa';
import {
  BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { DiResponsive } from 'react-icons/di';
import Marquee from 'react-fast-marquee';
import { BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs';

const SectionSkillFeature = () => (
  <div className="container h-[calc(80vh-80px)] pt-20 pb-16 flex flex-col justify-center">
    <h1 className="text-2xl text-center mb-10">Skills</h1>
    <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto mix-blend-normal">
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
);

export default SectionSkillFeature;
