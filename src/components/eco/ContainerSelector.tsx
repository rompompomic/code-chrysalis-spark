import containerImg from "@/assets/container-5m3.png";
import { InfoIcon, SealQuestionIcon } from "./SvgIcons";

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
  const roundedClass = isFirst
    ? "rounded-l-3xl"
    : isLast
    ? "rounded-r-3xl"
    : "";

  return (
    <div
      className={`flex-1 h-24 border border-eco-lime relative -mr-px ${roundedClass} ${
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
        <div className="flex items-center justify-between h-6 border border-eco-peach rounded-full pl-3 pr-1">
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
          <h2 className="font-outfit font-bold text-2xl text-foreground">
            Atkritumu konteinera veids
          </h2>
          <SealQuestionIcon />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-secondary text-foreground font-outfit font-semibold text-base px-4 py-3 rounded-full flex items-center gap-2">
            <svg className="size-5" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 3.75H2.5C2.33424 3.75 2.17527 3.81585 2.05806 3.93306C1.94085 4.05027 1.875 4.20924 1.875 4.375V15.625C1.875 15.7908 1.94085 15.9497 2.05806 16.0669C2.17527 16.1842 2.33424 16.25 2.5 16.25H17.5C17.6658 16.25 17.8247 16.1842 17.9419 16.0669C18.0592 15.9497 18.125 15.7908 18.125 15.625V4.375C18.125 4.20924 18.0592 4.05027 17.9419 3.93306C17.8247 3.81585 17.6658 3.75 17.5 3.75ZM6.875 11.25V8.75H13.125V11.25H6.875ZM3.125 11.25V8.75H5.625V11.25H3.125ZM14.375 8.75H16.875V11.25H14.375V8.75ZM16.875 7.5H10.625V5H16.875V7.5ZM9.375 5V7.5H3.125V5H9.375ZM3.125 12.5H9.375V15H3.125V12.5ZM10.625 15V12.5H16.875V15H10.625Z" fill="currentColor" />
            </svg>
            Būvgružu konteinera noma
          </button>
          <button className="bg-accent text-foreground font-outfit font-semibold text-base px-4 py-3 rounded-full flex items-center gap-2.5">
            <svg className="size-5" viewBox="0 0 20 20" fill="none">
              <path d="M18.75 8.29472V5.62519C18.75 5.29367 18.6183 4.97572 18.3839 4.7413C18.1495 4.50688 17.8315 4.37519 17.5 4.37519H2.5C2.16848 4.37519 1.85054 4.50688 1.61612 4.7413C1.3817 4.97572 1.25 5.29367 1.25 5.62519V8.29472C1.06028 8.40425 0.902676 8.56172 0.792983 8.75135C0.683291 8.94099 0.625362 9.15611 0.625 9.37519V13.1252C0.625 13.4567 0.756696 13.7746 0.991117 14.0091C1.22554 14.2435 1.54348 14.3752 1.875 14.3752H2.5V15.6252C2.5 15.7909 2.56585 15.9499 2.68306 16.0671C2.80027 16.1843 2.95924 16.2502 3.125 16.2502C3.29076 16.2502 3.44973 16.1843 3.56694 16.0671C3.68415 15.9499 3.75 15.7909 3.75 15.6252V14.3752H16.25V15.6252C16.25 15.7909 16.3158 15.9499 16.4331 16.0671C16.5503 16.1843 16.7092 16.2502 16.875 16.2502C17.0408 16.2502 17.1997 16.1843 17.3169 16.0671C17.4342 15.9499 17.5 15.7909 17.5 15.6252V14.3752H18.125C18.4565 14.3752 18.7745 14.2435 19.0089 14.0091C19.2433 13.7746 19.375 13.4567 19.375 13.1252V9.37519C19.3746 9.15611 19.3167 8.94099 19.207 8.75135C19.0973 8.56172 18.9397 8.40425 18.75 8.29472Z" fill="currentColor" />
            </svg>
            Lielgabarīta atkritumu konteinera noma
          </button>
        </div>
      </div>

      {/* Container sizes + image */}
      <div className="flex flex-col gap-3">
        <h2 className="font-outfit font-bold text-2xl text-foreground">Konteinera izmēru</h2>
        <div className="border border-eco-lime rounded-3xl overflow-hidden">
          {/* Size selector row */}
          <div className="flex">
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
          <div className="relative h-[320px] flex items-center justify-center">
            <img
              src={containerImg}
              alt="5m³ būvgružu konteiners"
              className="h-full object-contain"
            />

            {/* Dimensions card */}
            <div className="absolute top-10 left-5 bg-background rounded-xl shadow-md p-3 flex flex-col gap-2 text-xs text-primary font-outfit w-40">
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
            <button className="absolute left-6 top-1/2 -translate-y-1/2 size-14 rounded-full bg-background border border-eco-light-gray flex items-center justify-center rotate-180">
              <svg className="size-6" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#D8D8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 size-14 rounded-full bg-background border border-eco-lime flex items-center justify-center">
              <svg className="size-6" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#AFD100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Disclaimer */}
            <p className="absolute bottom-4 left-5 font-outfit font-light text-base text-eco-light-gray">
              *Attēlam ir ilustratīva nozīme
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
