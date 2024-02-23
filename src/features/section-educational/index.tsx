import Link from 'next/link';
import Label from '@/components/Label';

const SectionEducationalFeature = () => (
  <div className="container">
    <h1 className="text-2xl text-center mb-10">Educational</h1>
    <div className="relative grid grid-cols-2 gap-x-20">
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
);

export default SectionEducationalFeature;
