export function GET() {
  return new Response(
    JSON.stringify({
      autenticado: false,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store, private",
        Vary: "Cookie",
      },
    },
  );
}
