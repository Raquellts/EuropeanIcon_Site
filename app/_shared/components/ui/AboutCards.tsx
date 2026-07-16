
interface AboutCardProps {
  icon: React.ReactNode;
    title?: string;
    description: string;
    type: 'about' | 'institute' | 'contact';

}


export default function AboutCard({ icon, title, description, type }: AboutCardProps) {
    return (
          <div className={`${type === 'about' ? 'rounded-2xl border border-border bg-surface p-8' : 'flex gap-4 items-center'}`}>
            <div className={`bg-gold text-black ${type === 'about' ? 'inline-flex rounded-xl p-3 mb-5 ' : 'inline-flex rounded-xl p-3 h-fit shrink-0'}`}>
              {icon}
            </div>
            <div>

            <h3 className={`font-semibold ${type === 'about' ? 'text-xl text-primary mb-3' : type === 'institute' ? 'text-md text-primary' : ''}`}>{title}</h3>

            <p className={`text-secondary leading-relaxed ${type === 'about' ? 'text-md' : type === 'institute' ? 'text-sm' : ''}`}>
              {description}
            </p>
            </div>
          </div>
    )
}