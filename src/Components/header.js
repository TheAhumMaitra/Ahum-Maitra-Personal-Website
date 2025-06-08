import CodeIcon from '@mui/icons-material/Code';
import { ModeToggle } from './toggle';

export default function Header() {
  return (
    <header>
      <nav className='w-full h-[9vh] p-2 flex justify-around items-center
                     bg-white text-black border-b-4 border-emerald-500
                     dark:bg-black dark:text-white'>
        <div id="main_logo" className='flex gap-3'>
          <CodeIcon className='text-green-600 dark:text-green-400' />
          <h2 className='font-extrabold'>Ahum Maitra</h2>
        </div>
        <ul className='list-none flex gap-5'>
          <li><a href="" className='text-base text-green-700 dark:text-green-400 font-bold hover:bg-emerald-500 hover:p-3 hover:m-0.5 hover:rounded-3xl hover:text-white dark:hover:text-black'>Home</a></li>
          <li><a href="" className='text-base text-green-700 dark:text-green-400 font-bold hover:bg-emerald-500 hover:p-3 hover:m-0.5 hover:rounded-3xl hover:text-white dark:hover:text-black'>Portfolio</a></li>
          <li><a href="" className='text-base text-green-700 dark:text-green-400 font-bold hover:bg-emerald-500 hover:p-3 hover:m-0.5 hover:rounded-3xl hover:text-white dark:hover:text-black'>About Me</a></li>
          <li><a href="" className='text-base text-green-700 dark:text-green-400 font-bold hover:bg-emerald-500 hover:p-3 hover:m-0.5 hover:rounded-3xl hover:text-white dark:hover:text-black'>Contact Me</a></li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}
