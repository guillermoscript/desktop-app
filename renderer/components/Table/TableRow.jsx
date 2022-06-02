export default function TableRow({ data }) {

    let rows = []
    for (const property in data) {
        const value = data[property]; 
        rows.push(<td className="px-4 py-3 text-sm">{value}</td>)
    }

    return rows;
}