'use client'
import React, { useEffect, useState } from 'react';
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Link, Button, ButtonGroup } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import { FaBeer, FaMoon, FaSun } from "react-icons/fa";

const themes = ['light', 'dark', 'purple', 'amber', 'green', 'sky', 'red', 'brown'];

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Change theme in a loop every 2 seconds
    const intervalId = setInterval(() => {
      const nextTheme = themes[themeIndex];
      handleThemeChange(nextTheme);
      setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }, 2000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [themeIndex]);

  const handleThemeChange = (selectedTheme: string) => {
    console.log(`Changing to theme: ${selectedTheme}`);
    setTheme(selectedTheme);
  };

  if (!mounted) return null;

  return (
    
    <Navbar className='fixed top-0 w-full z-10' isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">logo</NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarMenu>
        {themes.map((currentTheme, index) => (
          <NavbarMenuItem key={currentTheme}>
            <Button 
              size='sm'
              variant={theme !== currentTheme ? 'light' : 'flat'}
              onClick={() => handleThemeChange(currentTheme)}
              style={{ transition: 'all 1s ease' }} // Smooth transition effect
            >
              {index === 0 ? <FaSun /> : index === 1 ? <FaMoon /> : currentTheme}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Link, Button, ButtonGroup } from "@nextui-org/react";
// import { useTheme } from 'next-themes';
// import { FaBeer, FaMoon, FaSun } from "react-icons/fa";

// export default function NavbarComp() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, [theme]);

//   const handleThemeChange = (selectedTheme: string) => {
//     setTheme(selectedTheme);
//   };

//   if (!mounted) return null;

//   const themeButtons = [
//     { theme: 'light', icon: <FaSun /> },
//     { theme: 'dark', icon: <FaMoon /> },
//     { theme: 'purple', label: 'Purple' },
//     { theme: 'amber', label: 'Amber' },
//     { theme: 'green', label: 'Green' },
//     { theme: 'sky', label: 'Sky' },
//     { theme: 'red', label: 'Red' },
//     { theme: 'brown', label: 'Brown' }
//   ];

//   return (
//     <Navbar className='fixed top-0 w-full z-10' isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent justify="start">logo</NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//       </NavbarContent>
//       <NavbarMenu className=' flex flex-col gap-2 items-center '>
//         {themeButtons.map((button, index) => (
//           <NavbarMenuItem className='w-full max-w-2xl p-2' key={button.theme}>
//             <Button className='w-full'
//               size='sm'
//               variant={button.theme !== 'light' && button.theme !== 'dark' ? 'light' : 'flat'}
//               onClick={() => handleThemeChange(button.theme)}
//             >
//               {button.icon || button.label}
//             </Button>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
