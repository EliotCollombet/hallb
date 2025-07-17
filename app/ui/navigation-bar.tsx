"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { LinkedButton } from "@/app/ui/linked-buttons";


interface NavigationBarProps {
  logo?: string;
  links?: Array<{ title: string; href: string }>;
}

export default function NavigationBar({
  logo = "/logo-hallb.png",
  links = [
    { title: "Nous contacter", href: "/contact" },
    { title: "Planning", href: "/planning" },
    { title: "Tarifs", href: "/tarifs" },
    { title: "S'abonner", href: "/abonnements" },
  ],
}: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/70 backdrop-blur-md text-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo Hall B"
              width={2363}
              height={2363}
              className="h-16 w-auto mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <Link
                key={index}
                href={link.href}
                className={clsx("hover:text-accent transition-colors duration-200",
                  {
                    'text-accent': pathname === link.href, 
                    'text-primary': pathname !== link.href
                  }
                )}
            >
              {link.title}
            </Link>
          ))}
          <LinkedButton id="Squash" variant="accent" className="ml-3"/>
          <LinkedButton id="Osteo" variant="accent"/>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/60 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={clsx("block py-2 hover:text-accent transition-colors duration-200", 
                  {
                    'text-accent': pathname === link.href,
                    'text-primary': pathname !== link.href
                  }
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <LinkedButton id="Squash" variant="box"/>
            <LinkedButton id="Osteo" variant="box"/>
          </div>
        </div>
      )}
    </nav>
  );
}
