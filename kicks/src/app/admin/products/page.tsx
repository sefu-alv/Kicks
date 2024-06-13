import { Product } from "@prisma/client";
import prisma from "../../../../prisma/db";
import { error } from "console";
import { useState, useEffect } from "react";
import Image from "next/image"; 
export default async function AdminProducts() {
  const products = await prisma.product.findMany();
  return (
    <div className="h-screen w-full">
      <div className="w-full h-[10rem] flex justify-center">
        <p className="text-[4rem] m-auto">Products</p>
      </div>
      <div className="w-full h-screen">
        <div className=" w-full flex flex-wrap justify-center h-screen gap-4">
          {products.map((product: Product) => (
            <div key={product.id} className="card w-98 bg-base-100 shadow-xl">
              <figure>  <Image
                  src={product.productImage}
                  alt={product.name}
                  width={420} 
                  height={300} 
                  className="object-cover"
                /></figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-start">
                  <p className="w-[25%]">{(product.priceInCents / 100).toFixed(2)}</p>
                  <button className="btn btn-primary">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
