import Image from "next/image";

export default function SearchMobile() {
    return (
        <button aria-label="search"
            className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
            <Image src="/images/search.svg" alt="search" width={18} height={18} />
        </button>
    )
}