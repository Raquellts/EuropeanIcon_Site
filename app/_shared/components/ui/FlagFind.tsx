import Image from "next/image";

interface FlagSearchProps {
  countryCode: string;
  width?: number;
  height?: number;
}

export default function FlagSearch({
  countryCode,
  width,
  height,
}: FlagSearchProps) {
  return (
    <Image
      src={`https://www.worldometers.info/images/flags/original/${countryCode}.webp`}
      alt={countryCode}
      width={width}
      height={height}
      className="rounded"
    ></Image>
  );
}
