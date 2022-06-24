import InputGroup from "../forms/InputGroup"

export default function Modal({ title, data, handleSubmit, submitFunction, setShowModal }) {

    const onSubmit = data => {
        console.log(data);
        submitFunction(data).then(res => {
            console.log(res);
            setShowModal(false);
        }).catch(err => {
            console.log(err);
        })
    };


    return (
        <div id="add-user-modal" className="overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full flex">
            <div className="bg-gray-700 opacity-60 w-full h-full fixed"></div>
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                <div className="bg-white rounded-lg shadow relative">

                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl text-gray-700 font-semibold">
                            {title}
                        </h3>
                        <button onClick={() => {
                            setShowModal(false)
                        }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="add-user-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6 grid grid-cols-6 gap-6">
                                {data.map(input => {
                                    return <InputGroup key={input.id} {...input} />
                                })}
                            </div>
                            <div className="items-center p-6 border-t border-gray-200 rounded-b">
                                <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Añadir</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}