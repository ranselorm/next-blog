import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/" className="">
        Home
      </Link>
    </div>
  );
}
