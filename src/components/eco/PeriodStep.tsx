import { useState, useMemo } from "react";

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  // 0=Sun, convert to Mon=0
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

interface CalendarMonthProps {
  year: number;
  month: number;
  startDate: Date | null;
  endDate: Date | null;
  onSelectDate: (date: Date) => void;
  showNavArrow?: boolean;
  onNext?: () => void;
}

function CalendarMonth({ year, month, startDate, endDate, onSelectDate, showNavArrow, onNext }: CalendarMonthProps) {
  const monthNames = [
    "Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs",
    "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
  ];

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month === 0 ? 11 : month - 1);

  // Build grid rows of 7
  const rows: { day: number; isCurrentMonth: boolean; date: Date }[][] = [];
  let currentRow: { day: number; isCurrentMonth: boolean; date: Date }[] = [];

  // Previous month fill
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = daysInPrevMonth - i;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    currentRow.push({ day: d, isCurrentMonth: false, date: new Date(prevYear, prevMonth, d) });
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    currentRow.push({ day: d, isCurrentMonth: true, date: new Date(year, month, d) });
    if (currentRow.length === 7) {
      rows.push(currentRow);
      currentRow = [];
    }
  }

  // Next month fill
  if (currentRow.length > 0) {
    let nextDay = 1;
    while (currentRow.length < 7) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      currentRow.push({ day: nextDay, isCurrentMonth: false, date: new Date(nextYear, nextMonth, nextDay) });
      nextDay++;
    }
    rows.push(currentRow);
  }

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const isStart = (date: Date) => startDate ? isSameDay(date, startDate) : false;
  const isEnd = (date: Date) => endDate ? isSameDay(date, endDate) : false;
  const isWeekend = (colIndex: number) => colIndex >= 5;

  return (
    <div className="p-6 bg-background inline-flex flex-col justify-start items-center gap-6">
      <div className="self-stretch relative inline-flex justify-between items-center">
        <span className="font-outfit text-lg text-eco-gray">{monthNames[month]} {year}</span>
        {showNavArrow && (
          <button onClick={onNext} className="w-6 h-6 rounded-full border border-primary flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="hsl(var(--primary))" />
              <path d="M6.85742 11.3571C6.50238 11.3571 6.21456 11.645 6.21456 12C6.21456 12.355 6.50238 12.6429 6.85742 12.6429V12V11.3571ZM17.5977 12.4546C17.8488 12.2035 17.8488 11.7965 17.5977 11.5454L13.5066 7.45431C13.2555 7.20326 12.8485 7.20326 12.5974 7.45431C12.3464 7.70536 12.3464 8.1124 12.5974 8.36345L16.234 12L12.5974 15.6365C12.3464 15.8876 12.3464 16.2946 12.5974 16.5457C12.8485 16.7967 13.2555 16.7967 13.5066 16.5457L17.5977 12.4546ZM6.85742 12V12.6429L17.1431 12.6429V12V11.3571L6.85742 11.3571V12Z" fill="hsl(var(--primary))" />
            </svg>
          </button>
        )}
      </div>

      <div className="self-stretch flex flex-col gap-5 pb-4">
        {/* Weekday headers */}
        <div className="px-4 inline-flex justify-center items-center gap-5">
          {WEEKDAYS.map((d, i) => (
            <div key={i} className="size-5 text-center text-muted-foreground text-base font-medium font-outfit leading-4">{d}</div>
          ))}
        </div>

        {/* Day rows */}
        {rows.map((row, ri) => (
          <div key={ri} className="px-4 relative inline-flex justify-center items-center gap-5">
            {/* Range highlight background */}
            {startDate && endDate && (() => {
              // Find first and last in-range indices in this row
              const indices = row.map((cell, ci) => {
                const inRange = isInRange(cell.date) || isStart(cell.date) || isEnd(cell.date);
                return inRange ? ci : -1;
              }).filter(i => i >= 0);

              if (indices.length === 0) return null;

              const first = indices[0];
              const last = indices[indices.length - 1];
              const isStartRow = row.some(c => isStart(c.date));
              const isEndRow = row.some(c => isEnd(c.date));

              // Calculate positioning: each cell is 20px (size-5) + 20px gap, px-4 = 16px offset
              const left = first * 40;
              const width = (last - first) * 40 + 20;

              return (
                <div
                  className="absolute h-10 bg-accent -top-2.5"
                  style={{
                    left: `${16 + left}px`,
                    width: `${width}px`,
                    borderTopLeftRadius: isStartRow ? '24px' : '0',
                    borderBottomLeftRadius: isStartRow ? '24px' : '0',
                    borderTopRightRadius: isEndRow ? '24px' : '0',
                    borderBottomRightRadius: isEndRow ? '24px' : '0',
                  }}
                />
              );
            })()}

            {row.map((cell, ci) => {
              const weekend = isWeekend(ci);
              const dimmed = !cell.isCurrentMonth || weekend;
              const start = isStart(cell.date);
              const end = isEnd(cell.date);
              const selectable = cell.isCurrentMonth && !weekend;

              return (
                <button
                  key={ci}
                  onClick={() => selectable && onSelectDate(cell.date)}
                  className={`size-5 relative z-10 text-center text-base font-medium font-outfit leading-4 ${
                    start || end
                      ? "rounded-full"
                      : ""
                  } ${dimmed ? "opacity-20" : ""} text-foreground`}
                  disabled={!selectable}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderSummary() {
  const items = [
    { label: "Būvniecības atkritumu izvešanas pakalpojums", price: "€ 224.40" },
    { label: "Konteinera noma noteiktajam periodam", price: "€ 0.00" },
    { label: "Summa bez PVN", price: "€ 224.40" },
    { label: "PVN (21%)", price: "€ 47.12" },
  ];

  return (
    <div className="flex-1 h-96 p-5 bg-muted/20 rounded-3xl inline-flex flex-col justify-between items-start">
      <div className="self-stretch flex flex-col gap-5">
        <h3 className="font-outfit font-bold text-2xl text-eco-gray leading-10">
          Pasūtījuma informācija
        </h3>
        <div className="self-stretch flex flex-col gap-2">
          {items.map((item, i) => (
            <div key={i} className="self-stretch pb-2 border-b border-foreground inline-flex justify-between items-center">
              <span className="font-outfit text-sm text-eco-gray leading-5">{item.label}</span>
              <span className="font-outfit text-sm text-eco-gray leading-5">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch inline-flex justify-between items-center">
        <span className="font-outfit text-base text-eco-gray leading-6">Kopsumma ar PVN:</span>
        <span className="font-outfit font-black text-2xl text-foreground leading-6">€ 271.52</span>
      </div>
    </div>
  );
}

export default function PeriodStep() {
  const now = new Date();
  const [baseMonth, setBaseMonth] = useState({ year: now.getFullYear(), month: now.getMonth() });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectingEnd, setSelectingEnd] = useState(false);

  const secondMonth = useMemo(() => {
    const m = baseMonth.month + 1;
    return m > 11
      ? { year: baseMonth.year + 1, month: 0 }
      : { year: baseMonth.year, month: m };
  }, [baseMonth]);

  const handleNext = () => {
    setBaseMonth(prev => {
      const m = prev.month + 1;
      return m > 11 ? { year: prev.year + 1, month: 0 } : { year: prev.year, month: m };
    });
  };

  const handleSelectDate = (date: Date) => {
    if (!selectingEnd || !startDate) {
      setStartDate(date);
      setEndDate(null);
      setSelectingEnd(true);
    } else {
      if (date <= startDate) {
        setStartDate(date);
        setEndDate(null);
      } else {
        setEndDate(date);
        setSelectingEnd(false);
      }
    }
  };

  return (
    <div className="self-stretch inline-flex justify-start items-start gap-8">
      {/* Calendar container */}
      <div className="p-5 rounded-3xl outline outline-1 outline-secondary flex justify-start items-start gap-5">
        <CalendarMonth
          year={baseMonth.year}
          month={baseMonth.month}
          startDate={startDate}
          endDate={endDate}
          onSelectDate={handleSelectDate}
        />
        <CalendarMonth
          year={secondMonth.year}
          month={secondMonth.month}
          startDate={startDate}
          endDate={endDate}
          onSelectDate={handleSelectDate}
          showNavArrow
          onNext={handleNext}
        />
      </div>

      {/* Order summary */}
      <OrderSummary />
    </div>
  );
}
