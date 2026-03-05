import asfaltuIcon from "@/assets/waste-icons/asfaltu.png";
import flizesIcon from "@/assets/waste-icons/flizes.png";
import kiegelusIcon from "@/assets/waste-icons/kiegelus.png";
import loguIcon from "@/assets/waste-icons/logu.png";
import metaluIcon from "@/assets/waste-icons/metalu.png";
import aerosolusIcon from "@/assets/waste-icons/aerosolus.png";
import ellasIcon from "@/assets/waste-icons/ellas.png";
import pelnuIcon from "@/assets/waste-icons/pelnu.png";
import siferiIcon from "@/assets/waste-icons/siferi.png";

function ImgIcon({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-12 h-12 shrink-0 object-contain" style={{ minWidth: 48, minHeight: 48 }} />;
}

function BetonaCementaIcon() {
  return (
    <svg className="size-12 shrink-0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5762 48.5767C37.831 48.5767 48.5762 37.8315 48.5762 24.5767C48.5762 11.3218 37.831 0.57666 24.5762 0.57666C11.3213 0.57666 0.576172 11.3218 0.576172 24.5767C0.576172 37.8315 11.3213 48.5767 24.5762 48.5767Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M12.1504 27.6782H16.5028" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M32.5508 32.105H36.9032" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M21.3926 21.5298H25.745" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M24.666 26.5054H26.5119" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M17.3164 19.1548H19.1622" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M30.9551 28.0703H32.8009" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M14.8145 30.2671H24.6672" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M22.0254 16.062H31.8781" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M16.2425 13.7872L15.1399 12.9902H14.2852V24.0363H33.8006V12.9902H19.3973L16.2425 13.7872Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M38.6777 24.0361L37.4884 25.9398L37.7651 29.3176L39.4829 31.4236V34.1944L38.6777 35.0822H28.9199V24.0361H38.6777Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M9.4043 29.5613L10.2797 32.1049L9.4043 33.6948V35.0822H28.9198V24.0361H9.4043V29.5613Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
    </svg>
  );
}

function BetonaKonstrukcijasIcon() {
  return (
    <svg className="size-12 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0009 46.6409C36.5054 46.6409 46.6424 36.504 46.6424 23.9994C46.6424 11.4949 36.5054 1.35791 24.0009 1.35791C11.4963 1.35791 1.35938 11.4949 1.35938 23.9994C1.35938 36.504 11.4963 46.6409 24.0009 46.6409Z" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M12.2773 26.9258H16.3834" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M31.5234 31.1016H35.6295" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M20.9961 21.125H25.1021" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M24.0859 25.8193H25.8273" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M17.1523 18.8857H18.8937" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M30.0195 27.2964H31.7609" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M14.7891 29.3687H24.0841" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M21.5918 15.9678H30.8868" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M16.1375 13.8207L15.0974 13.0688H14.291V23.4897H32.7018V13.0688H19.1138L16.1375 13.8207Z" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M37.3031 23.4897L36.1811 25.2856L36.4421 28.4723L38.0627 30.4591V33.073L37.3031 33.9106H28.0977V23.4897H37.3031Z" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
      <path d="M9.6875 28.7021L10.5134 31.1018L9.6875 32.6017V33.9106H28.0983V23.4897H9.6875V28.7021Z" stroke="#007A42" strokeWidth="1.08049" strokeMiterlimit="10"/>
    </svg>
  );
}

function KokmaterialusIcon() {
  return (
    <svg className="size-12 shrink-0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5762 48.5767C37.831 48.5767 48.5762 37.8315 48.5762 24.5767C48.5762 11.3218 37.831 0.57666 24.5762 0.57666C11.3213 0.57666 0.576172 11.3218 0.576172 24.5767C0.576172 37.8315 11.3213 48.5767 24.5762 48.5767Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M24.4825 8.04558L7.28711 25.241L10.3618 28.3156L27.5572 11.1202L24.4825 8.04558Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M31.6348 15.1938L14.4395 32.3892L17.5141 35.4638L34.7095 18.2684L31.6348 15.1938Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M38.7892 22.3456L21.5938 39.541L24.6684 42.6157L41.8638 25.4203L38.7892 22.3456Z" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M28.0931 18.7293L24.0215 14.6536" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M30.4566 16.3716L26.3809 12.2959" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M38.3223 28.958L40.6801 26.5959" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M35.2456 25.8816L31.1699 21.8059" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M37.6089 23.5196L33.5332 19.448" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M20.9453 11.5771L23.3032 9.21924" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M21.8745 24.9524L17.7988 20.8767" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M24.23 22.5947L20.1543 18.519" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M32.0996 35.1809L34.4575 32.823" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M29.023 32.1043L24.9473 28.0286" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M31.3823 29.7464L27.3066 25.6707" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M14.7227 17.8003L17.0805 15.4465" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M15.6519 31.1753L11.5762 27.0996" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M18.0073 28.8174L13.9316 24.7417" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M25.877 41.404L28.2348 39.0461" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M22.8003 38.3274L18.7246 34.2517" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M25.1577 35.9695L21.082 31.8938" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M8.5 24.0234L10.8579 21.6697" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M30.5254 19.3776L31.1572 18.7458" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M24.2734 25.6296L24.9052 24.9978" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M18.0508 31.8527L18.6826 31.2209" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M23.375 12.2255L24.0068 11.5938" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M17.123 18.4777L17.7548 17.8459" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M10.8984 24.7004L11.5302 24.0686" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M37.6738 26.5256L38.3098 25.8938" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M31.4219 32.7819L32.0578 32.146" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M25.1992 39.0004L25.8351 38.3687" stroke="#007A42" strokeWidth="1.15332" strokeMiterlimit="10"/>
    </svg>
  );
}

function AutoRiepasIcon() {
  return (
    <svg className="size-12 shrink-0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5762 48.5767C37.831 48.5767 48.5762 37.8315 48.5762 24.5767C48.5762 11.3218 37.831 0.57666 24.5762 0.57666C11.3213 0.57666 0.576172 11.3218 0.576172 24.5767C0.576172 37.8315 11.3213 48.5767 24.5762 48.5767Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M28.3148 37.3701H20.8489C15.6293 37.3701 11.3926 31.6427 11.3926 24.5773C11.3926 17.5119 15.6293 11.7886 20.8489 11.7886H28.3148" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M28.3098 37.366C33.5324 37.366 37.7661 31.6403 37.7661 24.5773C37.7661 17.5143 33.5324 11.7886 28.3098 11.7886C23.0873 11.7886 18.8535 17.5143 18.8535 24.5773C18.8535 31.6403 23.0873 37.366 28.3098 37.366Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M13.2988 24.5767H16.8749" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M13.7656 21.3188H17.3417" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M13.7656 28.0415H17.3417" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M14.7578 31.0972H18.3338" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M14.7578 18.2095H18.3338" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M16.5449 15.2236H20.121" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M16.5449 33.9756H20.121" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M32.5714 24.5769C32.5714 21.3973 30.6637 18.8164 28.314 18.8164C25.9644 18.8164 24.0566 21.3973 24.0566 24.5769C24.0566 27.7565 25.9644 30.3374 28.314 30.3374C30.6637 30.3374 32.5714 27.7565 32.5714 24.5769Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M26.1816 29.5652C27.4535 28.5701 28.3124 26.7077 28.3124 24.5769C28.3124 22.4462 27.4535 20.5838 26.1816 19.5928" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
    </svg>
  );
}

function AkumulatorusIcon() {
  return (
    <svg className="size-12 shrink-0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5762 48.5767C37.831 48.5767 48.5762 37.8315 48.5762 24.5767C48.5762 11.3218 37.831 0.57666 24.5762 0.57666C11.3213 0.57666 0.576172 11.3218 0.576172 24.5767C0.576172 37.8315 11.3213 48.5767 24.5762 48.5767Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M20.1824 35.4656H12.0723V17.2715H14.4095H16.6724H20.4178H22.6807H25.1046V26.831" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M16.6713 15.3599H14.4043V17.2718H16.6713V15.3599Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M22.685 15.3594H20.418V17.2713H22.685V15.3594Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M15.541 19.9761V23.164" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M13.9473 21.5703H17.1352" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M19.9551 21.5703H23.143" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M38.3777 26.8306H20.1836V35.5601H38.3777V26.8306Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M20.1831 28.9282H17.916V33.4582H20.1831V28.9282Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M22.8887 31.1958H26.0766" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M24.4824 32.7858V29.6021" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M34.8379 32.7858V29.6021" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
    </svg>
  );
}

function LuminiscencesIcon() {
  return (
    <svg className="size-12 shrink-0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5762 48.5767C37.831 48.5767 48.5762 37.8315 48.5762 24.5767C48.5762 11.3218 37.831 0.57666 24.5762 0.57666C11.3213 0.57666 0.576172 11.3218 0.576172 24.5767C0.576172 37.8315 11.3213 48.5767 24.5762 48.5767Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M28.3012 14.2945C25.9268 10.3716 20.7321 9.20298 16.8917 11.821C13.4602 14.1624 12.3907 18.8616 14.4637 22.4625C15.2359 23.8004 16.3302 24.8286 17.5937 25.5099C20.1044 26.8644 22.421 28.5533 24.304 30.6965L24.944 31.4232L31.2827 27.587L30.9358 26.6827C29.9282 24.0605 29.4451 21.2732 29.4575 18.4652C29.4616 17.0447 29.09 15.6035 28.3012 14.2986V14.2945Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M31.2849 27.5782L24.9434 31.4158L27.9835 36.4395L34.325 32.602L31.2849 27.5782Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M33.0036 33.3959L29.3047 35.6343L30.6751 37.8988L34.374 35.6605L33.0036 33.3959Z" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M26.0078 33.1782L29.7573 30.9111" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M29.5469 33.1782L33.2964 30.9111" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M28.1135 29.5033L19.0371 18.6843" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
      <path d="M23.1641 16.343L28.1152 29.5034" stroke="#F16027" strokeWidth="1.15332" strokeMiterlimit="10"/>
    </svg>
  );
}

const allowedItems: { label: string; icon: React.ReactNode }[] = [
  { label: "Asfaltu, darvu un darvas produktus – cietos atkritumus, kas rodas, atjaunojot ielu segumu", icon: <ImgIcon src={asfaltuIcon} alt="Asfaltu" /> },
  { label: "Betona, cementa un dzelzsbetona konstrukcijas", icon: <BetonaCementaIcon /> },
  { label: "Betona konstrukcijas", icon: <BetonaKonstrukcijasIcon /> },
  { label: "Flīzes, keramikas un ģipša materiālus", icon: <ImgIcon src={flizesIcon} alt="Flīzes" /> },
  { label: "Kokmateriālus", icon: <KokmaterialusIcon /> },
  { label: "Ķieģeļus un bruģi", icon: <ImgIcon src={kiegelusIcon} alt="Ķieģeļus" /> },
  { label: "Logu un durvju rāmjus ar un bez stikliem", icon: <ImgIcon src={loguIcon} alt="Logu" /> },
  { label: "Metālu saturošas konstrukcijas (dušas, vannas, caurules, stangas, radiatori u.c.)", icon: <ImgIcon src={metaluIcon} alt="Metālu" /> },
];

const prohibitedItems: { label: string; icon: React.ReactNode }[] = [
  { label: "Aerosolus, ķīmiskas vielas, krāsas un to iepakojumus", icon: <ImgIcon src={aerosolusIcon} alt="Aerosolus" /> },
  { label: "Auto riepas un citas ar auto uzturēšanu saistītas preces un materiālus", icon: <AutoRiepasIcon /> },
  { label: "Akumulatorus un baterijas", icon: <AkumulatorusIcon /> },
  { label: "Eļļas", icon: <ImgIcon src={ellasIcon} alt="Eļļas" /> },
  { label: "Luminiscences spuldzes un termometrus", icon: <LuminiscencesIcon /> },
  { label: "Pelnu, karstas ogles un izdedžus", icon: <ImgIcon src={pelnuIcon} alt="Pelnu" /> },
  { label: "Šīferi", icon: <ImgIcon src={siferiIcon} alt="Šīferi" /> },
];

export default function WasteRules() {
  return (
    <section className="bg-background px-5 lg:px-[130px] py-8 lg:py-14 w-full">
      <div className="max-w-[1170px] flex flex-col gap-6 lg:gap-10">
        <h2 className="font-outfit font-bold text-2xl lg:text-5xl text-foreground uppercase">
          BŪVGRUŽU KONTEINERĀ IEVIETOT
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Allowed */}
          <div className="flex-1 self-stretch p-5 rounded-3xl outline outline-1 outline-eco-green-text flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-outfit font-black text-2xl text-eco-green-text text-center leading-10">
                DRĪKST
              </h3>
              <div className="h-px w-full bg-eco-green-text" />
            </div>
            <div className="flex flex-col gap-3">
              {allowedItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-outfit font-bold text-xs text-eco-green-text uppercase leading-4">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibited */}
          <div className="flex-1 p-5 rounded-3xl outline outline-1 outline-eco-orange flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-outfit font-black text-2xl text-eco-orange text-center leading-10">
                NEDRĪKST
              </h3>
              <div className="h-px w-full bg-eco-orange" />
            </div>
            <div className="flex flex-col gap-3">
              {prohibitedItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-outfit font-bold text-xs text-eco-orange uppercase leading-4">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-outfit text-sm lg:text-base text-eco-gray leading-6">
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
