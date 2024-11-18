import Image from 'next/image';
import CorectImage from '../../../public/icons/correct.png';
import CrewSmileImage from '../../../public/crew/worker-smiling.webp';

export default function WorkerSection() {
    return (
        <div className="w-full py-16 min-h-screen flex items-center justify-center bg-gray-50 animation-wraper-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 animation-wraper-container ">
                
                {/* Left Text Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6">Work when you are available</h2>
                    
                    <div className="flex items-center my-3 text-gray-600">
                        <Image
                            src={CorectImage}
                            alt="icon"
                            height={22}
                            width={22}
                        />
                        <p className="ml-2">On the weekends</p>
                    </div>

                    <div className="flex items-center my-3 text-gray-600">
                        <Image
                            src={CorectImage}
                            alt="icon"
                            height={22}
                            width={22}
                        />
                        <p className="ml-2">Evenings</p>
                    </div>

                    <div className="flex items-center my-3 text-gray-600">
                        <Image
                            src={CorectImage}
                            alt="icon"
                            height={22}
                            width={22}
                        />
                        <p className="ml-2">Mornings or afternoons</p>
                    </div>

                    <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none">
                        Start Now →
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center items-center">
                    <div className="w-64 h-64 rounded-lg overflow-hidden">
                        <Image
                            src={CrewSmileImage}
                            alt="Worker smiling"
                            layout="responsive"
                            width={256}
                            height={256}
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
