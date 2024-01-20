import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className=' flex justify-between shadow-2xl w-full p-6'>
        <img
          src='logo.png'
          className='w-56 h-12 md:w-56 md:h-12'
          alt='Description'
        />

        <ul className='hidden md:flex space-x-8 flex-row'>
          <li className='flex items-center'>
            <Link to='/'>Home</Link>
          </li>
          <li className='flex items-center'>
            <Link to='/upload'>Upload File</Link>
          </li>
          <li className='flex items-center'>
            <Link to='/files'>Files</Link>
          </li>

          <li className='flex items-center'>
            <Link to='/addtext'>Upload Text</Link>
          </li>
          <li className='flex items-center'>
            <Link to='/texts'>Texts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
