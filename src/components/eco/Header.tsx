import { EcoLogo } from "./SvgIcons";

const navItems = [
  "Par mums",
  "Jaunumi",
  "Pakalpojumi",
  "Noslēgt līgumu",
  "Atkritumu šķirošana",
  "Ilgtspēja",
  "Kontakti",
];

export default function Header() {
  return (
    <header className="bg-background shrink-0 w-full">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="flex items-center justify-between h-[70px] px-[120px]">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <EcoLogo className="h-[46px] w-auto" color="black" />
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-base uppercase font-outfit">
              <span className="text-eco-light-gray">en</span>
              <span className="text-eco-light-gray">|</span>
              <span className="text-foreground">lv</span>
            </div>

            {/* Portal button */}
            <a
              href="#"
              className="bg-eco-orange text-primary-foreground font-outfit font-medium text-sm px-5 h-[30px] flex items-center justify-center"
            >
              mana.ecobaltiavide.lv
            </a>

            {/* Contact button */}
            <a
              href="#"
              className="bg-primary text-eco-lime font-outfit font-medium text-sm px-5 h-[30px] flex items-center gap-2"
            >
              <svg className="size-[13px]" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.5 3.75H2.5C2.33424 3.75 2.17527 3.81585 2.05806 3.93306C1.94085 4.05027 1.875 4.20924 1.875 4.375V15.625C1.875 15.7908 1.94085 15.9497 2.05806 16.0669C2.17527 16.1842 2.33424 16.25 2.5 16.25H17.5C17.6658 16.25 17.8247 16.1842 17.9419 16.0669C18.0592 15.9497 18.125 15.7908 18.125 15.625V4.375C18.125 4.20924 18.0592 4.05027 17.9419 3.93306C17.8247 3.81585 17.6658 3.75 17.5 3.75Z"
                  fill="currentColor"
                />
              </svg>
              Sazinies ar mums
            </a>

            {/* User icon */}
            <svg className="size-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM10 5C11.1046 5 12 5.89543 12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5ZM10 16C7.79 16 5.84 14.94 4.67 13.31C4.7 11.66 8 10.75 10 10.75C11.99 10.75 15.3 11.66 15.33 13.31C14.16 14.94 12.21 16 10 16Z"
                fill="#010101"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-border">
        <nav className="flex items-center justify-center h-[56px] px-[120px] gap-8">
          {/* Home icon */}
          <a href="/" className="border-b-4 border-transparent hover:border-eco-lime pb-1">
            <svg className="size-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.5 16.25V8.33333L10 2.5L2.5 8.33333V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25Z"
                fill="black"
              />
            </svg>
          </a>
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`font-outfit font-semibold text-[22px] text-foreground border-b-4 pb-1 ${
                item === "Pakalpojumi"
                  ? "border-eco-lime"
                  : "border-transparent hover:border-eco-lime"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
