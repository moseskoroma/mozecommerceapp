"use client"
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {ShoppingBag} from "lucide-react"
import { useShoppingCart } from "use-shopping-cart";


const links = [
    {name: 'Home', href: '/'},
     {name: 'Men', href: '/Men'},
     {name: 'Women', href: '/Women'},
     {name: 'Teens', href: '/Teens'},
]

export  default function Navbar() {
        const pathname = usePathname()
        const {handleCartClick} = useShoppingCart()
    return (
        <header className=" mb-8 border-b">
            <div className=" flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href='/'>
                    <h1 className=" md:text-4xl text-2xl font-bold">
                        Moz<span className=" text-primary">Commerce</span>
                    </h1>
                </Link>
                <nav className=" hidden gap-12 lg:flex 2xl:ml-15">
                 {links.map((link, idx) =>(
                   <div key={idx}>
                       {pathname === link.href ?(
                              <Link href={link.href} className=" text-lg font-semibold text-primary">
                                {link.name}
                              </Link>
                       ):(
                             <Link href={link.href} className=" text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                                {link.name}
                             </Link>
                       )}
                   </div>
                 ))}
                </nav>
                 <div className=" flex divide-x border-r sm:border-l">
                 <Button 
                 onClick={() => handleCartClick()}
                 variant={"outline"}
                 className=" flex flex-col gap-y-1.5 h-12 sm:h-12 w-12 sm:w-20 md:h-24 md:w-24 rounded-none">
                    <ShoppingBag/>
                    <span className=" hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                 </Button>
                 </div>
            </div>
        </header>
    )
}