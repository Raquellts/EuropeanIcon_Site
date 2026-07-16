import Image from "next/image";
import { institute } from "../../../../src/data/institute";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={institute.logo}
              alt={institute.name}
              width={50}
              height={50}
            />
            <span className="text-sm text-muted">{institute.name}</span>
          </div>
          <p className="text-xs text-muted text-center">
            &copy; {new Date().getFullYear()} {institute.name}, Since 2017.
            Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <a
              href={institute.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Site oficial
            </a>
            <span>·</span>
            <a
              href={`mailto:${institute.contact.email}`}
              className="hover:text-secondary transition-colors"
            >
              {institute.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
