import { Order } from "@prisma/client";
import prisma from "../../../../prisma/db";
export default async function AdminOrders() {
  const orders = await prisma.order.findMany();
  const customers = await prisma.costumer.findMany();
  const products = await prisma.product.findMany();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Name</th>
              <th>Item Name</th>
              <th>Category</th>
            </tr>
          </thead>
          {orders.map((orders : Order) => {
            const customer = customers.find(c => c.id == orders.userId);
            const product = products.find( c => c.id == orders.productId);
            return (
                 <tbody className="w-full">
                 <tr key={orders.id}>
                   <th>{orders.id}</th>
                  <td>{[customer?.firstName, " " , customer?.lastName]}</td>
                   <td>{product?.name}</td>
                   <td>{product?.category}</td>
                 </tr>
               </tbody>
               );
            })}
        </table>
      </div>
    </div>
  );
}
