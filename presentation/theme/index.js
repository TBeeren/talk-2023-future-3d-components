import theme from "../../theme";

export const colors = {
  primary: "white",
  secondary: "#19181F",
  tertiary: "#FF667E",
  quaternary: "#CECECE",
  yellow: "#ffd000"
};

const exportTheme = theme(
  colors,
  {
    primary: "MartelSans-Bold",
    secondary: "MartelSans-SemiBold"
  },
  {
    components: {
      heading: {
        h1: {
          fontSize: "5rem",
          textTransform: "uppercase",
          color: colors.tertiary
        },
        h2: {
          fontSize: "4rem",
          textTransform: "uppercase",
          color: colors.yellow
        },
        h3: {
          fontSize: "3.5rem",
          textTransform: "uppercase",
          color: colors.tertiary
        },
        h4: {
          fontSize: "2.5rem",
          textTransform: "uppercase",
          color: colors.tertiary
        },
        h5: {
          fontSize: "2rem",
          textTransform: "uppercase",
          color: colors.tertiary
        },
        h6: {
          fontSize: "1.5rem",
          textTransform: "uppercase",
          color: colors.tertiary
        }
      },
      codePane: {
        fontSize: "2rem"
      }
    }
  }
);

export default exportTheme;
