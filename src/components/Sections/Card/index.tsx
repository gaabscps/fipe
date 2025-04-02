import { CardContent, Card } from "@mui/material";
import { Form } from "./Form";

export const CardSection = () => {
  return (
    <Card sx={{ width: "100%", padding: "16px 40px" }}>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  );
};
