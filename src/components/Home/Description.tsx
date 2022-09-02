import Image from "next/image";
import Link from "next/link";
import BaldoriaLogo from '@assets/img/baldoria-logo.svg';
import LocationIcon from '@assets/img/location.svg'
import ProductIcon from '@assets/img/box.svg'
import Button from "@components/Common/Button";

const Description = () => {
  return (
    <div className="w-1/3 border flex items-center text-center flex-col pt-3 px-6 pb-10 h-1/2">
      <Image src={BaldoriaLogo} alt="" />
      <h1 className="text-4xl font-bold mt-16 ">Baldoria Vermouth</h1>
      <p className="mt-4 max-w-xs px-2 text-left">Badoria rosso is a red vermouth that balances fresh, herby bitter notes against.
        Kiss My Rhubarb takes its
        origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.</p>
      <Link href={'/'}>
        <a className="mt-6 text-teal-700 text-xl font-bold">Read More</a>
      </Link>
      <div className='w-full text-left mt-16'>
        <div className='flex'>
          <div className='mr-3'>
            <Image src={LocationIcon} alt="" />
          </div>
          <div>
            Location
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className='text-left mt-10'>
          <div className='flex'>
            <div className='mr-3'>
              <Image src={ProductIcon} alt="" />
            </div>
            <div>Product Categories</div>
          </div>
          <div>
            <div className='mt-3'>
              <Button text="Gin" className="mr-2" />
              <Button text="Vodka" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Description
