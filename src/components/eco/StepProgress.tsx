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
    <div className="flex items-center gap-5 w-full">
      {steps.map((step, i) => (
        <div key={step.label} className="contents">
          <div className="flex items-center gap-3 shrink-0">
            {step.icon}
            <span className="font-outfit text-xl text-eco-gray">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-px bg-eco-light-gray" />
          )}
        </div>
      ))}
    </div>
  );
}
