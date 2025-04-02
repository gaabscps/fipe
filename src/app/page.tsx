import { Form } from "@/components/Sections/Form";
import { Result } from "@/components/Sections/Result";
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
      padding="120px 0"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <Container maxWidth="sm">
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          <Typography fontWeight="700" textAlign="center" variant="h4">
            Tabela Fipe
          </Typography>
          <Typography fontWeight="700" textAlign="center" variant="h6">
            Consulte o valor de um veículo de forma gratuita
          </Typography>

          <Card sx={{ width: "100%", padding: "16px 40px" }}>
            <CardContent>
              <Form />
            </CardContent>
          </Card>
        </Stack>
      </Container>

      <Result />
    </Box>
  );
}

export default Home;
