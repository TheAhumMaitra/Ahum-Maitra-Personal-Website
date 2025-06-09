import { Box, Button, Grid, Typography } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

export default function Footer() {
    return(
        <>
        <Box className='w-full h-full flex flex-col justify-around items-center font-bold p-5 border-4 border-blue-700 rounded-2xl bg-white text-black dark:bg-black dark:text-white'>
            <div id="main_logo" className='flex gap-3 items-center'>
          <CodeIcon className='text-green-600 dark:text-green-400' />
          <h2 className='font-extrabold'>Ahum Maitra</h2>
        </div>
        <p>&copy;Copyright by Ahum Maitra. All rights reserved by Ahum Maitra</p>
        </Box>
        </>
    );
}
