import React, { FC } from 'react';
import Image from 'next/image';
import PlusIcon from '@assets/img/plus.svg';
import { TProduct } from 'src/_types/product';
import Price from '@components/Price';
import styles from '@styles/Product.module.css'

interface IProductCardProps {
  item: TProduct;
}

const ProductCard = ({ item }: IProductCardProps) => {

  return (
    <div className={`${styles['product-card']} w-44 mb-10`}>
      <div className="bg-gray-100 py-5 text-center">
        <Image src={item.image} alt="" />
      </div>
      <div className="p-2">
        <div className="flex justify-between bg-none">
          <div className="font-bold uppercase">{item.title}</div>
          <div className="text-gray-500"><Price amount={item.price} /></div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="font-bold uppercase text-gray-500 ">{item.subtitle}</div>
          <div>
            <Image src={PlusIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
