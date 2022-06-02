import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";

export default function Polizas({ polizas }) {

    return (
        <>
            {/* <Layout title={polizas.title}> */}
            <Layout title="Polizas">
                {/* {infoCard.map(card => {
                    return <Card key={card.id} {...card} />
                })} */}
            </Layout>
        </>
    );
}