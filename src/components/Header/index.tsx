"use client";

import { Box, Link, Stack, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useClickOutside } from "@/hooks/useClickOutside";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);

  useClickOutside(menuRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  const routes = [
    {
      label: "Fipe",
      href: "/",
    },
    {
      label: "Exercício 1",
      href: "/exercicio1",
    },
    {
      label: "Exercício 2",
      href: "/exercicio2",
    },
    {
      label: "Exercício 3",
      href: "/exercicio3",
    },
    {
      label: "Exercício 4",
      href: "/exercicio4",
    },
  ];

  return (
    <Box
      ref={menuRef}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isMobile ? "column" : "row"}
      width={isMobile ? "fit-content" : "100%"}
      padding="16px 20px"
      position="fixed"
      top={0}
      left={isMobile ? "" : "0"}
      right={isMobile ? "0" : ""}
      zIndex={1000}
      bgcolor="#f9f6fc"
      borderRadius="0 0 16px 16px"
      boxShadow={5}
    >
      {isMobile && (
        <Box width="100%" display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      )}
      <Stack
        direction="row"
        gap={2}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection={isMobile ? "column" : "row"}
        display={isMobile && !isMenuOpen ? "none" : "flex"}
      >
        <Box position="relative" width="102px" height="14px">
          <Image src="/logo.png" alt="logo" fill />
        </Box>
        <Box
          paddingTop={isMobile ? "24px" : "0"}
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          gap={3}
          justifyContent="center"
          alignItems="center"
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              noWrap
              fontWeight="bold"
              sx={{
                padding: "8px 16px",
                textDecoration: "none",
                color: pathname === route.href ? "#4BADA9" : "inherit",
              }}
            >
              {route.label}
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};
