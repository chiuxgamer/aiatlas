export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-zinc-100">
      <h1 className="text-4xl font-bold">Contacto</h1>

      <p className="mt-8 leading-8 text-zinc-400">
        ¿Tienes alguna sugerencia, has encontrado un error o quieres colaborar
        con AIAtlas? Estaremos encantados de escucharte.
      </p>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold">Información de contacto</h2>

        <div className="mt-8 space-y-4 text-zinc-300">
          <p>
            <strong>Email:</strong> aiatlasapp@gmail.com
          </p>

          <p>
            <strong>Proyecto:</strong> AIAtlas
          </p>

          <p>
            <strong>Respuesta:</strong> Intentamos responder en un plazo de
            24-72 horas.
          </p>
        </div>
      </div>

      <p className="mt-10 text-sm text-zinc-500">
        Si detectas información incorrecta sobre alguna herramienta de IA,
        puedes escribirnos y la revisaremos lo antes posible.
      </p>
    </main>
  );
}
