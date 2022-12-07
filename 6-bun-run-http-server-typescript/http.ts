/**
 * Run this programme and then head to:
 * http://localhost:3000/
 *
 * And look... we can add headers in an object of the response
 *
 * Run with:
 * bun run http.ts
 */

export default {
  fetch(req: Request) {
    return new Response(`<h1>Hello World!</h1>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  port: 3000,
};

console.log("running on port 3000");
