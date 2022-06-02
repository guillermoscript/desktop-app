import Link from "next/link";

export default function Footer() {
    return (
        <footer className='flex justify-center items-center bg-gray-800 py-4'>
            <div className='text-white text-center'>
                <ul>
                    <li>
                        <Link href='/home'>
                            <a className='text-white'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/next'>
                            <a className='text-white'>Next page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/polizas'>
                            <a className='text-white'>Polizas</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}