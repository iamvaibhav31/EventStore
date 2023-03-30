export function timeFormate(today: Date) {
  const locale = "en";
  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  //   const hour = today.getHours();
  //   const wish = `Good ${
  //     (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  //   }, `;

  //   const time = today.toLocaleTimeString(locale, {
  //     hour: "numeric",
  //     hour12: true,
  //     minute: "numeric",
  //   });

  return {
    date,
    //     time,
    //     wish,
  };
}
