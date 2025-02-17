import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
   const [openNav, setOpenNav] = useState(false);

   useEffect(() => {
      window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
   }, []);

   const navList = (
      <div className=''>
         <ul className='my-auto flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-xl  min-h-[60px]'>
            <Typography as='li' variant='small' color='blue-gray' className='p-1 font-semibold'>
               <Link to={"/"} href='/' className='flex items-center'>
                  Home
               </Link>
            </Typography>

            <Typography as='li' variant='small' color='blue-gray' className='p-1 font-semibold'>
               <Link to={"/about"} href='/about'>
                  About
               </Link>
            </Typography>

            <Typography as='li' variant='small' color='blue-gray' className='p-1 font-semibold'>
               <Link to={"/projects"} href='/projects'>
                  Projects
               </Link>
            </Typography>

            <Typography as='li' variant='small' color='blue-gray' className='p-1 font-semibold'>
               <Link to={"/contacts"} href='/contacts'>
                  Contacts
               </Link>
            </Typography>
         </ul>
      </div>
   );

   return (
      <Navbar className=' w-screen mx-auto py-1 px-4 lg:px-8 lg:py-4 bg-lime-500 rounded-md shadow-2xl'>
         <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
            <Typography
               as='a'
               href=''
               variant='small'
               className='mr-4 cursor-pointer py-1.5 font-semibold'
            >
               <Link to={"/"} href='/' className='flex items-center text-3xl'>
                  <span>TextUtils</span>
               </Link>
            </Typography>
            <div className='hidden lg:block'>{navList}</div>
            <Button variant='gradient' size='sm' className='hidden lg:inline-block text-xl rounded-md bg-green-950'>
               <span>LOL Login</span>
            </Button>
            <IconButton
               variant='text'
               className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
               ripple={false}
               onClick={() => setOpenNav(!openNav)}
            >
               {openNav ? (
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     className='h-6 w-6'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                     strokeWidth={2}
                  >
                     <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
               ) : (
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-6 w-6'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth={2}
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                     />
                  </svg>
               )}
            </IconButton>
         </div>
         <MobileNav open={openNav}>
            <div className='container mx-auto'>
               {navList}
               <Button variant='gradient' size='sm' fullWidth className='mb-2'>
                  <span>LoL</span>
               </Button>
            </div>
         </MobileNav>
      </Navbar>
   );
}
