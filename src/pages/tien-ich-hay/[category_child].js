import Posts from "@/components/Posts";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const {} = props;
  return <Posts />;
}
