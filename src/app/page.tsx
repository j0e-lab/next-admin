import { NextPage } from "next";
import dynamic from "next/dynamic";


const AdminApp = dynamic(() => import("@/components/AdminApp"), { ssr: false });

// ここがコンポーネントのトップ
const Home: NextPage = () => <AdminApp />;

export default Home;
