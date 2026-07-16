import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import FlagFind from "./FlagFind";

interface ParticipantCardProps {
  slug: string;
  pName: string;
  role: string;
  country?: string;
  countryCode?: string;
}

export default function ParticipantCard({
  slug,
  pName,
  role,
  country,
  countryCode,
}: ParticipantCardProps) {
  return (
    <Link
      key={slug}
      href={`/forum/${slug}`}
      className="flex flex-col justify-between group rounded-xl border border-border bg-surface p-4 text-center hover:border-gold/30 transition-all duration-300"
    >
      <div className="aspect-square rounded-full bg-surface-hover mx-auto mb-3 w-20 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={`/images/participantes/${slug}.webp`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-sm text-primary group-hover:text-gold transition-colors">
        {pName}
      </h3>
      <p className="text-xs text-muted mt-1 line-clamp-2">{role}</p>
      <div>
        {country && countryCode && (
          <>
            <hr className="my-2 opacity-25" />
            <div className="flex flex-col items-center">
              <FlagFind countryCode={countryCode} width={20} height={20} />
            </div>
          </>
        )}
        <ArrowUpRight
          size={12}
          className="text-muted group-hover:text-gold mx-auto mt-2 transition-colors"
        />
      </div>
    </Link>
  );
}
