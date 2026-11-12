import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (_contexto, next) => {
  const respostaOriginal = await next();

  const resposta = new Response(respostaOriginal.body, {
    status: respostaOriginal.status,
    statusText: respostaOriginal.statusText,
    headers: respostaOriginal.headers,
  });

  resposta.headers.set("X-Content-Type-Options", "nosniff");
  resposta.headers.set("X-Frame-Options", "DENY");
  resposta.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  resposta.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  resposta.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  resposta.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );

  return resposta;
});
