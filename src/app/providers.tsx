import { FormProvider } from "@/context/FormContext";
import ThemeRegistry from "@/components/ThemeRegistry";
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormProvider>
      <ThemeRegistry>{children}</ThemeRegistry>
    </FormProvider>
  );
};
