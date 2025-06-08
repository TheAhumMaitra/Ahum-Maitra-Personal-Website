import Image from "next/image";
import Header from "@/Components/header";
import Alert_bug_info from "@/Components/alert_info";
import Hero_Section from "@/Components/hero";

export default function Home() {
  return (
    <>
    <Alert_bug_info />
    <Header />
    <Hero_Section />
    </>
  );
}
