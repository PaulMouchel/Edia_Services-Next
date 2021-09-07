import { realisations } from "../data/realisations";

const Realisations = () => {
    return (
        <section id="realisations">
            <h2 className="text-4xl my-12 text-center">Nos Réalisations</h2>
            {realisations.map((realisation, index) =>
                <p key={index}>{realisation}</p>
            )}
        </section>
    )
}

export default Realisations;