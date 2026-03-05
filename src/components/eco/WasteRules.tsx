const allowedItems = [
  "Asfaltu, darvu un darvas produktus – cietos atkritumus, kas rodas, atjaunojot ielu segumu",
  "Betona, cementa un dzelzsbetona konstrukcijas",
  "Betona konstrukcijas",
  "Flīzes, keramikas un ģipša materiālus",
  "Kokmateriālus",
  "Ķieģeļus un bruģi",
  "Logu un durvju rāmjus ar un bez stikliem",
  "Metālu saturošas konstrukcijas (dušas, vannas, caurules, stangas, radiatori u.c.)",
];

const prohibitedItems = [
  "Aerosolus, ķīmiskas vielas, krāsas un to iepakojumus",
  "Auto riepas un citas ar auto uzturēšanu saistītas preces un materiālus",
  "Akumulatorus un baterijas",
  "Eļļas",
  "Luminiscences spuldzes un termometrus",
  "Pelnu, karstas ogles un izdedžus",
  "Šīferi",
];

function WasteIcon({ color }: { color: string }) {
  return (
    <div
      className="size-12 rounded-full shrink-0 flex items-center justify-center"
      style={{ backgroundColor: color === "green" ? "#007A42" : "#F16027", opacity: 0.15 }}
    >
      <div
        className="size-6 rounded-full"
        style={{ backgroundColor: color === "green" ? "#007A42" : "#F16027" }}
      />
    </div>
  );
}

export default function WasteRules() {
  return (
    <section className="bg-background px-[135px] py-14 w-full">
      <h2 className="font-outfit font-bold text-5xl text-foreground mb-10">
        BŪVGRUŽU KONTEINERĀ IEVIETOT
      </h2>

      <div className="flex gap-8">
        {/* Allowed */}
        <div className="flex-1 border border-eco-green-text rounded-3xl p-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-outfit font-black text-2xl text-eco-green-text text-center">
                DRĪKST
              </h3>
              <div className="h-px w-full bg-eco-green-text" />
            </div>
            <div className="flex flex-col gap-3">
              {allowedItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <WasteIcon color="green" />
                  <span className="font-outfit font-bold text-xs text-eco-green-text uppercase leading-4">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prohibited */}
        <div className="flex-1 border border-eco-orange rounded-3xl p-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-outfit font-black text-2xl text-eco-orange text-center">
                NEDRĪKST
              </h3>
              <div className="h-px w-full bg-eco-orange" />
            </div>
            <div className="flex flex-col gap-3">
              {prohibitedItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <WasteIcon color="orange" />
                  <span className="font-outfit font-bold text-xs text-eco-orange uppercase leading-4">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-outfit text-base text-eco-gray">
              <span>* Šie ir bīstamie atkritumi. Par to nodošanu sazinies, zvanot </span>
              <span className="font-semibold">8717 </span>
              <span>vai rakstot </span>
              <span className="font-semibold">info@ecobaltiavide.lv</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
