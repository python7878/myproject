import Image from 'next/image';

function Construction() {
    return (
        <div className="h-screen w-full p-5 md:p-11 bg-red-100 flex">
            <div className="flex flex-col">
                {/** logo */}

                {/** H1 */}
                <p className="text-4xl md:text-6xl uppercase font-bold text-white py-6">we're launching soon</p>
                {/** Content */}
                <p className="py-4">We're creating something exciting in the house and about to launch. 
                    Thank you so much for your interest.
                </p>
                {/** Social */}
                <p className="text-gray-100 text-sm font-bold">Stay Connected</p>
                {/** Copyrights */}
                <p className="text-gray-100 text-sm font-bold pt-11">&copy; Copyright 2021. All Rights Resverved</p>
            </div>
            <div></div>
        </div>
    )
}

export default Construction
