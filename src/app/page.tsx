import { CardSection } from "@/components/Sections/Card";
import { Result } from "@/components/Sections/Result";
import { Title } from "@/components/Sections/Title";
import { Container, Stack, Box } from "@mui/material";

export default async function Home() {
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
          <Title />
          <CardSection />
        </Stack>
      </Container>

      <Result />
    </Box>
  );
}
