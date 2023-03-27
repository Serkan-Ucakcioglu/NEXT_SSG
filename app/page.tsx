import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { getAllUsers } from "../lib/user";
import Card from "./components/Card";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data: Promise<User[]> = getAllUsers();
  const users = await data;
  return (
    <main className={styles.main}>
      <div>
        {users?.map((user) => {
          return <Card user={user} />;
        })}
      </div>
    </main>
  );
}
