import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

export function MainCard() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const variant = small ? "h5" : "h2";

  return (
    <Grid item xs={12} sm={12} md={8}>
      <Box
        sx={{ backgroundColor: "#d1c7be69", height: "100%" }}
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Box
          sx={{
            height: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d0c7b885",
          }}
        >
          <Typography variant={variant} sx={{ whiteSpace: "nowrap" }}>
            Schnell umziehen:
            <i
              style={{
                fontWeight: 700,
                fontStyle: "normal",
                fontFamily: "Merriweather !important",
              }}
            >
              {` Expressangebot`}
            </i>
          </Typography>
        </Box>
        <Box sx={{ background: "white", height: "4px" }} />
        <Box
          paddingX={2}
          paddingY={3}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <Box pl={2} sx={{ borderLeft: "4px solid #2ea3f2" }}>
            <Typography>
              <strong>Frühbucherrabatt</strong>
            </Typography>
            <br />
            <Typography>
              Ab 30 Tage -
              <strong style={{ color: "#2792da" }}> 5% Rabatt</strong>
            </Typography>
            <Typography>
              Ab 60 Tage -
              <strong style={{ color: "#2792da" }}> 10% Rabatt</strong>
            </Typography>
          </Box>

          <Box>
            <Typography>
              <strong>Unser Express Angebot ist die perfekte Lösung</strong> für
              alle, die schnell und unkompliziert ein Angebot benötigen.
            </Typography>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography>Alle Preise inklusive 19% MwSt.</Typography>
              </li>
              <li>
                <Typography>inkl. An und Abfahrtskosten in München</Typography>
              </li>
              <li>
                <Typography>inklusive Umzugsdecken und Gurte</Typography>
              </li>
              <li>
                <Typography>Versicherungsschutz bis 2.000.000€</Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}