import Image from 'next/image';
import codelabsIndonesiaImage from '@/assets/images/codelabsindonesia.png';
import incubesolutionImage from '@/assets/images/incubesolution.png';
import alteacareImage from '@/assets/images/alteacare.png';
import pinaIndonesiaImage from '@/assets/images/pinaindonesia.png';

const CareerExperienceFeature = () => (
  <div className="container">
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
);

export default CareerExperienceFeature;
