import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    interface: {
      100: {
        value: {
          _light: "{colors.light.interface.100}",
          _dark: "{colors.dark.interface.100}",
          DEFAULT: "{colors.light.interface.100}",
        },
      },
      200: {
        value: {
          _light: "{colors.light.interface.200}",
          _dark: "{colors.dark.interface.200}",
          DEFAULT: "{colors.light.interface.200}",
        },
      },
      300: {
        value: {
          _light: "{colors.light.interface.300}",
          _dark: "{colors.dark.interface.300}",
          DEFAULT: "{colors.light.interface.300}",
        },
      },
      400: {
        value: {
          _light: "{colors.light.interface.400}",
          _dark: "{colors.dark.interface.400}",
          DEFAULT: "{colors.light.interface.400}",
        },
      },
      500: {
        value: {
          _light: "{colors.light.interface.500}",
          _dark: "{colors.dark.interface.500}",
          DEFAULT: "{colors.light.interface.500}",
        },
      },
      600: {
        value: {
          _light: "{colors.light.interface.600}",
          _dark: "{colors.dark.interface.600}",
          DEFAULT: "{colors.light.interface.600}",
        },
      },
      700: {
        value: {
          _light: "{colors.light.interface.700}",
          _dark: "{colors.dark.interface.700}",
          DEFAULT: "{colors.light.interface.700}",
        },
      },
      DEFAULT: {
        value: {
          _light: "{colors.light.interface.500}",
          _dark: "{colors.dark.interface.500}",
          DEFAULT: "{colors.light.interface.500}",
        },
      },
    },
    primary: {
      100: {
        value: {
          _light: "{colors.light.primary.100}",
          _dark: "{colors.dark.primary.100}",
          DEFAULT: "{colors.light.primary.100}",
        },
      },
      200: {
        value: {
          _light: "{colors.light.primary.200}",
          _dark: "{colors.dark.primary.200}",
          DEFAULT: "{colors.light.primary.200}",
        },
      },
      300: {
        value: {
          _light: "{colors.light.primary.300}",
          _dark: "{colors.dark.primary.300}",
          DEFAULT: "{colors.light.primary.300}",
        },
      },
      400: {
        value: {
          _light: "{colors.light.primary.400}",
          _dark: "{colors.dark.primary.400}",
          DEFAULT: "{colors.light.primary.400}",
        },
      },
      500: {
        value: {
          _light: "{colors.light.primary.500}",
          _dark: "{colors.dark.primary.500}",
          DEFAULT: "{colors.light.primary.500}",
        },
      },
      600: {
        value: {
          _light: "{colors.light.primary.600}",
          _dark: "{colors.dark.primary.600}",
          DEFAULT: "{colors.light.primary.600}",
        },
      },
      700: {
        value: {
          _light: "{colors.light.primary.700}",
          _dark: "{colors.dark.primary.700}",
          DEFAULT: "{colors.light.primary.700}",
        },
      },
      DEFAULT: {
        value: {
          _light: "{colors.light.primary.500}",
          _dark: "{colors.dark.primary.500}",
          DEFAULT: "{colors.light.primary.500}",
        },
      },
    },
    secondary: {
      100: {
        value: {
          _light: "{colors.light.secondary.100}",
          _dark: "{colors.dark.secondary.100}",
          DEFAULT: "{colors.light.secondary.100}",
        },
      },
      200: {
        value: {
          _light: "{colors.light.secondary.200}",
          _dark: "{colors.dark.secondary.200}",
          DEFAULT: "{colors.light.secondary.200}",
        },
      },
      300: {
        value: {
          _light: "{colors.light.secondary.300}",
          _dark: "{colors.dark.secondary.300}",
          DEFAULT: "{colors.light.secondary.300}",
        },
      },
      400: {
        value: {
          _light: "{colors.light.secondary.400}",
          _dark: "{colors.dark.secondary.400}",
          DEFAULT: "{colors.light.secondary.400}",
        },
      },
      500: {
        value: {
          _light: "{colors.light.secondary.500}",
          _dark: "{colors.dark.secondary.500}",
          DEFAULT: "{colors.light.secondary.500}",
        },
      },
      600: {
        value: {
          _light: "{colors.light.secondary.600}",
          _dark: "{colors.dark.secondary.600}",
          DEFAULT: "{colors.light.secondary.600}",
        },
      },
      700: {
        value: {
          _light: "{colors.light.secondary.700}",
          _dark: "{colors.dark.secondary.700}",
          DEFAULT: "{colors.light.secondary.700}",
        },
      },
      DEFAULT: {
        value: {
          _light: "{colors.light.secondary.500}",
          _dark: "{colors.dark.secondary.500}",
          DEFAULT: "{colors.light.secondary.500}",
        },
      },
    },
  },
});
// Primary-100: #FDEDED (Soft Blush Pink – very subtle for light backgrounds or highlights)
// Primary-200: #F9DADA (Warm Rose – for hover states or secondary highlights)
// Primary-300: #F3B0B0 (Muted Coral – gentle accent color)
// Primary-400: #EB8A8A (Warm Salmon – for buttons or interactive elements)
// Primary-500: #E35858 (Vibrant Crimson – primary action buttons, key highlights)
// Primary-600: #C73F3F (Rich Ruby Red – for hover states or focused elements)
// Primary-700: #9E2F2F (Deep Garnet – for headings or bold accents)

