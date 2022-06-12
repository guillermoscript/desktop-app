import Head from "next/head";
import Image from "next/image";
import Search from "../Search/Search";
import SearchMobile from "../Search/SearchMobile";
import HeaderWidget from "./HeaderWidget";

export default function Header({ children, title }) {

    const headerWidget = [
        {
            title: "chat",
            image: "/images/message.svg"
        },
        {
            title: "notifications",
            image: "/images/notification.svg"
        }
    ]

    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>

            <header className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 hidden
                        className="text-2xl text-gray-600 font-medium lg:block">{title}</h5>

                    <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                        <Image src="/images/burguer-menu.svg" alt="menu" width={24} height={24} />
                    </button>

                    <div className="flex space-x-4">
                        <Search />
                        <SearchMobile />
                        {headerWidget.map((item, index) => (
                            <HeaderWidget {...item} key={index} />
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}