import { FormProvider } from "@/context/FormContext";
import { ResultProvider } from "@/context/ResultContext";
import ThemeRegistry from "@/services/ThemeRegistry";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormProvider>
      <ResultProvider>
        <ThemeRegistry>{children}</ThemeRegistry>
      </ResultProvider>
    </FormProvider>
  );
};
