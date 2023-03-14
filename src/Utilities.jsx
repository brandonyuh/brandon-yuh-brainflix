const locale = "en-US";

const convertDate = (timeStamp) => {
  let newDate = new Date(timeStamp);
  return newDate.toLocaleDateString();
};

const relativeTime = (timeStamp) => {
  if(!timeStamp) return "";
  const formatter = new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
    style: "long",
  });
  const seconds = (new Date() - new Date(timeStamp)) / 1000;

  let number = 0;
  let unit = "";
  if (seconds < 60) {
    number = Math.floor(seconds);
    unit = "second";
  } else if (seconds < 3600) {
    number = Math.floor(seconds / 60);
    unit = "minute";
  } else if (seconds < 86400) {
    number = Math.floor(seconds / 3600);
    unit = "hour";
  } else if (seconds < 2620800) {
    number = Math.floor(seconds / 86400);
    unit = "day";
  } else if (seconds < 31449600) {
    number = Math.floor(seconds / 2620800);
    unit = "month";
  } else {
    number = Math.floor(seconds / 31449600);
    unit = "year";
  }
  return formatter.format(-number, unit);
};

const formatNumber = (number) => {
  if(!number) return 0;
  const returnNumber = number.toString().split(",").join("");
  return new Intl.NumberFormat(locale).format(returnNumber);
}

export { convertDate, relativeTime, formatNumber};
