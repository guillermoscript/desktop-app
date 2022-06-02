export default function Row({ tds }) {

    return (
        <tr>
           {tds.map(td => {
               return <td key={td.id} className={td.tdClass}> {td.text}</td>
           })}
        </tr>
    )
}