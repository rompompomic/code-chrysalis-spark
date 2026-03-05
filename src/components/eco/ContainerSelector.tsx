import { useState } from "react";
import container5m3 from "@/assets/containers/container-5m3.png";
import container8m3 from "@/assets/containers/container-8m3.png";
import container10m3 from "@/assets/containers/container-10m3.png";
import container16m3 from "@/assets/containers/container-16m3.png";
import container22m3 from "@/assets/containers/container-22m3.png";
import container35m3 from "@/assets/containers/container-35m3.png";
import {
  InfoIcon,
  ChevronDownIcon,
  SealQuestionIcon,
  WallIcon,
  CouchIcon,
  ArrowLeftCircle,
  ArrowRightCircle } from
"./SvgIcons";

interface ContainerSize {
  volume: string;
  superscript?: boolean;
  weight: string;
  price: string;
  garums: string;
  platums: string;
  augstums: string;
  image: string;
}

const containerSizes: ContainerSize[] = [
{ volume: "5 m", superscript: true, weight: "līdz 3,5 t", price: "260.15 €", garums: "3.08 m", platums: "1.90 m", augstums: "1.25 m", image: container5m3 },
{ volume: "8 m", superscript: true, weight: "līdz 7,5 t", price: "260.15 €", garums: "3.98 m", platums: "1.85 m", augstums: "1.49 m", image: container8m3 },
{ volume: "10 m", superscript: true, weight: "līdz 8 t", price: "260.15 €", garums: "3.98 m", platums: "1.85 m", augstums: "1.83 m", image: container10m3 },
{ volume: "16 m", superscript: true, weight: "līdz 12 t", price: "260.15 €", garums: "6.32 m", platums: "2.55 m", augstums: "1.53 m", image: container16m3 },
{ volume: "22 m", superscript: true, weight: "līdz 12 t", price: "260.15 €", garums: "6.22 m", platums: "2.54 m", augstums: "1.75 m", image: container22m3 },
{ volume: "35 m", superscript: true, weight: "līdz 12 t", price: "260.15 €", garums: "6.32 m", platums: "2.55 m", augstums: "2.74 m", image: container35m3 }];


function ContainerSizeCard({
  size,
  isFirst,
  isLast,
  isSelected,
  onClick,
  roundedClass






}: {size: ContainerSize;isFirst: boolean;isLast: boolean;isSelected: boolean;onClick: () => void;roundedClass?: string;}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const defaultRoundedClass = isFirst ? "rounded-tl-3xl lg:rounded-bl-3xl" : isLast ? "lg:rounded-tr-3xl rounded-br-3xl" : "";

  return (
    <div
      className={`flex-1 h-24 outline outline-1 outline-eco-lime cursor-pointer transition-colors ${roundedClass || defaultRoundedClass} ${
      isSelected ? "bg-accent" : "bg-background hover:bg-accent/50"}`
      }
      onClick={onClick}>
      
      <div className="flex flex-col justify-between h-full px-4 lg:px-5 py-2.5">
        <div className="flex items-center justify-between w-full">
          <span className="font-outfit font-black text-lg lg:text-xl text-primary">
            {size.volume}
            {size.superscript && <sup className="text-[13px]">3</sup>}
          </span>
          <div className="relative flex items-center gap-1">
            <span className="font-outfit text-sm lg:text-base text-muted">{size.weight}</span>
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="relative">
              
              <InfoIcon />
              {showTooltip &&
              <div className="absolute top-full right-0 mt-1 z-50 bg-background rounded-xl shadow-[0px_1px_4px_rgba(29,56,43,0.25)] p-3 flex flex-col gap-2 text-xs text-primary font-outfit w-[158px]">
                  <div className="flex justify-between">
                    <span>Garums</span>
                    <span className="font-semibold">{size.garums}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platums</span>
                    <span className="font-semibold">{size.platums}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Augstums</span>
                    <span className="font-semibold">{size.augstums}</span>
                  </div>
                </div>
              }
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between h-6 outline outline-1 outline-eco-peach rounded-full pl-3 pr-1">
          <span className="font-outfit text-xs text-eco-orange">cena no</span>
          <span className="bg-eco-orange text-primary-foreground font-outfit text-xs px-1.5 py-0.5 rounded-full">
            {size.price}
          </span>
        </div>
      </div>
    </div>);

}

// Helper to get mobile rounded corners based on position in 2-col grid
function getMobileRoundedClass(index: number, total: number): string {
  const isTopLeft = index === 0;
  const isTopRight = index === 1;
  const isBottomLeft = index === total - 2;
  const isBottomRight = index === total - 1;
  
  const classes: string[] = [];
  if (isTopLeft) classes.push("rounded-tl-3xl");
  if (isTopRight) classes.push("rounded-tr-3xl");
  if (isBottomLeft) classes.push("rounded-bl-3xl");
  if (isBottomRight) classes.push("rounded-br-3xl");
  return classes.join(" ");
}

