import logoNew from "@/assets/logo-new.svg";

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
  { label: "Privātuma politika", underline: true },
  { label: "Personu datu apstrāde", underline: false },
  { label: "Videonovērošanas datu apstrāde", underline: false },
  { label: "Privātuma paziņojums vakanču kandidātiem", underline: false },
  { label: "Sīkdatņu politika", underline: false },
  { label: "Piekļūstamības paziņojums", underline: false },
];

function FacebookIcon() {
  return (
    <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip_fb_footer)">
        <path fillRule="evenodd" clipRule="evenodd" d="M-0.00195312 5.48212H1.71175V3.81742C1.63302 2.92476 1.82573 2.02913 2.26465 1.24786C2.56696 0.832688 2.96925 0.500624 3.4342 0.282485C3.89914 0.0643451 4.41167 -0.0327994 4.92419 7.84528e-05C5.95781 -0.0452023 6.99257 0.0585082 7.99665 0.308023L7.56873 2.84759C7.11842 2.72371 6.65481 2.65455 6.18796 2.64161C5.52108 2.64161 4.92518 2.88058 4.92518 3.54147V5.47712H7.65871L7.46874 7.95769H4.92619V16.5732H1.71375V7.95769H-0.00195312V5.48212Z" fill="#413F41"/>
      </g>
      <defs>
        <clipPath id="clip_fb_footer">
          <rect width="8" height="16.5781" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip_tw_footer)">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.03 1.63809C16.3922 1.9207 15.7156 2.10603 15.0228 2.18787C15.7531 1.75236 16.2994 1.06532 16.5592 0.255663C15.8732 0.662419 15.1227 0.948771 14.3401 1.10231C13.8128 0.543655 13.1163 0.174068 12.3581 0.0506081C11.5999 -0.0728517 10.8221 0.0566798 10.1448 0.4192C9.46757 0.781721 8.92842 1.35709 8.61064 2.05648C8.29287 2.75587 8.21412 3.54041 8.38655 4.28901C6.99797 4.21894 5.63965 3.85764 4.39976 3.22856C3.15986 2.59949 2.06611 1.7167 1.18951 0.63751C0.742595 1.40697 0.605671 2.3178 0.806599 3.18465C1.00753 4.0515 1.53121 4.80922 2.27107 5.30359C1.71613 5.28635 1.17332 5.13693 0.687721 4.86777V4.91075C0.688247 5.71676 0.967069 6.49788 1.47704 7.12204C1.98701 7.74621 2.69685 8.17514 3.48657 8.33634C3.18674 8.41911 2.87699 8.46048 2.56595 8.45929C2.34556 8.4596 2.12566 8.43885 1.90922 8.39732C2.13193 9.09148 2.56629 9.69854 3.15138 10.1334C3.73648 10.5683 4.44299 10.8092 5.17189 10.8223C3.93524 11.7951 2.40708 12.3233 0.833657 12.3217C0.555074 12.3219 0.276715 12.3059 0 12.2737C1.50183 13.2346 3.2345 13.7737 5.01636 13.8346C6.79821 13.8955 8.56364 13.4759 10.1276 12.6199C11.6915 11.7638 12.9963 10.5028 13.9053 8.96895C14.8142 7.43515 15.2938 5.68506 15.2937 3.90216C15.2937 3.75022 15.2937 3.60229 15.2847 3.44936C15.9688 2.95519 16.5592 2.34282 17.028 1.6411" fill="#413F41"/>
      </g>
      <defs>
        <clipPath id="clip_tw_footer">
          <rect width="17.03" height="13.8428" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip_yt_footer)">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.07 0.000173256H2.92928C2.54236 -0.00800673 2.15778 0.0621909 1.7987 0.206535C1.43963 0.350879 1.11346 0.566386 0.839851 0.840087C0.566243 1.11379 0.350857 1.44003 0.206635 1.79915C0.0624131 2.15828 -0.00765025 2.54288 0.000661773 2.92979V9.00794C-0.00765025 9.39485 0.0624131 9.77945 0.206635 10.1386C0.350857 10.4977 0.566243 10.8239 0.839851 11.0976C1.11346 11.3713 1.43963 11.5869 1.7987 11.7312C2.15778 11.8755 2.54236 11.9457 2.92928 11.9376H14.07C14.4571 11.9459 14.8418 11.8758 15.2011 11.7315C15.5603 11.5872 15.8867 11.3718 16.1604 11.0981C16.4342 10.8244 16.6498 10.4981 16.7942 10.1389C16.9386 9.77969 17.0088 9.39499 17.0007 9.00794V2.92979C17.0088 2.54274 16.9386 2.15804 16.7942 1.79884C16.6498 1.43964 16.4342 1.11337 16.1604 0.839668C15.8867 0.565967 15.5603 0.350495 15.2011 0.206223C14.8418 0.0619506 14.4571 -0.00813866 14.07 0.000173256ZM6.23473 9.24582V2.7079L11.8011 5.97736L6.23473 9.24582Z" fill="#413F41"/>
      </g>
      <defs>
        <clipPath id="clip_yt_footer">
          <rect width="17" height="11.9375" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function ScrollToTopIcon() {
  return (
    <svg width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip_scroll)">
        <path d="M12.2043 30.842C12.0343 30.8414 11.8713 30.7737 11.7511 30.6534C11.6308 30.5332 11.563 30.3702 11.5625 30.2002V0.649628C11.5625 0.479408 11.6301 0.31616 11.7505 0.195796C11.8708 0.0754322 12.0341 0.0078125 12.2043 0.0078125C12.3745 0.0078125 12.5378 0.0754322 12.6581 0.195796C12.7785 0.31616 12.8461 0.479408 12.8461 0.649628V30.1982C12.8459 30.3685 12.7782 30.5318 12.658 30.6524C12.5377 30.773 12.3746 30.8412 12.2043 30.842Z" fill="black"/>
        <path d="M23.7702 12.855C23.6858 12.8552 23.6021 12.8386 23.5241 12.8064C23.446 12.7741 23.3751 12.7268 23.3154 12.6671L12.2036 1.55927L1.09574 12.6671C0.975365 12.7875 0.812103 12.8551 0.641869 12.8551C0.471634 12.8551 0.308373 12.7875 0.187999 12.6671C0.0676254 12.5467 0 12.3835 0 12.2132C0 12.043 0.0676254 11.8797 0.187999 11.7593L11.7507 0.195664C11.8712 0.0755222 12.0344 0.00805664 12.2046 0.00805664C12.3747 0.00805664 12.5379 0.0755222 12.6584 0.195664L24.2221 11.7583C24.3422 11.8788 24.4097 12.0421 24.4097 12.2122C24.4097 12.3824 24.3422 12.5456 24.2221 12.6661C24.1008 12.7856 23.9376 12.853 23.7672 12.854L23.7702 12.855Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip_scroll">
          <rect width="24.41" height="30.8486" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background w-full">
      {/* Search bar */}
      <div className="bg-secondary py-10 px-[70px]">
        <div className="flex items-center justify-between">
          <h3 className="font-outfit font-bold text-[28px] text-eco-gray">
            Nevarat atrast kādu informāciju?
          </h3>
          <div className="bg-background w-[600px] h-[60px] flex items-center px-4 gap-3">
            <svg className="size-5 shrink-0" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="#413F41" strokeWidth="1.5" />
              <path d="M14 14L18 18" stroke="#413F41" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Ievadiet meklēšanas frāzi"
              className="font-fira text-base text-eco-gray bg-transparent outline-none flex-1 placeholder:text-eco-gray"
            />
            <svg className="size-4 shrink-0" viewBox="0 0 16 16" fill="none">
              <path d="M15 8H1M8 1L15 8L8 15" stroke="#413F41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="px-[50px] pt-8 pb-10">
        {/* Logo */}
        <img src={logoNew} alt="Eco Baltia Vide" className="h-[46px] w-auto mb-8" />

        {/* Nav + Social + Scroll-to-top row with border */}
        <div className="border-b border-border pb-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-0">
            {/* Nav links */}
            <nav className="flex gap-6">
              {footerNavItems.map((item) => (
                <a key={item} href="#" className="font-outfit font-semibold text-base text-neutral-700 hover:text-foreground leading-7">
                  {item}
                </a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-10 ml-16">
              <a href="#" className="hover:opacity-70">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:opacity-70">
                <TwitterIcon />
              </a>
              <a href="#" className="hover:opacity-70">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Scroll to top */}
          <button onClick={scrollToTop} className="hover:opacity-70 shrink-0">
            <ScrollToTopIcon />
          </button>
        </div>

        {/* Copyright and contact info */}
        <div className="flex flex-col gap-8 font-outfit text-sm text-neutral-700">
          <div>
            <p>Visas tiesības aizsargātas</p>
            <p>
              Izstrāde: <span className="text-zinc-400">BRIGHT</span>
            </p>
          </div>
          <div>
            <p>Tālrunis: 8717; 67 799 999</p>
            <p>E-pasts: info@ecobaltiavide.lv</p>
            <p>Adrese: Getliņu iela 5, Rumbula, Stopiņu pagasts, Ropažu novads, LV-2121</p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm">
            {policyLinks.map((link) => (
              <a key={link.label} href="#" className={`hover:underline ${link.underline ? "underline" : ""}`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
