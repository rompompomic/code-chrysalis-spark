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
    <section className="bg-background px-[130px] py-14 w-full relative overflow-hidden">
      {/* Decorative Vector */}
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <svg width="593" height="419" viewBox="0 0 925 925" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M822.835 0.0332628C623.823 0.0332628 462.5 161.333 462.5 360.317V0.0332628H360.335C161.323 0.0332628 0 161.333 0 360.317V822.85V925H102.165C301.177 925 462.5 763.7 462.5 564.717V925H564.665C763.677 925 925 763.7 925 564.717V0H822.835V0.0332628Z" fill="#ECF3CB"/>
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="font-outfit font-bold text-5xl text-foreground mb-12">
          Kontaktinformācija
        </h2>

        <div className="flex flex-col gap-8">
          <h3 className="font-outfit font-black text-2xl text-foreground leading-10">
            Būvgružu konteinera noma:
          </h3>

          <div className="flex gap-10">
            {contacts.map((person) => (
              <div key={person.name} className="flex flex-col gap-5">
                <div className="flex flex-col gap-0.5">
                  <span className="font-outfit font-black text-lg text-foreground leading-7">
                    {person.name}
                  </span>
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
