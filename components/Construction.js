import Image from 'next/image';
import {CodeIcon, EmojiHappyIcon} from '@heroicons/react/outline';

function Construction() {
    return (
        <div className="h-screen p-5 md:mx-11 md:pt-11 flex">
            <div className="flex flex-col w-full md:w-1/2">
            <div className="pt-11">
                <Image className="animate-pulse"
                    alt="Image Alt"
                    src="/logo.png"
                    height="75"
                    width="75"
                />
            </div>
            <h1 className="text-blue-600 text-xl tracking-widest font-bold">Elite <span className="text-red-800">Cricket</span></h1>
                {/** H1 */}
                <p className=" text-3xl md:text-6xl uppercase font-bold text-white py-6">we're launching soon </p>
                {/** Content */}
                <p className="py-4">We're creating something exciting in the house and about to launch. 
                    Thank you so much for your interest.
                </p>
                {/** Social */}
                <p className="text-gray-100 text-sm font-bold">Stay Connected</p>
                <div className="pt-3 flex">
                    <div className="mx-1">
                        <Image className="cursor-pointer " src="/facebook.svg" height="25" width="25"/>
                    </div>
                    <div className="mx-1">
                        <Image className="cursor-pointer " src="/instagram.svg" height="25" width="25"/>
                    </div>
                    <div className="mx-1">
                        <Image className="cursor-pointer " src="/youtube.svg" height="25" width="25"/>
                    </div>

                </div>
                {/** Copyrights */}
                <p className="text-gray-100 text-sm font-bold pt-11">&copy; Copyright 2021. All Rights Resverved</p>

            </div>
            <div className=" md:w-1/2 justify-center items-center hidden md:flex">
                        <CodeIcon height="250" className="text-black text-center" />
            </div>
        </div>
    )
}

export default Construction
