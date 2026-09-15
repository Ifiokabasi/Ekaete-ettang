const events = [
  { date: "DEC 8", mode: "ONLINE", title: "DISCIPLESHIP WORKSHOP" },
  { date: "DEC 8", mode: "ONLINE", title: "DISCIPLESHIP WORKSHOP" },
  { date: "DEC 8", mode: "ONLINE", title: "DISCIPLESHIP WORKSHOP" },
  { date: "DEC 8", mode: "ONLINE", title: "DISCIPLESHIP WORKSHOP" },
];

export default function UpcomingEvents() {
  return (
    <section
      id="upcomingEvents"
      className="relative flex w-full flex-col items-center justify-center gap-2 px-6 py-24"
    >
      <h1 className="text-center text-3xl tracking-[0.3rem] sm:text-4xl md:text-[4rem] md:tracking-[0.5rem]">
        UPCOMING EVENTS
      </h1>
      <p className="mb-10 text-center tracking-[0.15rem] md:tracking-[0.2rem]">
        CLICK HERE TO WATCH PREVIOUS WORKSHOP RECORDING ON EKAETE PREMIUM
      </p>

      <div className="w-full max-w-4xl">
        {events.map((event, i) => (
          <div
            key={i}
            className="flex w-full flex-col gap-4 border-t border-black py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-6 sm:w-[220px]">
              <h3>{event.date}</h3>
              <h3>{event.mode}</h3>
            </div>

            <p className="text-lg sm:flex-1">{event.title}</p>

            <div className="flex items-center gap-3 sm:w-[300px] sm:justify-end">
              <p className="hidden text-sm sm:block">READ MORE</p>
              <button className="h-9 w-full max-w-[200px] rounded-md border-none bg-black text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                REGISTER
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
