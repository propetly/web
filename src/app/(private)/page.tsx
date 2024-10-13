import UserGreeting from '~/components/UserGreeting';

export default function DashboardPage() {
  return (
    <div className="">
      <UserGreeting />
      <div className="h-[1000px]">test 1</div>
      <div className="h-[1000px]">test 2</div>
      <div className="flex h-[1000px] flex-col justify-between">
        <span>test 3</span>
        <span>test 3</span>
      </div>
    </div>
  );
}
