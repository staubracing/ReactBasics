import styles from "./page.module.css";
import HeaderTitle from "@/components/HeaderTitle";
import CounterHook from "@/Hooks/counterHook";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <HeaderTitle title="What's Up world??" />
      <div className={styles.grid}></div>
      <CounterHook />
    </main>
  );
}
