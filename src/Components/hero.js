import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import First_name_magic from './first_name_magic';

export default function Hero_Section() {
    return (
        <main>
            <Box
                className="w-full h-[70vh] mt-4 border-4 flex flex-col gap-4 justify-center items-center
                           bg-white text-black border-green-700
                           dark:bg-black dark:text-white dark:border-green-500"
            >
                <h2 className="font-bold text-4xl underline">Hello World!</h2>
                <p className="text-center ">
                    Hello, everyone... I&apos;m Ahum. I&apos;m a programmer and this is my website! View my latest blogs
                    for free templates, projects, tutorials, and much more!{' '}
                    <a href="././Blogs.js" className="underline text-green-600 dark:text-green-400 font-medium">
                        Latest blogs
                    </a>
                </p>
                <First_name_magic />
            </Box>
        </main>
    );
}
