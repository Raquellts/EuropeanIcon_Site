import Image from "next/image";

export default function LogoAnimation() {
  const minSize = "clamp(140px, 24vw, 300px)";
  const maxsize = "clamp(180px, 30vw, 380px)";

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="relative flex items-center justify-center">
        <div
          className="relative"
          style={{
            width: minSize,
            height: minSize,
          }}
        >
          <Image
            src="/images/instituto/logos/logo_camada_1.png"
            alt=""
            fill
            sizes="300px"
            className="object-contain"
          />
        </div>
        <div
          className="absolute animate-spin-slow"
          style={{
            width: maxsize,
            height: maxsize,
          }}
        >
          <Image
            src="/images/instituto/logos/logo_camada_2.png"
            alt="Logo European & Icon Institute"
            fill
            sizes="380px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
