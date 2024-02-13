// app/theme.tsx
import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";

const theme = extendTheme({
  fonts: {
    heading: fonts.roboto.variable,
    body: fonts.lobster.variable,
  },
  colors: {
    brand: {
      50: "#f0e7db",
      100: "#ecccb2",
      200: "#e0b088",
      300: "#d4955f",
      400: "#c97f36",
      500: "#b46916",
      600: "#8a5310",
      700: "#61370b",
      800: "#3b1e06",
      900: "#1e0a00",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.600" : "brand.500",
          color: "white",
        }),
      },
    },
  },
});

export default theme;
