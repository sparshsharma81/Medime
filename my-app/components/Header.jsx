import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from './ui/button';

const Header = () =>{
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
               <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
            src="/logo-single.png"
            alt="Medimeet Logo"
            width={200}
            height={60}
            className="h-10 w-auto object-contain"
          />
            </Link>
            <div className='flex items-center space-x-2'>
              <SignedOut>
              <SignInButton />
              <Button variant="secondary">Sign In</Button>
              <SignUpButton />
            </SignedOut>
            <SignedIn>
  <UserButton 
    appearance={{
      elements: {
        avatarBox: "w-10 h-10",
        userButtonPopoverCard: "shadow-xl", // now this will be more good ...
        userPreviewMainIdentifier: "font-semibold",
      },
    }}
  />
</SignedIn>


            {/* 
            these are amazing inbuild things which are provided by clerk
            ..we do not need to make it..it is amazing predefined components.. and is provided on the 
            clerk website..basically when we create all the proper authentication..
            there are buttons like sign in , sign out are shown... 
            and when we sign in ..then there is option of manage account, sign out ,, and all the good optinos ..we need not to manage from ourself 

            
            */}
            </div>
            </nav>
        </header>
        
    )
}
export default Header;