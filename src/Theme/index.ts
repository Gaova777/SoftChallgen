import { createTheme } from "@mui/material";




export const generateTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#757575",
      },
    text: {
      primary: "#979797",
      secondary: "#D2D2D2", 
      disabled: "#C9C9C9",
    },
    background: {
      default: "#E8E8E8",
    },
    info:{
      main:"#C0C0C0"
    },
    error:{
      main:"#FF0000"
    }

  },
    typography: {
      fontFamily: "'Lato', sans-serif",
      button: {
        textTransform: "initial",
        fontWeight: 700,
      },
      h1: {
        fontSize: "2.5em",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "1.5em",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h3: {
        lineHeight: 1.2,
      },
      h4: {
        lineHeight: 1.2,
      },
      h5: {
        lineHeight: 1.2,
      },
      h6: {
        lineHeight: 1.2,
      }},
      breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
    // debouncing: {
    //   delay: 500,
    // },
    components: {
      MuiCssBaseline: {
        styleOverrides() {
          return {
            "*": {
              boxSizing: "border-box",
            },
          };
        },
      },
      MuiAvatar: {
        variants: [
          {
            props: {
              variant: "rounded",
            },
            style: {
              borderRadius: 8,
            },
          },
        ],
      },
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
      MuiTextField: {
        variants: [
          {
            props: {
              variant: "filled",
            },
            style: {
              "& .MuiInputBase-root": {
                borderRadius: 8,
                backdropFilter: "blur(8px) saturate(1.5)",
                "&::after, &::before": {
                  content: "none",
                },
              },
            },
          },
        ],
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
      MuiDialog: {
        defaultProps: {
          PaperProps: {
            sx: {
              borderRadius: 4,
            },
          },
          slotProps: {
            backdrop: {
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(4px)",
              },
            },
          },
        },
      },
      MuiDialogActions: {
        defaultProps: {
          sx: {
            padding: 2,
          },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          sx: {
            padding: 1,
            borderRadius: 1,
          },
        },
      },
      MuiListItemText: {
        defaultProps: {
          primaryTypographyProps: {
            variant: "body1",
            fontWeight: 500,
          },
          secondaryTypographyProps: {
            variant: "body2",
            color: "text.secondary",
          },
          sx: {
            margin: 0,
          },
        },
      },
      MuiListItemIcon: {
        defaultProps: {
          sx: {
            minWidth: 32,
            marginRight: 1,
          },
        },
      },
      MuiTableCell: {
        defaultProps: {
          sx: {
            borderBottom: "none",
          },
        },
      },
    },
  });
