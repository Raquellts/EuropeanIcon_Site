import Image from "next/image";

export default function LogoAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="relative flex items-center justify-center">
        <div
          className="relative"
          style={{
            width: "clamp(80px, 18vw, 300px)",
            height: "clamp(80px, 18vw, 300px)",
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
            width: "clamp(100px, 25vw, 380px)",
            height: "clamp(100px, 25vw, 380px)",
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
