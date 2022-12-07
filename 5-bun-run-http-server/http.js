/**
 * Run this programme and then head to:
 * http://localhost:3000/
 *
 * Run with:
 * bun run http.js
 */

export default {
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
};

console.log("running on port 3000");
