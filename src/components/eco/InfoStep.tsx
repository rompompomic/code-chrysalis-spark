import { useState } from "react";
import sebLogo from "@/assets/payment/seb.png";
import swedbankLogo from "@/assets/payment/swedbank.png";
import luminorLogo from "@/assets/payment/luminor.png";
import revolutLogo from "@/assets/payment/revolut.svg";
import applePayLogo from "@/assets/payment/ApplePay.svg";
import googlePayLogo from "@/assets/payment/GooglePay.svg";
import visaLogo from "@/assets/payment/visa-logo.svg";
import mastercardLogo from "@/assets/payment/mastercard.svg";

type PersonType = "fiziska" | "juridiska";

function PersonToggle({ value, onChange }: {value: PersonType;onChange: (v: PersonType) => void;}) {
  return (
    <div className="inline-flex">
      <button
        onClick={() => onChange("fiziska")}
        className={`px-5 py-3 rounded-l-full font-outfit font-semibold text-sm lg:text-base transition-colors ${
        value === "fiziska" ? "bg-secondary text-secondary-foreground" : "bg-accent text-secondary-foreground"}`
        }>
        
        Fiziska persona
      </button>
      <button
        onClick={() => onChange("juridiska")}
        className={`px-5 py-3 rounded-r-full font-outfit font-semibold text-sm lg:text-base transition-colors ${
        value === "juridiska" ? "bg-secondary text-secondary-foreground" : "bg-accent text-secondary-foreground"}`
        }>
        
        Juridiska persona
      </button>
    </div>);

}

function FormField({ label, isTextarea }: {label: string;isTextarea?: boolean;}) {
  return (
    <div className="self-stretch flex flex-col gap-2">
      <div className="px-6">
        <span className="font-outfit font-semibold text-base text-eco-gray">{label}</span>
      </div>
      {isTextarea ?
      <textarea className="self-stretch h-28 px-6 py-4 rounded-3xl outline outline-1 outline-eco-gray bg-transparent font-outfit text-base text-foreground resize-none focus:outline-secondary focus:outline-2 transition-colors" /> :

      <input className="self-stretch h-14 px-6 py-4 rounded-full outline outline-1 outline-eco-gray bg-transparent font-outfit text-base text-foreground focus:outline-secondary focus:outline-2 transition-colors" />
      }
    </div>);

}