export default function ContainerSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = containerSizes[selectedIndex];

  const handlePrev = () => setSelectedIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setSelectedIndex((i) => Math.min(containerSizes.length - 1, i + 1));

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* Container type section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h2 className="font-outfit font-bold text-2xl text-foreground leading-[38.4px]">
            Atkritumu konteinera veids
          </h2>
          <SealQuestionIcon />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-secondary text-foreground font-outfit font-semibold text-base px-4 py-3 rounded-full flex items-center gap-2">
            <WallIcon />
            Būvgružu konteinera noma
          </button>
          <button className="bg-accent text-foreground font-outfit font-semibold text-base px-4 py-3 rounded-full flex items-center gap-2.5">
            <CouchIcon />
            Lielgabarīta atkritumu konteinera noma
          </button>
        </div>
      </div>

      {/* Container sizes + image */}
      <div className="flex flex-col gap-3">
        <h2 className="font-outfit font-semibold lg:font-bold text-lg lg:text-2xl text-foreground leading-7 lg:leading-[38.4px]">Konteinera izmēru</h2>
        
        {/* Desktop layout */}
        <div className="hidden lg:block relative">
          <div
            className="relative rounded-3xl outline outline-1 outline-eco-lime overflow-hidden"
            style={{ height: 416 }}>
            
            <div className="flex absolute top-0 left-0 right-0 h-24 z-10">
              {containerSizes.map((size, i) =>
              <ContainerSizeCard
                key={size.volume}
                size={size}
                isFirst={i === 0}
                isLast={i === containerSizes.length - 1}
                isSelected={i === selectedIndex}
                onClick={() => setSelectedIndex(i)} />
              )}
            </div>

            <div className="absolute top-[95px] left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center">
              <img
                src={selected.image}
                alt={`${selected.volume}${selected.superscript ? "³" : ""} konteiners`}
                className="h-[280px] object-contain transition-all duration-300" />
            </div>

            <div
              className="absolute top-[216px] left-0 right-0 px-6 flex justify-between items-center z-20"
              style={{ width: 787, left: "50%", transform: "translateX(-50%)" }}>
              <button onClick={handlePrev} disabled={selectedIndex === 0} className="transition-opacity">
                <ArrowLeftCircle disabled={selectedIndex === 0} />
              </button>
              <button onClick={handleNext} disabled={selectedIndex === containerSizes.length - 1} className="transition-opacity">
                <ArrowRightCircle disabled={selectedIndex === containerSizes.length - 1} />
              </button>
            </div>

            <p className="absolute bottom-3 left-5 font-outfit font-light text-base text-eco-light-gray z-20">
              *Attēlam ir ilustratīva nozīme
            </p>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="rounded-3xl outline outline-1 outline-eco-lime overflow-hidden flex flex-col">
            {/* Size selector grid - 2 columns, 3 rows */}
            <div className="grid grid-cols-2">
              {containerSizes.map((size, i) =>
              <ContainerSizeCard
                key={size.volume}
                size={size}
                isFirst={i === 0}
                isLast={i === containerSizes.length - 1}
                isSelected={i === selectedIndex}
                onClick={() => setSelectedIndex(i)}
                roundedClass={getMobileRoundedClass(i, containerSizes.length)} />
              )}
            </div>

            {/* Container image area */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={selected.image}
                alt={`${selected.volume}${selected.superscript ? "³" : ""} konteiners`}
                className="w-64 h-48 absolute left-[26px] top-0 object-contain transition-all duration-300" />

              <div className="w-80 px-1 absolute left-0 top-[80px] flex justify-between items-center">
                <button onClick={handlePrev} disabled={selectedIndex === 0} className="transition-opacity">
                  <ArrowLeftCircle disabled={selectedIndex === 0} />
                </button>
                <button onClick={handleNext} disabled={selectedIndex === containerSizes.length - 1} className="transition-opacity">
                  <ArrowRightCircle disabled={selectedIndex === containerSizes.length - 1} />
                </button>
              </div>

              <p className="absolute left-4 top-[182px] font-outfit font-normal text-sm text-eco-light-gray">
                *Attēlam ir ilustratīva nozīme
              </p>
            </div>
          </div>
        </div>

        {/* Terms button - mobile only */}
        <button className="lg:hidden w-full pl-3 pr-4 py-2 bg-primary rounded-full flex items-center justify-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4344 5.34531L16.1844 2.84531C16.1324 2.74148 16.0526 2.65417 15.9538 2.59317C15.855 2.53218 15.7411 2.49992 15.625 2.5H4.375C4.25889 2.49992 4.14505 2.53218 4.04625 2.59317C3.94744 2.65417 3.86759 2.74148 3.81562 2.84531L2.56563 5.34531C2.52254 5.43226 2.50009 5.52797 2.5 5.625V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V5.625C17.4999 5.52797 17.4775 5.43226 17.4344 5.34531ZM4.76094 3.75H15.2391L15.8641 5H4.13594L4.76094 3.75ZM16.25 16.25H3.75V6.25H16.25V16.25ZM12.9422 11.4328C13.0003 11.4909 13.0464 11.5598 13.0779 11.6357C13.1093 11.7115 13.1255 11.7929 13.1255 11.875C13.1255 11.9571 13.1093 12.0385 13.0779 12.1143C13.0464 12.1902 13.0003 12.2591 12.9422 12.3172L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.05781 12.3172C6.94054 12.1999 6.87465 12.0409 6.87465 11.875C6.87465 11.7091 6.94054 11.5501 7.05781 11.4328C7.17509 11.3155 7.33415 11.2497 7.5 11.2497C7.66585 11.2497 7.82491 11.3155 7.94219 11.4328L9.375 12.8664V8.125C9.375 7.95924 9.44085 7.80027 9.55806 7.68306C9.67527 7.56585 9.83424 7.5 10 7.5C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125V12.8664L12.0578 11.4328C12.1159 11.3747 12.1848 11.3286 12.2607 11.2971C12.3365 11.2657 12.4179 11.2495 12.5 11.2495C12.5821 11.2495 12.6635 11.2657 12.7393 11.2971C12.8152 11.3286 12.8841 11.3747 12.9422 11.4328Z" fill="currentColor" />
          </svg>
          <span className="font-outfit font-medium text-sm text-primary-foreground">
            Papildu noteikumi un nosacījumi
          </span>
        </button>
      </div>
    </div>);

}