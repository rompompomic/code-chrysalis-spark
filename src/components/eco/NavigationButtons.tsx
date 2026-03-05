import { NavArrowLeftCircle, NavArrowRightCircle } from "./SvgIcons";

interface NavigationButtonsProps {
  currentStep?: number;
  onBack?: () => void;
  onForward?: () => void;
}

export default function NavigationButtons({ currentStep = 1, onBack, onForward }: NavigationButtonsProps) {
  const backIsActive = currentStep > 1;
  const forwardIsActive = currentStep < 4;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 w-full">
      {/* Back button */}
      <button
        className={`flex-1 w-full h-14 rounded-[200px] flex items-center justify-between pr-10 ${
          backIsActive ? "bg-secondary" : "bg-eco-light-gray"
        }`}
        onClick={onBack}
      >
        <NavArrowLeftCircle active={backIsActive} />
        <span className={`font-outfit font-semibold text-xl flex-1 text-center ${
          backIsActive ? "text-eco-gray" : "text-primary-foreground"
        }`}>
          Atpakaļ
        </span>
      </button>

      {/* Forward button */}
      <button
        className={`flex-1 w-full h-14 rounded-[200px] flex items-center justify-between pl-10 ${
          forwardIsActive ? "bg-secondary" : "bg-eco-light-gray"
        }`}
        onClick={onForward}
      >
        <span className={`font-outfit font-semibold text-xl flex-1 text-center ${
          forwardIsActive ? "text-eco-gray" : "text-primary-foreground"
        }`}>
          Tālāk
        </span>
        <NavArrowRightCircle active={forwardIsActive} />
      </button>
    </div>
  );
}
