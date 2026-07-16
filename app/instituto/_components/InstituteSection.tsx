import { institute } from "../../../src/data/institute";
import { GraduationCap, Globe, Award } from "lucide-react";
import AboutCard from "../../_shared/components/ui/AboutCards";
import Image from "next/image";

export default function InstituteSection() {
  return (
    <section
      id="instituto"
      className="mt-6 py-20 md:py-28 border-t border-border"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold header-text mb-6">
              {institute.name}
            </h2>
            <p className="text-secondary leading-relaxed mb-8">
              {institute.description}
            </p>
            <div className="space-y-6">
              <AboutCard
                type="institute"
                icon={<Award size={24} />}
                title="Missão"
                description={institute.mission}
              />

              <AboutCard
                type="institute"
                icon={<Globe size={24} />}
                title="Foco Internacional"
                description={institute.focus}
              />

              <AboutCard
                type="institute"
                icon={<GraduationCap size={24} />}
                title="Mestrados"
                description={institute.mission}
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-border bg-background overflow-hidden sparkle-dots relative">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--gold-dark)_0%,_transparent_80%)] opacity-20 absolute inset-0 w-full h-full"></div>
              <Image
                src={institute.logo}
                width={800}
                height={800}
                alt={institute.name}
                className="w-full h-full object-cover scale-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
