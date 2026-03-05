import { EcoLogo } from "./SvgIcons";

const footerNavItems = [
  "Par mums",
  "Jaunumi",
  "Pakalpojumi",
  "Noslēgt līgumu",
  "Atkritumu šķirošana",
  "Ilgtspēja",
  "Kontakti",
];

const policyLinks = [
  "Privātuma politika",
  "Personu datu apstrāde",
  "Videonovērošanas datu apstrāde",
  "Privātuma paziņojums vakanču kandidātiem",
  "Sīkdatņu politika",
  "Piekļūstamības paziņojums",
];

export default function Footer() {
  return (
    <footer className="bg-background w-full">
      {/* Search bar */}
      <div className="bg-secondary py-10 px-[70px]">
        <div className="flex items-center justify-between">
          <h3 className="font-outfit font-bold text-[28px] text-eco-gray">
            Nevarat atrast kādu informāciju?
          </h3>
          <div className="bg-background w-[600px] h-[60px] flex items-center px-4 gap-3">
            {/* Search icon */}
            <svg className="size-5 shrink-0" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="#413F41" strokeWidth="1.5" />
              <path d="M14 14L18 18" stroke="#413F41" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Ievadiet meklēšanas frāzi"
              className="font-fira text-base text-eco-gray bg-transparent outline-none flex-1 placeholder:text-eco-gray"
            />
            {/* Search button icon */}
            <svg className="size-4 shrink-0" viewBox="0 0 16 16" fill="none">
              <path d="M15 8H1M8 1L15 8L8 15" stroke="#413F41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="px-[70px] pt-8 pb-10">
        {/* Logo */}
        <EcoLogo className="h-[46px] w-auto mb-8" color="#AED000" />

        {/* Footer nav */}
        <div className="border-b border-border pb-4 mb-6">
          <nav className="flex gap-6">
            {footerNavItems.map((item) => (
              <a key={item} href="#" className="font-outfit font-semibold text-base text-eco-gray hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-6 mt-4">
            {/* Facebook */}
            <a href="#" className="text-eco-gray hover:text-foreground">
              <svg className="size-4" viewBox="0 0 8 17" fill="currentColor">
                <path d="M5.19 17H1.76V8.5H0V5.67H1.76V3.89C1.76 1.59 2.72 0 5.48 0H7.76V2.83H6.28C5.22 2.83 5.19 3.24 5.19 3.97V5.67H7.76L7.48 8.5H5.19V17Z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="text-eco-gray hover:text-foreground">
              <svg className="size-4" viewBox="0 0 17 14" fill="currentColor">
                <path d="M17 1.64C16.39 1.92 15.72 2.11 15.02 2.19C15.75 1.75 16.3 1.07 16.56 0.26C15.87 0.66 15.12 0.95 14.34 1.1C13.81 0.54 13.12 0.17 12.36 0.05C11.6 -0.07 10.82 0.06 10.14 0.42C9.47 0.78 8.93 1.36 8.61 2.06C8.29 2.76 8.21 3.54 8.39 4.29C5.58 4.15 3.06 2.77 1.34 0.64C0.65 1.83 0.95 3.36 2.07 4.13C1.54 4.11 1.02 3.97 0.55 3.71V3.75C0.55 5.01 1.42 6.08 2.6 6.38C2.11 6.51 1.6 6.52 1.11 6.42C1.47 7.5 2.47 8.27 3.64 8.29C2.7 9.03 1.53 9.43 0.33 9.43C0.06 9.43 -0.2 9.41 -0.46 9.37C0.78 10.15 2.21 10.57 3.67 10.57C10.32 10.57 13.95 6.53 13.95 3.03C13.95 2.91 13.95 2.79 13.94 2.67C14.62 2.18 15.21 1.56 15.68 0.86" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-eco-gray hover:text-foreground">
              <svg className="size-4" viewBox="0 0 17 12" fill="currentColor">
                <path d="M16.63 1.88C16.45 1.18 15.89 0.63 15.2 0.45C13.88 0.12 8.56 0.12 8.56 0.12C8.56 0.12 3.24 0.12 1.92 0.45C1.23 0.63 0.67 1.18 0.49 1.88C0.16 3.19 0.16 5.94 0.16 5.94C0.16 5.94 0.16 8.69 0.49 10C0.67 10.7 1.23 11.25 1.92 11.43C3.24 11.76 8.56 11.76 8.56 11.76C8.56 11.76 13.88 11.76 15.2 11.43C15.89 11.25 16.45 10.7 16.63 10C16.96 8.69 16.96 5.94 16.96 5.94C16.96 5.94 16.96 3.19 16.63 1.88ZM6.86 8.5V3.38L11.28 5.94L6.86 8.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright and contact info */}
        <div className="flex flex-col gap-4 font-outfit text-sm text-eco-gray">
          <div>
            <p>Visas tiesības aizsargātas</p>
            <p>
              Izstrāde: <span className="text-eco-light-gray">BRIGHT</span>
            </p>
          </div>
          <div>
            <p>Tālrunis: 8717; 67 799 999</p>
            <p>E-pasts: info@ecobaltiavide.lv</p>
            <p>Adrese: Getliņu iela 5, Rumbula, Stopiņu pagasts, Ropažu novads, LV-2121</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {policyLinks.map((link, i) => (
              <a key={link} href="#" className={`hover:underline ${i === 0 ? "underline" : ""}`}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
