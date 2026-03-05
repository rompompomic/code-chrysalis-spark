import Header from "@/components/eco/Header";
import StepProgress from "@/components/eco/StepProgress";
import ContainerSelector from "@/components/eco/ContainerSelector";
import NavigationButtons from "@/components/eco/NavigationButtons";
import WasteRules from "@/components/eco/WasteRules";
import ContactSection from "@/components/eco/ContactSection";
import Footer from "@/components/eco/Footer";

export default function Index() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background font-outfit">
      <div className="w-full max-w-[1440px]">
        <Header />

        <section className="bg-background px-5 lg:px-[130px] py-8 lg:py-14 relative">
          <div className="flex flex-col gap-6 lg:gap-10">
            <StepProgress />

            <h1 className="font-outfit font-bold text-2xl lg:text-5xl text-foreground uppercase tracking-tight leading-7 lg:leading-normal">
              1. Izvēlieties konteinera veidu un izmēru
            </h1>

            <ContainerSelector />
            <NavigationButtons />
          </div>
        </section>

        <WasteRules />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
