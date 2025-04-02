import { Form } from "@/components/Form";
import {
  CardContent,
  Card,
  Container,
  Stack,
  Typography,
  Box,
} from "@mui/material";

function Home() {
  return (
    <Box
      height="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <Container maxWidth="sm">
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          <Typography textAlign="center" variant="h4">
            Tabela Fipe
          </Typography>
          <Typography textAlign="center" variant="h6">
            Consulte o valor de um veículo de forma gratuita
          </Typography>

          <Card sx={{ width: "100%", padding: "16px 40px" }}>
            <CardContent>
              <Form />
            </CardContent>
          </Card>
        </Stack>
      </Container>

      <Container
        sx={{
          backgroundColor: "#DCF5F2",
          padding: "64px 16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography textAlign="center" variant="h4">
          Tabela Fipe: Preço XXX XXX XXX
        </Typography>
        <Box
          padding="8px 16px"
          bgcolor="#00a38d"
          width="fit-content"
          borderRadius="99px"
        >
          <Typography textAlign="center" variant="h4" color="white">
            R$ 90.000
          </Typography>
        </Box>
        <Typography textAlign="center" variant="body1" color="gray">
          Este é o preço de compra do veículo.
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