function CheckboxItem({ children, defaultChecked }: {children: React.ReactNode;defaultChecked?: boolean;}) {
  const [checked, setChecked] = useState(defaultChecked ?? false);

  return (
    <label className="self-stretch flex items-start gap-2 cursor-pointer">
      <div className="w-5 h-7 flex items-center justify-center shrink-0 pt-1">
        <button
          onClick={() => setChecked(!checked)}
          className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
          checked ? "bg-secondary border-secondary" : "border-secondary bg-transparent"}`
          }>
          
          {checked &&
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        </button>
      </div>
      <span className="flex-1 font-outfit text-sm lg:text-base text-eco-gray leading-5 lg:leading-6">{children}</span>
    </label>);

}

type PaymentMethod = "transfer" | "bank" | "applegoogle" | "card";

function BankLogos() {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      <div className="h-6 px-2 bg-background rounded-full flex items-center">
        <img src={sebLogo} alt="SEB" className="h-3" />
      </div>
      <div className="h-6 px-2 bg-background rounded-full flex items-center">
        <img src={swedbankLogo} alt="Swedbank" className="h-3" />
      </div>
      <div className="h-6 px-2 bg-background rounded-full flex items-center justify-center" style={{ backgroundColor: "#d90730" }}>
        <span className="text-[10px] font-bold text-white leading-none">Citadele</span>
      </div>
      <div className="h-6 px-2 bg-background rounded-full flex items-center">
        <img src={revolutLogo} alt="Revolut" className="h-2.5" />
      </div>
      <div className="h-6 px-2 bg-background rounded-full flex items-center">
        <img src={luminorLogo} alt="Luminor" className="h-3" />
      </div>
    </div>);

}

function PaymentMethodSelector({ value, onChange }: {value: PaymentMethod;onChange: (v: PaymentMethod) => void;}) {
  return (
    <div className="self-stretch flex flex-col gap-3">
      <h3 className="font-outfit font-bold text-lg lg:text-2xl text-eco-gray leading-7 lg:leading-10">Izvēlies maksājuma metodi</h3>
      <div className="flex flex-col gap-2">
        {/* Transfer */}
        <button
          onClick={() => onChange("transfer")}
          className={`self-stretch pl-6 pr-4 py-3 rounded-[20px] lg:rounded-full font-outfit font-semibold text-sm lg:text-base text-secondary-foreground transition-colors ${
          value === "transfer" ? "bg-secondary" : "bg-accent"}`
          }>
          
          <span className="pb-0.5">Norēķināties ar pārskaitījumu</span>
        </button>

        <span className="font-outfit font-semibold text-sm lg:text-base text-foreground">Vai</span>

        {/* Bank */}
        <button
          onClick={() => onChange("bank")}
          className={`self-stretch pl-6 pr-4 py-3 rounded-[20px] lg:rounded-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 transition-colors ${
          value === "bank" ? "bg-secondary" : "bg-accent"}`
          }>
          
          <span className="font-outfit font-semibold text-sm lg:text-base text-secondary-foreground pb-0.5 text-left">Internetbanka</span>
          <BankLogos />
        </button>

        {/* Apple/Google Pay */}
        <button
          onClick={() => onChange("applegoogle")}
          className={`self-stretch pl-6 pr-4 py-3 rounded-[20px] lg:rounded-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 transition-colors ${
          value === "applegoogle" ? "bg-secondary" : "bg-accent"}`
          }>
          
          <span className="font-outfit font-semibold text-sm lg:text-base text-secondary-foreground pb-0.5 text-left">Apple Pay vai Google Pay</span>
          <div className="flex items-center gap-1">
            <div className="h-6 px-2 bg-background rounded-full flex items-center">
              <img src={applePayLogo} alt="Apple Pay" className="h-3" />
            </div>
            <div className="h-6 px-2 bg-background rounded-full flex items-center">
              <img src={googlePayLogo} alt="Google Pay" className="h-3" />
            </div>
          </div>
        </button>

        {/* Card */}
        <button
          onClick={() => onChange("card")}
          className={`self-stretch pl-6 pr-4 py-3 rounded-[20px] lg:rounded-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 transition-colors ${
          value === "card" ? "bg-secondary" : "bg-accent"}`
          }>
          
          <span className="font-outfit font-semibold text-sm lg:text-base text-secondary-foreground pb-0.5 text-left">Apmaksa ar karti</span>
          <div className="flex items-center gap-1">
            <div className="h-6 px-2 bg-background rounded-full flex items-center">
              <img src={visaLogo} alt="Visa" className="h-3" />
            </div>
            <div className="h-6 px-2 bg-background rounded-full flex items-center">
              <img src={mastercardLogo} alt="Mastercard" className="h-3" />
            </div>
          </div>
        </button>
      </div>
    </div>);

}

function OrderSummaryFull() {
  const details = [
  { label: "Piegādes adrese", value: "Jaunzemju iela 120 Mārupe Mārupes novads, LV-2167" },
  { label: "Konteinera tilpums", value: "5 m³" },
  { label: "Piegādes datums", value: "19.02.2026" },
  { label: "Savākšanas datums", value: "23.02.2026" },
  { label: "Maksājuma aprēķins\nBūvniecības atkritumu izvešanas pakalpojums", value: "€ 224.40" },
  { label: "Konteinera noma noteiktajam periodam", value: "€ 0.00" },
  { label: "Summa bez PVN", value: "€ 224.40" },
  { label: "PVN (21%)", value: "€ 47.12" }];


  return (
    <div className="self-stretch p-5 bg-background rounded-3xl flex flex-col gap-5">
      <h3 className="font-outfit font-bold text-lg lg:text-2xl text-eco-gray leading-7 lg:leading-10">Pasūtījuma informācija</h3>
      <div className="flex flex-col gap-2">
        {details.map((item, i) =>
        <div key={i} className="self-stretch pb-2 border-b border-foreground/20 inline-flex justify-between items-start gap-4">
            <span className="font-outfit text-sm text-eco-gray leading-5 whitespace-pre-line flex-1">{item.label}</span>
            <span className="font-outfit text-sm text-eco-gray leading-5 shrink-0">{item.value}</span>
          </div>
        )}
      </div>
      <div className="self-stretch inline-flex justify-between items-center">
        <span className="font-outfit text-base text-eco-gray leading-6">Kopsumma ar PVN:</span>
        <span className="font-outfit font-black text-lg lg:text-2xl text-foreground leading-7 lg:leading-6">€ 271.52</span>
      </div>
    </div>);

}

export default function InfoStep() {
  const [personType, setPersonType] = useState<PersonType>("fiziska");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("transfer");

  const fiziskaFields =
  <>
      <FormField label="Vārds, uzvārds" />
      <FormField label="E-pasts" />
      <FormField label="Tālrunis" />
      <FormField label="Norēķinu adrese" />
      <FormField label="Pasūtījuma piezīmes" isTextarea />
    </>;


  const juridiskaFields =
  <>
      <FormField label="Uzņēmuma nosaukums" />
      <FormField label="Juridiskā adrese" />
      <FormField label="Reģistrācijas numurs" />
      <FormField label="PVN numurs (Ja ir)" />
      <FormField label="Vārds, uzvārds" />
      <FormField label="Epasts" />
      <FormField label="Telefons" />
      <FormField label="BIS numurs (nav obligāts)" />
      <FormField label="Pasūtījuma piezīmes" isTextarea />
    </>;


  return (
    <div className="self-stretch flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* Left: Form */}
      <div className="flex-1 p-5 rounded-[44px] lg:outline lg:outline-1 lg:outline-secondary flex flex-col gap-5">
        <PersonToggle value={personType} onChange={setPersonType} />

        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-5">
            {personType === "fiziska" ? fiziskaFields : juridiskaFields}
          </div>

          <div className="flex flex-col gap-3 lg:gap-5 lg:max-w-[532px]">
            <CheckboxItem>
              Apliecinu, ka esmu iepazinies ar{" "}
              <span className="font-semibold underline">Personas datu apstrādes paziņojumu</span>
              , ķeksis nedrīkst būt ielikts pēc noklusējuma.
            </CheckboxItem>

            <CheckboxItem>
              Piekrītu saņemt no SIA &quot;Eco Baltia vide&quot; komerciāla rakstura paziņojumus (t.sk. informāciju par
              dažāda veida atkritumu apsaimniekošanas pakalpojumiem un klientu apmierinātības aptaujas). Esmu
              informēts/-a, ka no komerciālu paziņojumu saņemšanas var atteikties, nosūtot e-pastu uz:{" "}
              <span className="font-semibold">info@ecobaltiavide.lv</span>
            </CheckboxItem>

            <CheckboxItem>
              Piekrītu būvniecības atkritumu{" "}
              <span className="font-semibold underline">konteinera pasūtīšanas un lietošanas noteikumiem</span>
            </CheckboxItem>

            <CheckboxItem defaultChecked>
              Esmu informēts, ka konteinerā nedrīkst iekraut bīstamos atkritumus - riepas, šīferis, krāsas un citus,
              kas atbilstoši MK Nr. 302 no 2011.19.04. noteikumiem kvalificējas kā bīstamie/neatļautie atkritumi.
            </CheckboxItem>
          </div>
        </div>
      </div>

      {/* Right: Order summary + Payment */}
      <div className="flex-1 p-5 bg-muted/10 rounded-[44px] flex flex-col gap-5">
        <OrderSummaryFull />
        <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />
      </div>
    </div>);

}