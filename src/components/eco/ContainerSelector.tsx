import containerImg from "@/assets/container-5m3.png";
import {
  InfoIcon,
  ChevronDownIcon,
  SealQuestionIcon,
  WallIcon,
  CouchIcon,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "./SvgIcons";

interface ContainerSize {
  volume: string;
  superscript?: boolean;
  weight: string;
  price: string;
  selected?: boolean;
}

const containerSizes: ContainerSize[] = [
  { volume: "5 m", superscript: true, weight: "līdz 3,5 t", price: "260.15 €", selected: true },
  { volume: "8 m", superscript: true, weight: "līdz 7,5 t", price: "260.15 €" },
  { volume: "10 m", superscript: true, weight: "līdz 8 t", price: "260.15 €" },
  { volume: "16 m", superscript: true, weight: "līdz 12 t", price: "260.15 €" },
  { volume: "22 m", superscript: true, weight: "līdz 15 t", price: "260.15 €" },
  { volume: "35 m", superscript: true, weight: "līdz 15 t", price: "260.15 €" },
];

function ContainerSizeCard({ size, isFirst, isLast }: { size: ContainerSize; isFirst: boolean; isLast: boolean }) {
  const roundedClass = isFirst ? "rounded-tl-3xl rounded-bl-3xl" : isLast ? "rounded-tr-3xl rounded-br-3xl" : "";

  return (
    <div
      className={`flex-1 h-24 outline outline-1 outline-eco-lime ${roundedClass} ${
        size.selected ? "bg-accent" : "bg-background"
      }`}
    >
      <div className="flex flex-col justify-between h-full px-5 py-2.5">
        <div className="flex items-center justify-between w-full">
          <span className="font-outfit font-black text-xl text-primary">
            {size.volume}
            {size.superscript && <sup className="text-[13px]">3</sup>}
          </span>
          <div className="flex items-center gap-1">
            <span className="font-outfit text-base text-muted">{size.weight}</span>
            <InfoIcon />
          </div>
        </div>
        <div className="flex items-center justify-between h-6 outline outline-1 outline-eco-peach rounded-full pl-3 pr-1">
          <span className="font-outfit text-xs text-eco-orange">cena no</span>
          <span className="bg-eco-orange text-primary-foreground font-outfit text-xs px-1.5 py-0.5 rounded-full">
            {size.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ContainerSelector() {
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
            style={{ height: 416 }}
          >
            {/* Size selector row */}
            <div className="flex absolute top-0 left-0 right-0 h-24 z-10">
              {containerSizes.map((size, i) => (
                <ContainerSizeCard
                  key={size.volume}
                  size={size}
                  isFirst={i === 0}
                  isLast={i === containerSizes.length - 1}
                />
              ))}
            </div>

            {/* Container image area */}
            <div className="absolute top-[95px] left-0 right-0 bottom-0 overflow-hidden flex items-center justify-center">
              <img src={containerImg} alt="5m³ būvgružu konteiners" className="h-[376px] object-contain" />
            </div>

            {/* Dimensions card */}
            <div className="absolute top-[38px] left-5 z-20 bg-background rounded-xl shadow-[0px_1px_4px_rgba(29,56,43,0.25)] p-3 flex flex-col gap-2 text-xs text-primary font-outfit w-[158px]">
              <div className="flex justify-between">
                <span>Garums</span>
                <span className="font-semibold">3.08 m</span>
              </div>
              <div className="flex justify-between">
                <span>Platums</span>
                <span className="font-semibold">1.90 m</span>
              </div>
              <div className="flex justify-between">
                <span>Augstums</span>
                <span className="font-semibold">1.25 m</span>
              </div>
            </div>

            {/* Navigation arrows */}
            <div
              className="absolute top-[216px] left-0 right-0 px-6 flex justify-between items-center z-20"
              style={{ width: 787, left: "50%", transform: "translateX(-50%)" }}
            >
              <button>
                <ArrowLeftCircle />
              </button>
              <button>
                <ArrowRightCircle />
              </button>
            </div>

            {/* Disclaimer */}
            <p className="absolute bottom-3 left-5 font-outfit font-light text-base text-eco-light-gray z-20">
              *Attēlam ir ilustratīva nozīme
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
