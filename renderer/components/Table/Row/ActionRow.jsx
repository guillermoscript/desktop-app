import Image from "next/image";
import Link from "next/link";

export default function ActionRow({ image, link }) {

    return (
        <>
            <Link href={link}>
                <button>
                    <a aria-label="action"
                        className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1">
                        <Image src={image} alt="logo" width={20} height={20} />
                    </a>
                </button>
            </Link>
        </>
    )
}