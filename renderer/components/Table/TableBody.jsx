export default function TableBody({ children }) {
    return (
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-800">
            {/* <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                {children}
            </tr> */}
            {children}
        </tbody>
    )
}