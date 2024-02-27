import Link from "next/link"

const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/*LOGO*/}
      <div className=''>
        <Link href="/" className="text-sm bg-black rounded-md p-1">
          <span>Alpha</span>
          <span>.dev</span>
        </Link>
      </div>
      {/*RESPONSIVE MENU*/}
      <div className=''>2</div>
    </div>
  );
};

export default Navbar;
