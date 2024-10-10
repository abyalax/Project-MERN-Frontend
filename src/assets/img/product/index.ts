// interface Product {
//     _id: string
//     name: string
//     nameStore: string
//     description: string
//     price: number
//     category: string
//     etalase: string
//     stock: number
//     sold?: number
//     rate?: number
//     discount?: number
//     condition: Condition
//     minOrder: number
//     image: { secure_url: string }[]
//     reviews?: Review[]
// }

// interface Review {
//     name: string
//     comment: string
//     like: number
//     createdAt: Date
//     sellerReply: {
//         text: string
//         createdAt: Date
//     }
// }

// enum Condition {
//     NEW = 'new',
//     USED = 'used',
// }


// db.products.insertMany([
//   {
//     name: "Smartphone XYZ",
//     nameStore: "Leksa Store",
//     description: "Smartphone dengan kamera 48MP dan baterai tahan lama.",
//     price: 3000000,
//     category: "Electronics",
//     etalase: "Smartphone",
//     stock: 50,
//     sold: 10,
//     rate: 4.5,
//     discount: 10,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728458886/smartphone-xyz_k2ttrx.jpg" },
//     ],
//     reviews: [
//       {
//         name: "John Doe",
//         comment: "Produk bagus, sesuai deskripsi!",
//         like: 15,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Terima kasih atas ulasannya!",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "Laptop ABC",
//     nameStore: "Leksa Store",
//     description: "Laptop dengan prosesor Intel i7 dan RAM 16GB.",
//     price: 10000000,
//     category: "Computers",
//     etalase: "Laptop",
//     stock: 20,
//     sold: 5,
//     rate: 4.8,
//     discount: 15,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728459131/laptop-abc_nwmg2m.webp" },
//     ],
//     reviews: [
//       {
//         name: "Jane Smith",
//         comment: "Sangat cepat, cocok untuk pekerjaan berat.",
//         like: 20,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Senang mendengarnya! Terima kasih.",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "Headphone Bass Booster",
//     nameStore: "Leksa Store",
//     description: "Headphone dengan bass yang mendalam dan suara yang jernih.",
//     price: 150000,
//     category: "Accessories",
//     etalase: "Headphone",
//     stock: 100,
//     sold: 30,
//     rate: 4.2,
//     discount: 5,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728458848/headphone_lu7ruv.jpg" }
//     ],
//     reviews: [
//       {
//         name: "Aliya Rahma",
//         comment: "Bass-nya mantap, cocok untuk musik EDM.",
//         like: 10,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Terima kasih, selamat menikmati!",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "Smartwatch Fitband",
//     nameStore: "Leksa Store",
//     description: "Smartwatch dengan fitur fitness tracking dan notifikasi.",
//     price: 500000,
//     category: "Wearable",
//     etalase: "Smartwatch",
//     stock: 60,
//     sold: 20,
//     rate: 4.3,
//     discount: 8,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728459064/smartwatch_m0hvc6.jpg" }
//     ],
//     reviews: [
//       {
//         name: "Budi Santoso",
//         comment: "Baterai tahan lama dan fitur fitness-nya lengkap.",
//         like: 25,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Terima kasih, semoga membantu dalam menjaga kesehatan!",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "Mechanical Keyboard RGB",
//     nameStore: "Leksa Store",
//     description: "Keyboard mekanis dengan pencahayaan RGB dan switch tactile.",
//     price: 750000,
//     category: "Accessories",
//     etalase: "Keyboard",
//     stock: 35,
//     sold: 12,
//     rate: 4.7,
//     discount: 12,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728458951/mechanical-kybrd_bfbtnm.jpg" }
//     ],
//     reviews: [
//       {
//         name: "Charlie Putra",
//         comment: "Nyaman dipakai untuk mengetik dan bermain game.",
//         like: 18,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Senang mendengar pengalaman Anda yang baik!",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "Gaming Mouse Pro",
//     nameStore: "Leksa Store",
//     description: "Mouse gaming dengan DPI tinggi dan 7 tombol yang bisa diprogram.",
//     price: 400000,
//     category: "Accessories",
//     etalase: "Mouse",
//     stock: 80,
//     sold: 25,
//     rate: 4.6,
//     discount: 10,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728458953/mouse-gaming_i1nlba.jpg" }
//     ],
//     reviews: [
//       {
//         name: "David Angelo",
//         comment: "Responsif dan nyaman untuk tangan saya.",
//         like: 12,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Terima kasih, semoga dapat meningkatkan pengalaman gaming Anda!",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "Portable Bluetooth Speaker",
//     nameStore: "Leksa Store",
//     description: "Speaker portabel dengan suara yang kuat dan tahan air.",
//     price: 600000,
//     category: "Audio",
//     etalase: "Speaker",
//     stock: 40,
//     sold: 15,
//     rate: 4.4,
//     discount: 7,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728459015/speaker_avm0jw.webp" }
//     ],
//     reviews: [
//       {
//         name: "Ella Kartika",
//         comment: "Suaranya kuat dan jernih, cocok untuk outdoor.",
//         like: 22,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Senang mendengarnya! Terima kasih atas ulasannya.",
//           createdAt: new Date()
//         }
//       }
//     ]
//   },
//   {
//     name: "4K Action Camera",
//     nameStore: "Leksa Store",
//     description: "Kamera aksi dengan resolusi 4K dan fitur tahan air.",
//     price: 1200000,
//     category: "Camera",
//     etalase: "Action Camera",
//     stock: 25,
//     sold: 8,
//     rate: 4.5,
//     discount: 15,
//     condition: "new",
//     minOrder: 1,
//     image: [
//       { secure_url: "https://res.cloudinary.com/dllhxulpv/image/upload/v1728459096/camera_incqsb.jpg" }
//     ],
//     reviews: [
//       {
//         name: "Fahri Anwar",
//         comment: "Kualitas video sangat bagus, cocok untuk petualangan.",
//         like: 30,
//         createdAt: new Date(),
//         sellerReply: {
//           text: "Senang produk kami dapat memenuhi kebutuhan Anda!",
//           createdAt: new Date()
//         }
//       }
//     ]
//   }
// ]);
