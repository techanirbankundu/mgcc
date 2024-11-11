import Image from 'next/image'
import financeimage from '../../../public/icons/icons8-wallet-96.png'
import community from '../../../public/icons/icons8-user-account-96.png'
import enviroment from '../../../public/icons/icons8-leaf-96.png'

export default function BodySection() {
    return (
        <div className="px-20 py-16 min-h-screen flex flex-col items-center justify-center">
            <p className="text-center text-5xl font-bold my-16">Make an Imapct is as less as 3 hours</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
                <div className="p-4 ">
                    <Image
                    className='mx-auto'
                    src={financeimage}
                    alt="icon1"
                    height={500}
                    width={100}
                    />
                    <p className='text-2xl font-bold'>Financialy</p>
                </div>
                <div className="p-4">
                <Image
                className='mx-auto'
                    src={community}
                    alt="icon1"
                    height={500}
                    width={100}
                    />
                    <p className='text-2xl font-bold'>Community</p>
                </div>
                <div className="p-4 ">
                <Image
                className='mx-auto'
                    src={enviroment}
                    alt="icon1"
                    height={500}
                    width={100}
                    />
                    <p className='text-2xl font-bold text-center'>Enviroment</p>
                </div>
            </div>

        </div>
    )
}