import Header from "@/components/eco/Header";
import StepProgress from "@/components/eco/StepProgress";
import ContainerSelector from "@/components/eco/ContainerSelector";
import NavigationButtons from "@/components/eco/NavigationButtons";
import WasteRules from "@/components/eco/WasteRules";
import ContactSection from "@/components/eco/ContactSection";
import Footer from "@/components/eco/Footer";
import { ChevronDownIcon } from "@/components/eco/SvgIcons";

export default function Index() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background font-outfit">
      <div className="w-[1440px] max-w-full">
        {/* Header */}
        <Header />

        {/* Main content - Step 1 */}
        <section className="bg-background px-[130px] py-14 relative">
          <div className="flex flex-col gap-10">
            {/* Step progress */}
            <StepProgress />

            {/* Title */}
            <h1 className="font-outfit font-bold text-5xl text-foreground uppercase tracking-tight">
              1. Izvēlieties konteinera veidu un izmēru
            </h1>

            {/* Container selector */}
            <ContainerSelector />

            {/* Navigation buttons */}
            <NavigationButtons />
          </div>
        </section>

        {/* Waste rules */}
        <WasteRules />

        {/* Contact */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
