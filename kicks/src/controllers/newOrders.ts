async function createNewOrder(data: any) {
    // Assuming `prisma` is your instance of PrismaClient
    const orderCounter = await prisma.orderCounter.findUnique({
      where: { id: 1 },
    });
  
    let lastOrderNumber = 0;
    if (orderCounter) {
      lastOrderNumber = orderCounter.lastOrderNumber + 1;
      await prisma.orderCounter.update({
        where: { id: 1 },
        data: { lastOrderNumber },
      });
    } else {
      // Initialize if it doesn't exist
      await prisma.orderCounter.create({
        data: { lastOrderNumber: 1 },
      });
      lastOrderNumber = 1;
    }
  
    // Now, create the order with the incremented order number
    const newOrder = await prisma.order.create({
      data: {
        ...data,
        orderNumber: lastOrderNumber,
      },
    });
  
    return newOrder;
  }