'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  const handleThemeChange = (selectedTheme) => {
    console.log(`Changing to theme: ${selectedTheme}`);
    setTheme(selectedTheme);   window.location.reload();
  };

  if (!mounted) return null
  const menuItems = [
    <div className=" grid grid-cols-3 gap-4">
    <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('light')}>
    Light
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('dark')}>
    Dark
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('purple')}>
    Purple
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('amber')}>
    Amber
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('green')}>
    Green
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('sky')}>
    Sky
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('red')}>
    Red
  </Button>
  <Button size='sm' variant='flat' radius='full' color='primary' onClick={() =>  handleThemeChange('brown')}>
    Brown
  </Button>
    </div>
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        logo
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
