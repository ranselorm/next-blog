import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import Card from "@/components/Card";
import Menu from "@/components/Menu";
import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="mt-[20px]">
      <Featured />
      <div className="mt-10 flex gap-x-4">
        <Posts />
        <Sidebar />
      </div>
      {/* <div className="flex items-center justify-between">
        <div className="flex  gap-6 w-full">
          <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
          <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
          <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
          <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
          <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
          <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
        </div>
        <div>Search</div>
      </div>
      <main className="flex gap-[50px] mt-[50px]">
        <Card />
        <Menu />
      </main> */}
    </div>
  );
}
