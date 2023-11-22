import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import Card from "@/components/Card";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      {/* <Featured /> */}
      {/* <CategoryList /> */}
      <div className="flex gap-[50px]">
        <Card />
        <Menu />
      </div>
    </div>
  );
}
