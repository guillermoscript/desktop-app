import Link from "next/link";
import Image from "next/image";
export default function SidebarList({ children, title, link, active, image }) {
    return (
        <li>
            <Link href={link}>
                <a  aria-label="dashboard"
                    // className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gray-100">
                    <Image src={image} alt="logo" width={20} height={20} />
                    <span className="-mr-1 font-medium">{title}</span>
                </a>
            </Link>
        </li>
    )
}