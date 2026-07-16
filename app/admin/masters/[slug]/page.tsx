export default function AdminEditMasterPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Editar Mestrado</h1>
        <p className="text-secondary">Slug: {params.slug}. Formulário em desenvolvimento.</p>
      </div>
    </div>
  );
}
