tailwind.config = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        "tc-gray-400": "#7D7D7D",
        "tc-gray-500": "#404040",
        "tc-gray-100": "#FFFFFF",
        "tc-gray-900": "#101010",
        "tc-green-300": "#B0F122",
        "tc-green-400": "#95cc1d",
        "tc-green-500": "#2E790B",
        "tc-green-600": "#27AE09",
      },
    },
    fontFamily: {
      "dm-sans-regular": ["dm-sans-regular"],
      "dm-sans-semibold": ["dm-sans-semibold"],
      "dm-sans-bold": ["dm-sans-bold"],
    },
  },
};
