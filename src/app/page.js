import Image from "next/image";
import Header from "@/Components/header";
import Alert_bug_info from "@/Components/alert_info";
import Hero_Section from "@/Components/hero";
import Latest_blogs from "@/Components/Posts_section";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <Alert_bug_info />
    <Header />
    <Hero_Section />
    <Latest_blogs />
    <Footer />
    </>
  );
}
