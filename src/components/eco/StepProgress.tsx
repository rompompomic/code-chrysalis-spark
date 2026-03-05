import { ContainerIcon, LocationIcon, CalendarIcon, UserIcon } from "./SvgIcons";

interface Step {
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const steps: Step[] = [
  { icon: <ContainerIcon />, label: "Konteinera veidu un izmēru", active: true },
  { icon: <LocationIcon />, label: "Piegādes adrese", active: false },
  { icon: <CalendarIcon />, label: "Izmantošanas periods", active: false },
  { icon: <UserIcon />, label: "Norēķini", active: false },
];

export default function StepProgress() {
  return (
    <div className="flex items-center gap-2 lg:gap-5 w-full overflow-x-auto bg-muted/20 lg:bg-transparent px-2 py-2 lg:px-0 lg:py-0 rounded-lg lg:rounded-none">
      {steps.map((step, i) => (
        <div key={step.label} className="contents">
          <div className="flex items-center gap-1.5 lg:gap-3 shrink-0">
            {step.icon}
            <span className="font-outfit text-sm lg:text-xl text-eco-gray whitespace-nowrap">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 min-w-[12px] lg:min-w-0 h-px outline outline-1 outline-[#D8D8DA]" />
          )}
        </div>
      ))}
    </div>
  );
}