// Neutral-100: #F7F6F2 (Light Warm Beige – soft and light for backgrounds)
// Neutral-200: #E6E3DB (Warm Ivory – secondary backgrounds or subtle cards)
// Neutral-300: #D1C9B8 (Light Taupe – ideal for secondary borders and inputs)
// Neutral-400: #B8B09D (Muted Olive Gray – subtle contrast for borders or accents)
// Neutral-500: #9C8F7D (Warm Stone – perfect for text and prominent borders)
// Neutral-600: #7A6E5E (Earthy Taupe – secondary text or focused elements)
// Neutral-700: #5A4D42 (Deep Brown Taupe – for headings or strong accents)

export const tokens = defineTokens({
  colors: {
    light: {
      interface: {
        100: {
          value: "#F7F6F2",
        },
        200: {
          value: "#E6E3DB",
        },
        300: {
          value: "#D1C9B8",
        },
        400: {
          value: "#B8B09D",
        },
        500: {
          value: "#9C8F7D",
        },
        600: {
          value: "#7A6E5E",
        },
        700: {
          value: "#5A4D42",
        },
      },
      primary: {
        100: {
          value: "#FDEDED",
        },
        200: {
          value: "#F9DADA",
        },
        300: {
          value: "#F3B0B0",
        },
        400: {
          value: "#EB8A8A",
        },
        500: {
          value: "#C1536F",
        },
        600: {
          value: "#C73F3F",
        },
        700: {
          value: "#9E2F2F",
        },
      },
      secondary: {
        100: {
          value: "#FF5722",
        },
        200: {
          value: "#F4511E",
        },
        300: {
          value: "#E64A19",
        },
        400: {
          value: "#D84315",
        },
        500: {
          value: "#BF360C",
        },
        600: {
          value: "#FF7043",
        },
        700: {
          value: "#FFAB91",
        },
      },
    },
    dark: {
      interface: {
        100: {
          value: "#121212",
        },
        200: {
          value: "#1E1E1E",
        },
        300: {
          value: "#333333",
        },
        400: {
          value: "#424242",
        },
        500: {
          value: "#616161",
        },
        600: {
          value: "#757575",
        },
        700: {
          value: "#BDBDBD",
        },
      },
      primary: {
        100: {
          value: "#1A237E",
        },
        200: {
          value: "#283593",
        },
        300: {
          value: "#303F9F",
        },
        400: {
          value: "#3949AB",
        },
        500: {
          value: "#3F51B5",
        },
        600: {
          value: "#5C6BC0",
        },
        700: {
          value: "#7986CB",
        },
      },
      secondary: {
        100: {
          value: "#FF5722",
        },
        200: {
          value: "#F4511E",
        },
        300: {
          value: "#E64A19",
        },
        400: {
          value: "#D84315",
        },
        500: {
          value: "#BF360C",
        },
        600: {
          value: "#FF7043",
        },
        700: {
          value: "#FFAB91",
        },
      },
    },
  },
  sizes: {
    xs: { value: "12px" },
    sm: { value: "16px" },
    md: { value: "24px" },
    lg: { value: "32px" },
    xl: { value: "48px" },
  },
  spacing: {
    xs: { value: "4px" },
    sm: { value: "8px" },
    md: { value: "16px" },
    lg: { value: "24px" },
    xl: { value: "32px" },
  },
});
