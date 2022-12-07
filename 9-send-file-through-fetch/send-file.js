const f = Bun.file("./sample.pdf");

console.log(f);

const req = new Request({
  url: "https://buntest.free.beeceptor.com",
  method: "POST",
  body: await f.arrayBuffer(),
  headers: {
    "content-type": "application/pdf",
  },
});
const res = await fetch(req);
console.log(res.ok, res.status);
