"use client";

import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <Typography variant="h6" fontWeight="bold">
          Mobiauto
        </Typography>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            noWrap
            fontWeight="bold"
            sx={{
              textDecoration: "none",
              color: pathname === route.href ? "#1976d2" : "inherit",
            }}
          >
            {route.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
