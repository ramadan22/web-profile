import RolesFeature from '@/features/roles';
import ManagementRolesFeature from '@/features/roles/ManagementRoles';

const OverviewPage = async () => (
  <div className="flex flex-col gap-y-20">
    <div className="flex flex-col gap-y-5">
      <RolesFeature />
    </div>
    <div className="flex flex-col gap-y-5">
      <ManagementRolesFeature />
    </div>
  </div>
);

export default OverviewPage;
