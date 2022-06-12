import Image from "next/image";
import Table from "../Table/Table";

export default function Card({ title, image, link, active, subtitle, extract, rows }) {
    console.log(rows);
    return (
        <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                    <h5 className="text-xl text-gray-600 text-center">{title}</h5>
                    <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-3xl font-bold text-gray-700">{subtitle}</h3>
                        {/* <div className="flex items-end gap-1 text-green-500">
                            <Image src="/images/icons/up.svg" width="10" height="10" />
                            <span>2%</span>
                        </div> */}
                    </div>
                    <span className="block text-center text-gray-500">{extract}</span>
                </div>
             <Table rows={rows} />
            </div>
        </div>
    )
}