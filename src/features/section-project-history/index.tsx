import Card from '@/ui/card';

const ProjectHistoryFeature = () => (
  <div className="container pt-20 pb-16 h-[calc(100vh-80px)] flex flex-col justify-center">
    <h1 className="text-2xl text-center mb-10">Project History</h1>
    <div className="flex flex-row flex-wrap items-center justify-center">
      <div className="w-1/4 p-2.5">
        <Card className="shadow-sm relative">
          <div
            className="absolute top-0 right-0 w-16 h-16 rounded-l-[50px] rounded-b-[50px] -mr-6 -mt-6 bg-[#aaa]"
            // style={{ backgroundColor: ` ${`#${Math.random().toString(16).substr(-6)}`}` }}
          />
          <div>
            <h1 className="text-lg font-bold">Dapurcoding - May 2019</h1>
            <h2 className="text-xs mb-5">Moved domain</h2>
            <ul className="text-sm list-disc mx-5">
              <li>Layouting from Scratch</li>
              <li>Create CMS</li>
              <li>Management User</li>
              <li>Work as Team</li>
              <li>This Web Created With CI 3</li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="w-1/4 p-2.5">
        <Card className="shadow-sm relative">
          <div
            className="absolute top-0 right-0 w-16 h-16 rounded-l-[50px] rounded-b-[50px] -mr-6 -mt-6 bg-[#ddd]"
            // style={{ backgroundColor: `${`#${Math.random().toString(16).substr(-6)}`}` }}
          />
          <div>
            <h1 className="text-lg font-bold">Blog Dapurcoding - Dese 2020</h1>
            <h2 className="text-xs mb-5">www.blog.dapurcoding.com</h2>
            <ul className="text-sm list-disc mx-5">
              <li>Layouting</li>
              <li>Create Article</li>
              <li>Optimize SEO</li>
              <li>Explore Article</li>
              <li>This Web Created With CI 3</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default ProjectHistoryFeature;
