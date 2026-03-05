import { NavArrowLeftCircle, NavArrowRightCircle } from "./SvgIcons";

export default function NavigationButtons() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 w-full">
      {/* Back button */}
      <button className="flex-1 w-full h-14 bg-eco-light-gray rounded-[200px] flex items-center justify-between pl-10">
        <span className="font-outfit font-semibold text-xl text-primary-foreground flex-1 text-center">
          Atpakaļ
        </span>
        <NavArrowLeftCircle />
      </button>

      {/* Forward button */}
      <button className="flex-1 w-full h-14 bg-secondary rounded-[200px] flex items-center justify-between pl-10">
        <span className="font-outfit font-semibold text-xl text-eco-gray flex-1 text-center">
          Tālāk
        </span>
        <NavArrowRightCircle />
      </button>
    </div>
  );
}
