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
      <div className="flex flex-wrap gap-4">
        {users?.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    </main>
  );
}
