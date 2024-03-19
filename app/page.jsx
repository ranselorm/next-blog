import Featured from "../components/Featured";
// import CategoryList from "@/components/CategoryList";
// import Card from "@/components/Card";
// import Menu from "@/components/Menu";
// import Posts from "@/components/Posts";
import Sidebar from "../components/Sidebar";
// import Politics from "@/components/posts/Politics";
import News from "../components/News";

export default function Home() {
  return (
    <div className="mt-[20px]">
      <Featured />
      <div className="mt-10 flex gap-x-4">
        <News />
        <Sidebar />
      </div>
    </div>
  );
}
