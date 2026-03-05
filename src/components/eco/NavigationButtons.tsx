export default function NavigationButtons() {
  return (
    <div className="flex items-center gap-5 w-full">
      {/* Back button */}
      <button className="flex-1 h-14 bg-eco-light-gray rounded-[200px] flex items-center justify-between pl-10 pr-0">
        <span className="font-outfit font-semibold text-xl text-primary-foreground flex-1 text-center">
          Atpakaļ
        </span>
        <div className="size-14 rounded-full bg-background flex items-center justify-center border border-eco-light-gray rotate-180">
          <svg className="size-6" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#D8D8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* Forward button */}
      <button className="flex-1 h-14 bg-secondary rounded-[200px] flex items-center justify-between pl-10 pr-0">
        <span className="font-outfit font-semibold text-xl text-eco-gray flex-1 text-center">
          Tālāk
        </span>
        <div className="size-14 rounded-full bg-eco-gray flex items-center justify-center">
          <svg className="size-6" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  );
}
