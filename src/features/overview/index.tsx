import Label from '@/components/Label';
import Icon from '@/components/icon';
import Card from '@/ui/card';

const OverviewFeature = () => (
  <div className="flex flex-col gap-y-5">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl">Overview</h1>
        <p className="text-sm text-black/50">&nbsp;</p>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-x-5 items-center">
      <Card className="flex gap-x-4">
        <div className="bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center">
          <Icon type="Users" className="flex w-14 text-white" />
        </div>
        <div className="flex flex-col">
          <Label className="text-xl">Users</Label>
          <Label className="text-4xl">200</Label>
        </div>
      </Card>
      <Card className="flex gap-x-4">
        <div className="bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center">
          <Icon type="School" className="flex w-14 text-white" />
        </div>
        <div className="flex flex-col">
          <Label className="text-xl">Schools</Label>
          <Label className="text-4xl">100</Label>
        </div>
      </Card>
      <Card className="flex gap-x-4">
        <div className="bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center">
          <Icon type="Teacher" className="flex w-14 text-white" />
        </div>
        <div className="flex flex-col">
          <Label className="text-xl">Teachers</Label>
          <Label className="text-4xl">100</Label>
        </div>
      </Card>
      <Card className="flex gap-x-4">
        <div className="bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center">
          <Icon type="Student" className="flex w-14 text-white" />
        </div>
        <div className="flex flex-col">
          <Label className="text-xl">Students</Label>
          <Label className="text-4xl">100</Label>
        </div>
      </Card>
    </div>
  </div>
);

export default OverviewFeature;
