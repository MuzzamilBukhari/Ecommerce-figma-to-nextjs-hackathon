import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  name,
  category,
  imgUrl,
  price,
  salePrice,
  colors,
}: {
  name: string;
  category: string;
  imgUrl: string;
  price: string;
  salePrice: string;
  colors: string[];
}) => {
  return (
    <Link href={``} className="text-black">
      <div className=" p-10">
        <div>
          <Image
            className="object-cover object-center rounded "
            alt="product"
            src={imgUrl}
            width={400}
            height={600}
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-3 mt-3 font-semibold">
          <h3 className="">{name}</h3>
          <h4 className="text-[#737373]">{category}</h4>
          <div className="flex gap-2">
            <span className="text-[#bdbdbd]">{price}</span>
            <span className="text-[#23856D]">{salePrice}</span>
          </div>
          <div className="flex gap-[5px]">
            {colors.map((color, index) => (
              <div key={index} className={`${color} w-4 h-4 rounded-[50%]`} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;