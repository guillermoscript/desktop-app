import Image from "next/image";

export default function HeaderWidget({ title, image }) {
    return (
        <button aria-label={title}
            className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <Image src={image} alt={title} width={20} height={20} />
        </button>
    )
}