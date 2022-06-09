import Card from "../Card/Card"

export default function Main() {
    
    return (
        <div className="px-6 pt-6 2xl:container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {infoCard.map(card => {
                    return <Card key={card.id} {...card} />
                })}
            </div>
        </div>
    )
}