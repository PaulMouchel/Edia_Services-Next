const Intro = ({ intro }) => {
    return (
        <section className="mt-4 bg-bg bg-cover border-b-4 border-gray-700" id='intro'>
            <div className="bg-opacity-70 bg-blue relative pt-80">
                <div className="pb-24 flex justify-center">
                    <div className=" text-white mx-12">
                        <ul>
                            {intro.map((item, index) => 
                                <li 
                                key={index}
                                className="text-2xl my-6">
                                    {item.fields.text}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;