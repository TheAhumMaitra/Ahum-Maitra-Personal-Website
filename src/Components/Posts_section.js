import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Post from './Post';
export default function Latest_blogs() {
    return(
        <>
            <Box className='h-[100%] p-7 m-5 border-emerald-500 rounded-2xl border-4 bg-white text-black dark:bg-black dark:text-white flex flex-col gap-5 justify-around items-center'>
              <h2 className='m-4 text-3xl  font-bold underline'>From the latest blogs!</h2>
                   <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Post />
          </Grid>
          
        </Grid>
      </Box>
        </>
    );
}
