import Image from "next/image";

export default function Icon(
    {
        name,
        size = 24,
        className = '',
    }: Readonly<{
        name: string;
        size?: number;
        className?: string;
    }>
) {

    return (
        <Image
            src={`/icons/${name}.svg`}
            alt={name}
            width={size}
            height={size}
            className={className}
            draggable={false}
        />
    );
}