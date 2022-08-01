const data = [
  {
    "id": 1,
    "productName": "Apple iPhone X",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
    "price": "299,00",
    "stock": "25",
    "processor": "Hexa-core 2.39 GHz",
    "ram": "3GB",
    "storage": "64GB",
    "category": "apple"
},
  {
    "id": 2,
    "isPublished": "true",
    "productName": "Apple iPhone 8",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
    "price": "100,00",
    "stock": "22",
    "processor": "Hexa-core (2x Monsoon + 4x Mistral)",
    "ram": "2GB",
    "storage": "64GB",
    "category": "apple"},
  {
    "id": 3,
    "isPublished": "false",
    "productName": "Apple iPhone 8 Plus",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
    "price": "199,00",
    "stock": "15",
    "processor": "Hexa-core (2x Monsoon + 4x Mistral)",
    "ram": "3GB",
    "storage": "64GB",
    "category": "apple"
  },
  {
    "id": 4,
    "productName": "Samsung Galaxy S9",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png",
    "price": "149,00",
    "stock": "10",
    "processor": "Octa-core (4x2.8 GHz Kryo 385 Gold & 4x1.7 GHz Kryo 385 Silver)",
    "ram": "4GB",
    "storage": "64GB",
    "category": "samsung"},
  {
    "id": 5,
    "isPublished": "true",
    "productName": "OPPO R15 Pro",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/oppo-r15-pro/oppo-r15-device-front.png",
    "price": "199,00",
    "stock": "6",
    "processor": "Octa-core (4x2.2 GHz Kryo 260 Gold & 4x1.8 GHz Kryo 260 Silver)",
    "ram": "6GB",
    "storage": "128GB",
    "category": "oppo"},
  {
    "id": 6,
    "isPublished": "true",
    "productName": "Sony Xperia XA2",
    "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
    "price": "190,00",
    "stock": "4",
    "processor": "Octa-core 2.2 GHz Cortex-A53",
    "ram": "3GB",
    "storage": "32GB",
    "category": "sony"}
]
export default data;

// const data = [
//   {
//     "id": 1,
//     "isPublished": "true",
//     "productName": "Apple iPhone X",
//     "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
//     "price": "299,00",
//     "stock": "25",
//     "processor": "Hexa-core 2.39 GHz",
//     "ram": "3GB",
//     "storage": "64GB",
//     "category": "Apple"

//   },
//   {
//     "id": 2,
//     "isPublished": "true",
//     "productName": "Apple iPhone 8",
//     "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
//     "price": "100,00",
//     "stock": "22",
//     "processor": "Hexa-core (2x Monsoon + 4x Mistral)",
//     "ram": "2GB",
//     "storage": "64GB",
//     "category": "Apple"
//   },
//   {
//     "id": 3,
//     "isPublished": "false",
//     "productName": "Apple iPhone 8 Plus",
//     "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
//     "price": "199,00",
//     "stock": "15",
//     "processor": "Hexa-core (2x Monsoon + 4x Mistral)",
//     "ram": "3GB",
//     "storage": "64GB",
//     "category": "Apple"
//   },
//   {
//     "id": 4,
//     "isPublished": "true",
//     "productName": "Samsung Galaxy S9",
//     "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png",
//     "price": "149,00",
//     "stock": "10",
//     "processor": "Octa-core (4x2.8 GHz Kryo 385 Gold & 4x1.7 GHz Kryo 385 Silver)",
//     "ram": "4GB",
//     "storage": "64GB",
//     "category": "Samsung"
//   },
//   {
//     "id": 5,
//     "isPublished": "true",
//     "productName": "OPPO R15 Pro",
//     "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/oppo-r15-pro/oppo-r15-device-front.png",
//     "price": "199,00",
//     "stock": "6",
//     "processor": "Octa-core (4x2.2 GHz Kryo 260 Gold & 4x1.8 GHz Kryo 260 Silver)",
//     "ram": "6GB",
//     "storage": "128GB",
//     "category": "OPPO"
//   },
//   {
//     "id": 6,
//     "isPublished": "true",
//     "productName": "Sony Xperia XA2",
//     "productImage": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
//     "price": "190,00",
//     "stock": "4",
//     "processor": "Octa-core 2.2 GHz Cortex-A53",
//     "ram": "3GB",
//     "storage": "32GB",
//     "category": "Sony"
    

//   }
// ]
// export default data;