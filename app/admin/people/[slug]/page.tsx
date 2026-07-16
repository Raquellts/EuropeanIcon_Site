export default function AdminEditPersonPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Editar Pessoa</h1>
        <p className="text-secondary">Slug: {params.slug}. Em desenvolvimento.</p>
      </div>
    </div>
  );
}
