import Image from "next/image"
import AndroidDownloadSvg from '../../../../public/market/googleplay-light.svg'
import IosDownloadSvg  from '../../../../public/market/appstore-light.svg'
export default function Right() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-5xl text-center">Download Our App Now</p>
            <div className="store-box flex">
            <button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none my-8 mx-3">
                <Image
                    className='mx-auto'
                    src={IosDownloadSvg}
                    alt="icon1"
                    height={100}
                    width={100}
                    />
                </button>
                
                <button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none my-8 mx-3">
                <Image
                    className='mx-auto'
                    src={AndroidDownloadSvg}
                    alt="icon1"
                    height={100}
                    width={100}
                    />
                </button>
               
            </div>
        </div>
    )
}