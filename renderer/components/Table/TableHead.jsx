export default function TableHead({ names }) {
    return (
        <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">

                {names.map((el, key) => {
                    return <th key={key} className="px-4 py-3">{el}</th>
                })}
            </tr>
        </thead>
    )
}