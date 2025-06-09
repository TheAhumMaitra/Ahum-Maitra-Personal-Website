import Header from "@/Components/header";
import Footer from "@/Components/Footer";
import Aurora from "@/Components/aurora";
import { Box } from "@mui/material";
export default function Projects() {
  return (
    <>
    <Header />
      <Box className="w-full h-full m-0 p-5 border-4 border-b-blue-500 text-black bg-white dark:bg-black dark:text-white">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <main className="w-full h-full flex flex-col gap4 justify-around items-center text-green-500 text-2xl">
          <h2 className="font-bold underline">View my great projects!</h2>
          <ul className="list-disc text-black dark:text-white m-3">
            <li><a target="_blank" href="https://github.com/TheAhumMaitra/Ahum-Maitra-Personal-Website" className="font-medium hover:text-cyan-300">The reasons of my smile- My personal open source website</a></li>


            <li><a target="_blank" href="https://github.com/TheAhumMaitra/" className="font-medium hover:text-cyan-300">View more</a></li>
          </ul>
        </main>
      </Box>
      <Footer />
    </>
  );
}
