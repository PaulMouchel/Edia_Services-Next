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
        <section className="bg-lightBlue py-12" id="about">
            <div className="w-screen px-auto p-12 transform -rotate-3">
                <div className="bg-darkBlue text-white text-xl p-4 mx-auto" style={{maxWidth:"1024px"}}>
                    <h3>Ce n’est pas juste de la programmation, ce sont des solutions.</h3>
                </div>
                <div className="bg-darkBlue text-white text-lg p-4 mt-2 mx-auto"  style={{maxWidth:"1024px"}}>
                    <ul>
                        <li>Besoins en souplesse de charge …</li>
                        <li>Besoins en compétences d’automatisme spécifique et expérimenté …</li>
                        <li>… EDIA Services répond à votre besoin en services</li>
                    </ul>
                </div>
                <div className="bg-blue text-white text-md p-4 -mt-2 mx-auto transform translate-x-12"  style={{maxWidth:"1024px"}}>
                    <span>L’entreprise d’ici 2040 :</span>
                    <ul  className="list-disc pl-8">
                        <li>
                            La génération Z arrive dans la vie active,
                        </li>
                        <li>
                            Virtualisation des services et l’ubérisation, 
                        </li>
                        <li>
                            Changement des métiers, 
                        </li>
                        <li>
                            Les entreprises doivent trouver des solutions innovantes et respectueuses de l’environnement
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-12">
                <div className="flex justify-evenly items-center">
                    <div>
                        <h3 className="text-xl italic font-bold">EDIA Services a été créé en 2017 par Mathieu PANNIER, automaticien, chef de projet depuis 20 ans.</h3>
                        <p className="text-white text-xl italic font-bold">Nous intervenons pour nos clients intégrateurs dans plusieurs secteurs d’activités :</p>
                        <ul>
                            {secteurs.map((secteur, index) => 
                            <li key={index}>- {secteur}</li>)}
                        </ul>
                        <div className="mt-4">
                            Nous avons une forte expérience en ilots et lignes robotisés dans divers industries (automobile, agroalimentaire, manufacture)
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/images/pdg.jpg" 
                            height={200}
                            width={200}
                            layout="fixed"
                            alt="Mathieu PANNIER"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default About;