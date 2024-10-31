import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
<footer class="fixed bottom-0 left-0 w-full bg-black text-white text-center p-4 ">
        <span class="block text-l text-gray-500 ">© 2023 <Link to="/" class="hover:underline">Italiano </Link>@All Rights Reserved.</span>
    
</footer>


    </>
  )
}

export default Footer