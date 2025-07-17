"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import Image from 'next/image'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { LinkedButton } from "@/app/ui/linked-buttons";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center" onClick={onClick}>
        <Image
          src="/logo-hallb.png"
          alt="Logo Hall B"
          width={2363}
          height={2363}
          className="h-16 w-auto mr-2"
        />
      </Link>
    </div>
  )
}

interface NavigationBarProps {
  logo?: string;
  links?: Array<{ title: string; href: string }>;
}

export default function NavigationBar({
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

  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/70 backdrop-blur-md text-primary shadow-md">
      <div className={clsx("container mx-auto flex justify-between items-center", 
        {
          "pt-3": isMenuOpen,
          "py-3": !isMenuOpen
        })
      }>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Logo/>
          <div className="ml-8 flex items-center space-x-6">
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
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden w-full" ref={menuRef}>
          <div className="flex px-5 items-center justify-between w-full">
            <Logo onClick={() => setIsMenuOpen(false)}/>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {isMenuOpen && (
            <div className="mt-3 py-4 bg-secondary/70 h-full px-4">
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
        </div>
      </div>
    </nav>
  );
}
