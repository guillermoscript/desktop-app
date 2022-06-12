import Image from "next/image";

export default function Search() {
    return (
        <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <Image src="/images/search.svg" alt="search" width={15} height={15} />
                </span>
                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Buscar"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
            </div>
        </div>
    )
}