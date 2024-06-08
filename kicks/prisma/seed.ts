const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const productsData = [
        {
          name: 'Nike',
          priceInCents: 9999,
          description: 'Comfortable running sneakers.',
          gender: 'Unisex',
          productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/nike.png',
          category: 'Shoes',
          isAvailable: true,
        },
        {
          name: 'Timberland',
          priceInCents: 9999,
          description: 'Comfortable running sneakers.',
          gender: 'Unisex',
          productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/timberland.jpg',
          category: 'Shoes',
          isAvailable: true,
        },
        {
          name: 'Cloud Tech',
          priceInCents: 9999,
          description: 'Comfortable running sneakers.',
          gender: 'Unisex',
          productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/green_running.jpg',
          category: 'Shoes',
          isAvailable: true,
        },
        {
            name: 'Nike Air Jordan 4 ',
            priceInCents: 9999,
            description: 'Comfortable sneaker',
            gender: 'Unisex',
            productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/retro_4.jpg',
            category: 'Shoes',
            isAvailable: true,
          },
          {
            name: 'convers',
            priceInCents: 9999,
            description: 'Comfortable skating shoes.',
            gender: 'Unisex',
            productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/convers.jpg',
            category: 'Shoes',
            isAvailable: true,
          },
          {
            name: 'Rebook',
            priceInCents: 9999,
            description: 'Fit.',
            gender: 'Unisex',
            productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/rebook.png',
            category: 'Shoes',
            isAvailable: true,
          },
          {
            name: 'Adidas Green',
            priceInCents: 9999,
            description: 'Comfortable running sneakers.',
            gender: 'Unisex',
            productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/adidas_green.jpg',
            category: 'Shoes',
            isAvailable: true,
          },
          {
            name: 'Adidas',
            priceInCents: 9999,
            description: 'Comfortable running sneakers.',
            gender: 'Unisex',
            productImage: 'https://raw.githubusercontent.com/sefu-alv/images/main/uploads/adidas.png',
            category: 'Shoes',
            isAvailable: true,
          },

      ];
      try {

        const products = await Promise.all(
          productsData.map(product => prisma.product.create({ data: product }))
        );
        console.log('Seeded products:', products);
      } catch (e) {
        console.error('Error seeding products:', e);
        process.exit(1);
      } finally {
        await prisma.$disconnect();
      }
    }
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });