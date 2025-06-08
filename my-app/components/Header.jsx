import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Header = () =>{
    return (
        <header>
           <nav>
            <Link href = "/">
            <Image src = '/logo-single.png'/>
            </Link>
            </nav>
        </header>
        
    )
}
export default Header;