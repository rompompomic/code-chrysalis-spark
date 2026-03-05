import { useState } from "react";
import logoNew from "@/assets/logo-new.svg";

const navItems = [
  "Par mums",
  "Jaunumi",
  "Pakalpojumi",
  "Noslēgt līgumu",
  "Atkritumu šķirošana",
  "Ilgtspēja",
  "Kontakti",
];

function HamburgerIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="15" fill="hsl(var(--primary))" />
      <path d="M21 11H9C8.5 11 8 10.6 8 10C8 9.5 8.4 9 9 9H21C21.5 9 22 9.4 22 10C22 10.6 21.6 11 21 11Z" fill="white"/>
      <path d="M21 16H9C8.5 16 8 15.6 8 15C8 14.5 8.4 14 9 14H21C21.5 14 22 14.4 22 15C22 15.6 21.6 16 21 16Z" fill="white"/>
      <path d="M21 21H9C8.5 21 8 20.6 8 20C8 19.5 8.4 19 9 19H21C21.5 19 22 19.4 22 20C22 20.6 21.6 21 21 21Z" fill="white"/>
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background shrink-0 w-full">
      {/* Mobile top bar */}
      <div className="lg:hidden border-b border-border">
        <div className="flex flex-col">
          {/* CTA buttons row */}
          <div className="flex items-center justify-center gap-3 px-5 py-1.5">
            <a href="#" className="bg-eco-lime text-primary font-outfit font-medium text-sm px-4 h-[28px] flex items-center justify-center">
              Pieteikt pakalpojumu
            </a>
            <a href="#" className="bg-primary text-eco-lime font-outfit font-medium text-sm px-4 h-[28px] flex items-center gap-2">
              <svg className="size-[13px]" viewBox="0 0 13 13" fill="none">
                <g clipPath="url(#clip_phone_m)">
                  <mask id="mask_phone_m" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                    <path d="M12.7029 0H0V12.7307H12.7029V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask_phone_m)">
                    <path d="M9.02619 12.731C8.8869 12.7124 8.71048 12.7032 8.54333 12.6753C8.15333 12.6196 7.77262 12.5267 7.40119 12.3874C7.17833 12.3039 6.95548 12.211 6.7419 12.1089C6.08262 11.7932 5.4419 11.4217 4.83833 11.0039C4.11405 10.4932 3.45476 9.92673 2.86048 9.27673C2.49833 8.87744 2.14548 8.46887 1.82976 8.03244C1.23548 7.2153 0.752623 6.34244 0.381195 5.40458C0.26048 5.08887 0.149052 4.77316 0.093337 4.43887C0.0654799 4.27173 0.0469085 4.10458 0.028337 3.93744C0.0190513 3.85387 0.00976563 3.7703 0.00976563 3.67744C0.00976563 3.61244 0.00976562 3.53816 0.0190513 3.46387C0.0376228 3.34316 0.0561942 3.21316 0.0840513 3.09244C0.149052 2.83244 0.288337 2.61887 0.474052 2.43316C0.622623 2.28458 0.771195 2.1453 0.91048 1.99673C1.07762 1.82958 1.24476 1.65316 1.4119 1.48601C1.48619 1.41173 1.57905 1.33744 1.6719 1.28173C2.00619 1.07744 2.33119 1.1053 2.6469 1.32816C2.69333 1.3653 2.74905 1.40244 2.78619 1.44887C3.2969 1.95958 3.79833 2.46101 4.30905 2.97173C4.42048 3.08316 4.52262 3.21316 4.57833 3.37101C4.67119 3.63101 4.64333 3.88173 4.49476 4.12316C4.42976 4.2253 4.34619 4.31816 4.26262 4.40173C3.98405 4.6803 3.70548 4.95887 3.4269 5.23744C3.40833 5.25601 3.38976 5.27458 3.37119 5.28387C3.28762 5.36744 3.26905 5.43244 3.32476 5.54387C3.40833 5.7203 3.50119 5.90601 3.59405 6.08244C3.7519 6.3703 3.9469 6.6303 4.15119 6.88101C4.39262 7.17816 4.64333 7.4753 4.9219 7.74458C5.39548 8.21816 5.91548 8.6453 6.47262 9.01673C6.6769 9.14673 6.89048 9.24887 7.10405 9.3603C7.12262 9.3603 7.14119 9.37887 7.15048 9.38815C7.27119 9.46244 7.35476 9.4253 7.43833 9.34173C7.73548 9.0353 8.03262 8.72887 8.33905 8.43173C8.42262 8.34816 8.50619 8.27387 8.60833 8.21816C8.93333 8.02316 9.25833 8.05101 9.57406 8.26458C9.63906 8.31101 9.69477 8.35744 9.75048 8.41316C10.2519 8.91458 10.7533 9.41601 11.2548 9.91744C11.3848 10.0474 11.4962 10.2053 11.5426 10.391C11.6076 10.6417 11.5612 10.8739 11.4219 11.0874C11.3662 11.171 11.2919 11.2546 11.2176 11.3289C10.9576 11.5982 10.6883 11.8582 10.4191 12.1274C10.2426 12.3039 10.0569 12.4617 9.83406 12.5639C9.64834 12.6474 9.45334 12.7032 9.24905 12.7217C9.18405 12.7217 9.11905 12.731 9.0169 12.7403L9.02619 12.731Z" fill="currentColor" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip_phone_m">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Sazinies ar mums
            </a>
          </div>
          {/* Logo + hamburger row */}
          <div className="flex items-center justify-between px-5 py-4">
            <a href="/" className="shrink-0">
              <img src={logoNew} alt="Eco Baltia Vide" className="h-[46px] w-auto" />
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <HamburgerIcon />
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <nav className="flex flex-col border-t border-border px-5 pb-4">
            {navItems.map((item) => (
              <a key={item} href="#" className="font-outfit font-semibold text-base text-foreground py-3 border-b border-border last:border-b-0">
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop top bar */}
      <div className="hidden lg:block border-b border-border">
        <div className="flex items-center h-[70px] px-[120px]">
          <a href="/" className="shrink-0 ml-[50px]">
            <img src={logoNew} alt="Eco Baltia Vide" className="h-[46px] w-auto" />
          </a>
          <div className="flex items-center gap-[13px] ml-auto">
            <a href="#" className="bg-eco-lime text-primary font-outfit font-medium text-sm px-[15px] h-[30px] flex items-center justify-center">
              Pieteikt pakalpojumu
            </a>
            <a href="#" className="bg-primary text-eco-lime font-outfit font-medium text-sm px-[15px] h-[30px] flex items-center gap-2">
              <svg className="size-[13px]" viewBox="0 0 13 13" fill="none">
                <g clipPath="url(#clip_phone)">
                  <mask id="mask_phone" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                    <path d="M12.7029 0H0V12.7307H12.7029V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask_phone)">
                    <path d="M9.02619 12.731C8.8869 12.7124 8.71048 12.7032 8.54333 12.6753C8.15333 12.6196 7.77262 12.5267 7.40119 12.3874C7.17833 12.3039 6.95548 12.211 6.7419 12.1089C6.08262 11.7932 5.4419 11.4217 4.83833 11.0039C4.11405 10.4932 3.45476 9.92673 2.86048 9.27673C2.49833 8.87744 2.14548 8.46887 1.82976 8.03244C1.23548 7.2153 0.752623 6.34244 0.381195 5.40458C0.26048 5.08887 0.149052 4.77316 0.093337 4.43887C0.0654799 4.27173 0.0469085 4.10458 0.028337 3.93744C0.0190513 3.85387 0.00976563 3.7703 0.00976563 3.67744C0.00976563 3.61244 0.00976562 3.53816 0.0190513 3.46387C0.0376228 3.34316 0.0561942 3.21316 0.0840513 3.09244C0.149052 2.83244 0.288337 2.61887 0.474052 2.43316C0.622623 2.28458 0.771195 2.1453 0.91048 1.99673C1.07762 1.82958 1.24476 1.65316 1.4119 1.48601C1.48619 1.41173 1.57905 1.33744 1.6719 1.28173C2.00619 1.07744 2.33119 1.1053 2.6469 1.32816C2.69333 1.3653 2.74905 1.40244 2.78619 1.44887C3.2969 1.95958 3.79833 2.46101 4.30905 2.97173C4.42048 3.08316 4.52262 3.21316 4.57833 3.37101C4.67119 3.63101 4.64333 3.88173 4.49476 4.12316C4.42976 4.2253 4.34619 4.31816 4.26262 4.40173C3.98405 4.6803 3.70548 4.95887 3.4269 5.23744C3.40833 5.25601 3.38976 5.27458 3.37119 5.28387C3.28762 5.36744 3.26905 5.43244 3.32476 5.54387C3.40833 5.7203 3.50119 5.90601 3.59405 6.08244C3.7519 6.3703 3.9469 6.6303 4.15119 6.88101C4.39262 7.17816 4.64333 7.4753 4.9219 7.74458C5.39548 8.21816 5.91548 8.6453 6.47262 9.01673C6.6769 9.14673 6.89048 9.24887 7.10405 9.3603C7.12262 9.3603 7.14119 9.37887 7.15048 9.38815C7.27119 9.46244 7.35476 9.4253 7.43833 9.34173C7.73548 9.0353 8.03262 8.72887 8.33905 8.43173C8.42262 8.34816 8.50619 8.27387 8.60833 8.21816C8.93333 8.02316 9.25833 8.05101 9.57406 8.26458C9.63906 8.31101 9.69477 8.35744 9.75048 8.41316C10.2519 8.91458 10.7533 9.41601 11.2548 9.91744C11.3848 10.0474 11.4962 10.2053 11.5426 10.391C11.6076 10.6417 11.5612 10.8739 11.4219 11.0874C11.3662 11.171 11.2919 11.2546 11.2176 11.3289C10.9576 11.5982 10.6883 11.8582 10.4191 12.1274C10.2426 12.3039 10.0569 12.4617 9.83406 12.5639C9.64834 12.6474 9.45334 12.7032 9.24905 12.7217C9.18405 12.7217 9.11905 12.731 9.0169 12.7403L9.02619 12.731Z" fill="currentColor" />
                    <path d="M12.7032 5.59943C12.7125 5.69228 12.7032 5.77586 12.6568 5.86871C12.5732 6.03586 12.4339 6.14728 12.2389 6.12871C12.1832 6.12871 12.1182 6.10086 12.0625 6.073C11.9047 5.98943 11.8118 5.85014 11.7561 5.683C11.7004 5.53443 11.6632 5.37657 11.6075 5.21871C11.4868 4.838 11.3289 4.46657 11.1339 4.123C10.9482 3.78871 10.7439 3.473 10.4932 3.17586C10.0104 2.59086 9.44394 2.09871 8.79394 1.718C8.32037 1.43943 7.81894 1.22586 7.28966 1.07728C7.15966 1.04014 7.03894 1.01228 6.90894 0.975141C6.78823 0.937999 6.66751 0.882284 6.57466 0.789427C6.45394 0.668713 6.37966 0.529427 6.42608 0.352999C6.45394 0.213713 6.5468 0.120856 6.66751 0.0651415C6.81608 0.000141591 6.96466 -0.00914413 7.12251 0.018713C7.51251 0.0929987 7.89323 0.204427 8.25537 0.352999C8.48751 0.445856 8.71966 0.547999 8.94251 0.668713C9.43466 0.919427 9.89894 1.22586 10.3168 1.588C10.4561 1.70871 10.5861 1.83871 10.7161 1.95943C11.0225 2.24728 11.2825 2.563 11.5239 2.89728C11.6447 3.06443 11.7561 3.23157 11.8582 3.408C12.1461 3.89086 12.3782 4.39228 12.5454 4.92157C12.6011 5.098 12.6475 5.26514 12.6847 5.44157C12.6939 5.488 12.6847 5.53443 12.6847 5.59014L12.7032 5.59943Z" fill="currentColor" />
                    <path d="M10.121 5.80331C10.1303 6.06331 9.9539 6.23045 9.78676 6.27688C9.57319 6.33259 9.35962 6.23974 9.22962 6.04474C9.18319 5.96116 9.13676 5.87759 9.1089 5.78474C9.03462 5.55259 8.93247 5.32974 8.81176 5.11616C8.6539 4.84688 8.46819 4.59616 8.23605 4.38259C8.02247 4.17831 7.79962 4.01116 7.53962 3.87188C7.30747 3.74188 7.06605 3.63974 6.80605 3.56545C6.72247 3.53759 6.62962 3.51902 6.55533 3.48188C6.38819 3.40759 6.25819 3.28688 6.21176 3.10116C6.13747 2.84116 6.29533 2.59974 6.55533 2.55331C6.68533 2.52545 6.80605 2.53474 6.93605 2.57188C7.24247 2.64616 7.53962 2.74831 7.81819 2.89688C8.5239 3.24974 9.09962 3.75116 9.53605 4.41045C9.73105 4.70759 9.90747 5.02331 10.0189 5.36688C10.056 5.45974 10.0839 5.56188 10.1118 5.66402C10.121 5.71045 10.121 5.76616 10.1303 5.81259L10.121 5.80331Z" fill="currentColor" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip_phone">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Sazinies ar mums
            </a>
          </div>
          <div className="flex items-center gap-4 ml-6">
            <button className="shrink-0">
              <svg className="size-5" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip_search)">
                  <path d="M19.9999 19.0494L14.2986 13.3481C14.8415 12.7146 15.2035 12.0811 15.5655 11.2666C17.285 7.10374 15.3845 2.39786 11.2216 0.587908C10.3167 0.225917 9.23069 0.0449219 8.14472 0.0449219C4.25331 0.0449219 0.904898 2.75985 0.180917 6.56076C-0.543065 10.3617 1.44788 14.1626 4.9773 15.701C7.96372 16.968 11.2216 16.3345 13.4841 14.3436L19.0949 19.9544L19.9999 19.0494ZM5.52028 14.5246C2.98635 13.4386 1.26689 10.9951 1.26689 8.18972C1.26689 6.37976 1.99087 4.66031 3.25784 3.30284C4.52481 2.03587 6.33476 1.31189 8.14472 1.31189C10.9501 1.31189 13.3936 2.94085 14.4796 5.56528C15.5655 8.09922 14.932 11.0856 13.0316 13.0766C11.0406 14.977 8.05422 15.6105 5.52028 14.5246Z" fill="#010101" />
                </g>
                <defs>
                  <clipPath id="clip_search">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className="flex items-center gap-1 text-base uppercase font-outfit">
              <span className="text-eco-light-gray">en</span>
              <span className="text-eco-light-gray">|</span>
              <span className="text-foreground">lv</span>
            </div>
            <a href="#" className="bg-eco-orange text-primary-foreground font-outfit font-medium text-sm px-[15px] h-[30px] flex items-center justify-center">
              mana.ecobaltiavide.lv
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block border-b border-border">
        <nav className="flex items-center h-[56px] px-[120px]">
          <a href="/" className="flex items-center justify-center h-full border-b-4 border-transparent hover:border-eco-lime ml-[58px]">
            <svg className="size-5" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip_home)">
                <path d="M0 9.92638H2.68293V18.463H8.04878V12.1215H11.9512V18.463H17.3171V9.92638H20L10 1.53613L0 9.92638Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip_home">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`font-outfit font-semibold text-[22px] text-foreground h-full flex items-center border-b-4 ml-8 ${
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
