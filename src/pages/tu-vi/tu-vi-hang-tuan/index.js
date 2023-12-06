import Posts from "@/components/Posts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const {} = props;
  return <Posts category={"tu-vi-hang-tuan"} />;
}
