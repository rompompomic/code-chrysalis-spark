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
  onClick






}: {size: ContainerSize;isFirst: boolean;isLast: boolean;isSelected: boolean;onClick: () => void;}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const roundedClass = isFirst ? "rounded-tl-3xl rounded-bl-3xl" : isLast ? "rounded-tr-3xl rounded-br-3xl" : "";

  return (
    <div
      className={`flex-1 h-24 outline outline-1 outline-eco-lime cursor-pointer transition-colors ${roundedClass} ${
      isSelected ? "bg-accent" : "bg-background hover:bg-accent/50"}`
      }
      onClick={onClick}>
      
      <div className="flex flex-col justify-between h-full px-5 py-2.5">
        <div className="flex items-center justify-between w-full">
          <span className="font-outfit font-black text-xl text-primary">
            {size.volume}
            {size.superscript && <sup className="text-[13px]">3</sup>}
          </span>
          <div className="relative flex items-center gap-1">
            <span className="font-outfit text-base text-muted">{size.weight}</span>
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
        <h2 className="font-outfit font-bold text-2xl text-foreground leading-[38.4px]">Konteinera izmēru</h2>
        <div className="relative">
          {/* Side terms accordion */}
          <div className="absolute left-0 bottom-0 z-30" style={{ transform: "rotate(-90deg) translateX(-100%)", transformOrigin: "0 100%" }}>
            <button className="bg-primary text-primary-foreground rounded-full flex items-center gap-2.5 px-4 py-3">
              <ChevronDownIcon className="size-5 rotate-90 text-primary-foreground" />
              <span className="font-outfit font-semibold text-base whitespace-nowrap">
                Papildu noteikumi un nosacījumi
              </span>
            </button>
          </div>

          {/* Container box */}
          <div
            className="relative rounded-3xl outline outline-1 outline-eco-lime overflow-hidden"
            style={{ height: 416 }}>
            
            {/* Size selector row */}
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

            {/* Container image area */}
            <div className="absolute top-[95px] left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center">
              <img
                src={selected.image}
                alt={`${selected.volume}${selected.superscript ? "³" : ""} konteiners`}
                className="h-[280px] object-contain transition-all duration-300" />
              
            </div>

            {/* Dimensions card */}
            <div className="absolute top-[110px] left-5 z-20 bg-background rounded-xl shadow-[0px_1px_4px_rgba(29,56,43,0.25)] p-3 flex flex-col gap-2 text-xs text-primary font-outfit w-[158px]">
              <div className="flex justify-between">
                <span>Garums</span>
                <span className="font-semibold">{selected.garums}</span>
              </div>
              <div className="flex justify-between">
                <span>Platums</span>
                
              </div>
              <div className="flex justify-between">
                <span>Augstums</span>
                <span className="font-semibold">{selected.augstums}</span>
              </div>
            </div>

            {/* Navigation arrows */}
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

            {/* Slider */}
            










            

            {/* Disclaimer */}
            <p className="absolute bottom-3 left-5 font-outfit font-light text-base text-eco-light-gray z-20">
              *Attēlam ir ilustratīva nozīme
            </p>
          </div>
        </div>
      </div>
    </div>);

}