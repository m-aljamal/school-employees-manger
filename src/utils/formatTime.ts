function formatTime(time: string) {
  const [hours, minutes] = time.split(":");

  const date = new Date();
  date.setUTCHours(+hours);
  date.setUTCMinutes(+minutes);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);

  return date;
}
export default formatTime;
