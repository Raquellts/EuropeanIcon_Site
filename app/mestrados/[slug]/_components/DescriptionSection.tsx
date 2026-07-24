import Image from "next/image";
import { masterAssetPath } from "../../../../src/data/paths";
import type { Master } from "../../../../src/data/masters/index";
import type { Person } from "../../../../src/data/people";

interface DescriptionSectionProps {
  master: Master;
  slug: string;
  coordinator?: Person;
}

export default function DescriptionSection({
  master,
  slug,
  coordinator,
}: DescriptionSectionProps) {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            {master.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className={`text-secondary leading-relaxed lg:text-lg text-sm text-justify${i > 0 ? " mt-6" : ""}`}
              >
                {paragraph}
              </p>
            ))}
            {master.certification && (
              <div className="mt-6 p-4 bg-surface/50 rounded-xl border border-border">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  Certificação
                </p>
                <p className="text-sm text-secondary">
                  {master.certification}
                </p>
              </div>
            )}
          </div>
          {master.aboutImage && (
            <div className="relative rounded-2xl overflow-hidden border border-border lg:col-span-2 max-w-md mx-auto lg:max-w-none">
              {master.aboutVideo ? (
                <video
                  src={master.aboutVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              ) : (
                <Image
                  src={master.aboutImage}
                  alt={master.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              )}
              {coordinator && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={masterAssetPath(
                        slug.replace("mestrado-", ""),
                        "coordinator.webp",
                      )}
                      alt={coordinator.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                    />
                    <div>
                      <p className="text-white font-semibold">
                        {coordinator.name}
                      </p>
                      <p className="text-white/80 text-sm">
                        {coordinator.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
