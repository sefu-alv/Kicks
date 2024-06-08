import { Product } from "@prisma/client";

import { error } from "console";
import { useState, useEffect } from "react";
export default async function AdminProducts() {
  const products = await prisma.Product.findMany();
return (
    <div className="h-screen w-full">
        <div className="w-full h-[10rem] flex justify-center">
            <p className="text-[4rem] m-auto">Products</p>
        </div>
        <div className="w-[85%]">
            <ul>
                {products.map((product: Product) => (
                    <li key={product.id}>
                        <p>{product.name}</p>{" "}
                        {/* Again, assuming you want to display the product's name */}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
}
