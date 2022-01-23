async function client(
  endpoind: string,
  { data, headers: customHeaders, ...customeConfig }: any = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": "application/json",
      ...customHeaders,
    },
    ...customeConfig,
  };

  return window
    .fetch(`${process.env.API_URL}${endpoind}`, config)
    .then(async (res) => {
      if (res.status === 401) {
        // await logout();
        // window.location.reload();
        // clear cache
        window.location.assign(window.location + "?refresh=true");
        return Promise.reject({ message: "الرجاء تسجيل الدخول" });
      }
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
export { client };
