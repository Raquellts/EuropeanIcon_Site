export default function AdminEditEventPage({ params }: { params: { serieSlug: string; edicaoSlug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Editar Evento</h1>
        <p className="text-secondary">{params.serieSlug} / {params.edicaoSlug}. Em desenvolvimento.</p>
      </div>
    </div>
  );
}
