export default {
  fonts: {
    main: "Comfortaa, Muli, sans-serif",
    code: "Roboto Mono, monospace",
  },
  colors: {
    main1: "#aaa",
    main2: "hsl(207,70%,94%)",
    dark1: "#01507b",
    dark2: "white",
    dark3: "hsl(227,2%,64%)",
    light1: "#ddedfd",
    light2: "white",
  },

  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
  },
  ta: {
    cen: "center",
    le: "left",
  },
  breakpoints: {
    smartphonePortrait: "only screen and (max-width: 26.25em)", // 420px
    smartphoneLandscape:
      "only screen and (min-width: 26.3125em) and (max-width: 47.9375em) ", //421px - 767px
    tabletPortrait:
      "only screen and (min-width:48em) and (max-width: 63.9375em) ", //Tablets in portrait mode, large display smartphones landscape mode (768px - 1023px)
    tabletLandscape:
      "only screen and (min-width:64em) and (max-width: 85.3125em) ", // Tablets in landscape mode, older desktop monitors (1024px 1365px)
    desktopLow:
      "only screen and (min-width:85.375em) and (max-width: 99.9375em) ", //Laptop and desktop Low (1366px 1599px)
    desktopMidLow:
      "only screen and (min-width:100em) and (max-width: 119.9375em) ", //Laptop and desktop Mid Low (1600px 1919px)
    desktopMid:
      "only screen and (min-width:120em) and (max-width: 159.9375em) ", //Laptop and desktop Mid (1920px 2559px)
  },
}
