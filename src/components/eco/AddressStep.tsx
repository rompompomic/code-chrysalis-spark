import { useState } from "react";
import { ChevronDownIcon } from "./SvgIcons";
import mapImage from "@/assets/map.png";

interface PricingZone {
  label: string;
  priceWithVat: string;
  priceWithoutVat: string;
  highlighted?: boolean;
}

const pricingZones: PricingZone[] = [
  { label: "A", priceWithVat: "193,60 €", priceWithoutVat: "160 € Bez PVN" },
  { label: "B", priceWithVat: "193,60 €", priceWithoutVat: "160 € Bez PVN" },
  { label: "C", priceWithVat: "266,20 €", priceWithoutVat: "220 € Bez PVN", highlighted: true },
];

function ZoneRow({ zone }: { zone: PricingZone }) {
  return (
    <div className={`self-stretch h-14 pr-6 rounded-full outline outline-1 outline-secondary inline-flex justify-between items-center ${zone.highlighted ? "bg-accent" : "bg-background"}`}>
      <div className="flex items-center gap-3">
        <div className="size-14 px-4 py-3 bg-secondary rounded-full flex justify-center items-center">
          <span className="font-outfit font-semibold text-base text-foreground">{zone.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-outfit font-semibold text-base text-foreground">{zone.priceWithVat}</span>
          <span className="font-outfit font-normal text-base text-muted leading-6">{zone.priceWithoutVat}</span>
        </div>
      </div>
      <ChevronDownIcon className="size-6" />
    </div>
  );
}

export default function AddressStep() {
  const [address, setAddress] = useState("Jaunzemju iela 120, Mārupe");

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left side - address + pricing zones */}
        <div className="w-full lg:w-96 flex flex-col gap-8">
          {/* Address input */}
          <div className="flex flex-col gap-2">
            <div className="px-6">
              <span className="font-outfit font-semibold text-base text-foreground">
                Izvēlieties konteinera piegādes adresi
              </span>
            </div>
            <div className="px-6 py-4 rounded-[200px] outline outline-1 outline-foreground flex items-center gap-2.5">
              <div className="flex-1 flex items-center">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1 font-outfit text-base text-foreground leading-4 bg-transparent outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setAddress("")} className="text-foreground">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.25 4.04688C18.4366 4.04688 18.6161 4.12099 18.748 4.25293C18.8798 4.38476 18.954 4.56359 18.9541 4.75C18.9541 4.93659 18.88 5.11611 18.748 5.24805L12.5273 11.4668L12.4941 11.5L12.5273 11.5332L18.748 17.7529C18.8133 17.8182 18.865 17.8961 18.9004 17.9814C18.9356 18.0666 18.954 18.1578 18.9541 18.25C18.9541 18.3424 18.9357 18.4342 18.9004 18.5195C18.865 18.6049 18.8134 18.6827 18.748 18.748C18.6827 18.8134 18.6049 18.865 18.5195 18.9004C18.4342 18.9357 18.3424 18.9541 18.25 18.9541C18.1578 18.954 18.0666 18.9356 17.9814 18.9004C17.8961 18.865 17.8182 18.8133 17.7529 18.748L11.5332 12.5273L11.5 12.4941L11.4668 12.5273L5.24805 18.748C5.11611 18.88 4.93659 18.9541 4.75 18.9541C4.56359 18.954 4.38476 18.8798 4.25293 18.748C4.12099 18.6161 4.04688 18.4366 4.04688 18.25C4.04699 18.0636 4.12109 17.8848 4.25293 17.7529L10.4736 11.5332L10.5068 11.5L10.4736 11.4668L4.25293 5.24805C4.12099 5.11611 4.04688 4.93659 4.04688 4.75C4.04699 4.56356 4.12109 4.38477 4.25293 4.25293C4.38477 4.12109 4.56356 4.04699 4.75 4.04688C4.93659 4.04688 5.11611 4.12099 5.24805 4.25293L11.4668 10.4736L11.5 10.5068L11.5332 10.4736L17.7529 4.25293C17.8848 4.12109 18.0636 4.04699 18.25 4.04688Z" fill="currentColor" stroke="currentColor" strokeWidth="0.09375"/>
                  </svg>
                </button>
                <ChevronDownIcon className="size-6" />
              </div>
            </div>
          </div>

          {/* Pricing zones */}
          <div className="flex flex-col gap-3">
            {pricingZones.map((zone) => (
              <ZoneRow key={zone.label} zone={zone} />
            ))}
          </div>
        </div>

        {/* Right side - map */}
        <div className="flex-1 h-[460px] relative rounded-3xl overflow-hidden">
          {/* Background map image */}
          <img
            src={mapImage}
            alt="Latvijas karte ar piegādes zonām"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* SVG zone overlays */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 507 453" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Zone A - green */}
              <path d="M120.68 112.92L391.68 112.92C391.68 112.92 350 350 120.68 350Z" fill="hsl(var(--eco-lime))" fillOpacity="0.2" />
              {/* Zone C - orange */}
              <path d="M0 177.86L413 177.86V453H0Z" fill="hsl(var(--eco-orange))" fillOpacity="0.2" />
              {/* Zone B - dark green */}
              <path d="M229.63 0L507 0V322H229.63Z" fill="hsl(var(--primary))" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Zone labels */}
          <div className="absolute left-[20%] top-[65%] text-primary-foreground font-outfit font-black text-2xl">A</div>
          <div className="absolute left-[65%] top-[27%] text-primary-foreground font-outfit font-black text-2xl">B</div>
          <div className="absolute left-[40%] top-[43%] text-primary-foreground font-outfit font-black text-2xl">C</div>

          {/* Map pin */}
          <div className="absolute left-[55%] top-[38%]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 3C19.6255 3.00496 15.4315 4.74494 12.3382 7.83822C9.24494 10.9315 7.50496 15.1255 7.5 19.5C7.5 33.6188 22.5 44.2819 23.1394 44.7281C23.3916 44.9048 23.6921 44.9996 24 44.9996C24.3079 44.9996 24.6084 44.9048 24.8606 44.7281C25.5 44.2819 40.5 33.6188 40.5 19.5C40.495 15.1255 38.7551 10.9315 35.6618 7.83822C32.5685 4.74494 28.3745 3.00496 24 3ZM24 13.5C25.1867 13.5 26.3467 13.8519 27.3334 14.5112C28.3201 15.1705 29.0892 16.1075 29.5433 17.2039C29.9974 18.3003 30.1162 19.5067 29.8847 20.6705C29.6532 21.8344 29.0818 22.9035 28.2426 23.7426C27.4035 24.5818 26.3344 25.1532 25.1705 25.3847C24.0067 25.6162 22.8003 25.4974 21.7039 25.0433C20.6075 24.5892 19.6705 23.8201 19.0112 22.8334C18.3519 21.8467 18 20.6867 18 19.5C18 17.9087 18.6321 16.3826 19.7574 15.2574C20.8826 14.1321 22.4087 13.5 24 13.5Z" fill="#FF5F1E"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="text-right font-outfit font-normal text-sm text-foreground">
        * Papildus maksa 2,50 EUR/km aprēķinot no C zonas robežas
      </p>
    </div>
  );
}
