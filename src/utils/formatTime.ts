import set from "date-fns/set";

function formatTime(time: string) {
  const [hours, minutes] = time.split(":");
  return set(new Date(), {
    hours: +hours + 3,
    minutes: +minutes,
    seconds: 0,
    milliseconds: 0,
  });
}
export default formatTime;
