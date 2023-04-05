import { Inter } from "next/font/google";
import Layout from "@/component/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl font-bold">Hello world!</h1>
      </Layout>
    </div>
  );
}
