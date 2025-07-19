import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
import { getOrdersData } from "@/sanity/queries";

async function Header() {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getOrdersData(userId);
    console.log(orders)
  }
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <Container className="flex justify-between items-center py-6">
        <div className="flex gap-2 md:gap-0 items-center">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto flex items-center gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="relative group">
                <Logs className="group-hover:text-shop_light_green hoverEffect text-lightColor font-semibold group-hover:cursor-pointer" />
                <span className="absolute w-3.5 h-3.5 rounded-full bg-shop_dark_green -top-1 -right-1 text-white text-xs flex justify-center items-center">
                  {orders ? orders?.length : 0}
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
