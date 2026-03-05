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
    <section className="bg-background px-[135px] py-14 w-full relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -right-[200px] -top-[300px] w-[1472px] h-[1424px] opacity-30">
        <div className="w-full h-full bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="font-outfit font-bold text-5xl text-foreground mb-12">
          Kontaktinformācija
        </h2>

        <div className="flex flex-col gap-8">
          <h3 className="font-outfit font-black text-2xl text-foreground">
            Būvgružu konteinera noma:
          </h3>

          <div className="flex gap-10">
            {contacts.map((person) => (
              <div key={person.name} className="flex flex-col gap-5">
                <div className="flex flex-col gap-0.5">
                  <span className="font-outfit font-black text-lg text-foreground">
                    {person.name}
                  </span>
                  <span className="font-outfit text-xs text-primary border border-primary rounded-full px-2 py-1.5 w-fit">
                    {person.role}
                  </span>
                </div>
                <div className="font-outfit font-light text-base text-foreground leading-relaxed">
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
