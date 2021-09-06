import Image from 'next/image'

const secteurs = [
    "Automobile et manufactures diverses (formage, assemblage mutli-métier, peinture, convoyage)",
    "Agro-alimentaire et conditionnement (lavage, dosage, conditionnement)",
    "Industrie chimique et environnement (mélangeurs, STEP, incinérateur)",
    "Sécurité des personnes et des machines",
    "Gestion et sécurité des bâtiments"
]

const About = () => {
    return (
        <section className="bg-lightBlue p-12" id="about">
            <div className="bg-darkBlue text-white text-xl p-4 mr-8">
                <h3>Ce n’est pas juste de la programmation, ce sont des solutions.</h3>
            </div>
            <div className="bg-darkBlue text-white text-lg p-4 mt-2 mr-8">
                <ul>
                    <li>Besoins en souplesse de charge …</li>
                    <li>Besoins en compétences d’automatisme spécifique et expérimenté …</li>
                    <li>… EDIA Services répond à votre besoin en services</li>
                </ul>
            </div>
            <div className="bg-blue text-white text-md p-4 -mt-2 ml-8">
                <span>L’entreprise d’ici 2040 :</span>
                <ul>
                    <li>
                        l  La génération Z arrive dans la vie active,
                    </li>
                    <li>
                        l  Virtualisation des services et l’ubérisation, 
                    </li>
                    <li>
                        l  Changement des métiers, 
                    </li>
                    <li>
                        l  Les entreprises doivent trouver des solutions innovantes et respectueuses de l’environnement
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl">EDIA Services a été créé en 2017 par Mathieu PANNIER, automaticien, chef de projet depuis 20 ans.</h3>
                <p className="text-white text-xl">Nous intervenons pour nos clients intégrateurs dans plusieurs secteurs d’activités :</p>
                <Image
                    src="/images/pdg.jpg" 
                    height={100}
                    width={100}
                    layout="fixed"
                    alt="Mathieu PANNIER"
                />
            </div>
            <div>
                <ul>
                    {secteurs.map((secteur, index) => 
                    <li key={index}>- {secteur}</li>)}
                </ul>
            </div>
                <div>
                <div className=" text-white w-screen">


                    
                   

    






Nous avons une forte expérience en ilots et lignes robotisés dans divers industries
(automobile, agroalimentaire, manufacture)
                </div>
            </div>

            
        </section>
    )
}

export default About;