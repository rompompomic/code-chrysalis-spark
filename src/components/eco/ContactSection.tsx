interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  email: string;
}

const contacts: ContactPerson[] = [
  {
    name: "Raivis Temnovs",
    role: "Pārdošanas projektu vadītājs",
    phone: "+371 25589076",
    email: "raivis.temnovs@ecobaltiavide.lv",
  },
  {
    name: "Ieva Kārkliņa",
    role: "Pārdošanas projektu vadītājs",
    phone: "+37127894555",
    email: "ieva.karklina@ecobaltiavide.lv",
  },
];

export default function ContactSection() {
  return (
    <section className="bg-background px-5 lg:px-[130px] py-8 lg:py-14 w-full relative overflow-hidden">
      {/* Decorative Vector */}
      <div className="absolute h-[1424px] right-[-750px] top-[-500px] w-[1472px] pointer-events-none hidden lg:block">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472.41 1424.13">
            <path
              d="M894.835 499.167C695.823 499.167 534.5 660.467 534.5 859.451V499.167H432.335C233.323 499.167 72 660.467 72 859.451V1321.98V1424.13H174.165C373.177 1424.13 534.5 1262.83 534.5 1063.85V1424.13H636.665C835.677 1424.13 997 1262.83 997 1063.85V499.134H894.835V499.167Z"
              fill="#ECF3CB"
            />
          </svg>
        </div>
      </div>

      {/* Mobile decorative vector - smaller */}
      <div className="absolute h-[712px] right-[-200px] top-[-40px] w-[700px] pointer-events-none lg:hidden">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472.41 1424.13">
            <path
              d="M894.835 499.167C695.823 499.167 534.5 660.467 534.5 859.451V499.167H432.335C233.323 499.167 72 660.467 72 859.451V1321.98V1424.13H174.165C373.177 1424.13 534.5 1262.83 534.5 1063.85V1424.13H636.665C835.677 1424.13 997 1262.83 997 1063.85V499.134H894.835V499.167Z"
              fill="#ECF3CB"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <h2 className="font-outfit font-bold text-2xl lg:text-5xl text-foreground mb-6 lg:mb-12">Kontaktinformācija</h2>

        <div className="flex flex-col gap-6 lg:gap-8">
          <h3 className="font-outfit font-black text-2xl text-foreground leading-10">Būvgružu konteinera noma:</h3>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {contacts.map((person) => (
              <div key={person.name} className="flex flex-col gap-5">
                <div className="flex flex-col gap-0.5">
                  <span className="font-outfit font-black text-lg text-foreground leading-7">{person.name}</span>
                  <span className="font-outfit text-xs text-gray-800 border border-gray-800 rounded-full px-2 py-1.5 w-fit leading-3">
                    {person.role}
                  </span>
                </div>
                <div className="font-outfit font-light text-base text-foreground leading-6">
                  <p>tel.: {person.phone}</p>
                  <p>e-pasts: {person.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
