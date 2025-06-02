export interface Product {
  id: number;
  title: string;
  stock: number;
  category: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 1, title: 'Clean Code', stock: 9, category: 'General', price: 45, image: 'https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, title: 'The Pragmatic Programmer', stock: 25, category: 'General', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpVYaJ2clBPnAgpBI_mfOrwMzbBfvB3M5bg&s' },
  { id: 3, title: 'Effective Java', stock: 20, category: 'Java', price: 55, image: 'https://m.media-amazon.com/images/I/7167aaVxs3L._AC_UF1000,1000_QL80_.jpg' },
  { id: 4, title: 'Java: The Complete Reference', stock: 15, category: 'Java', price: 60, image: 'https://m.media-amazon.com/images/I/81UDSuaFAeL._AC_UF1000,1000_QL80_.jpg' },
  { id: 5, title: 'Design Patterns', stock: 18, category: 'General', price: 65, image: 'https://m.media-amazon.com/images/I/81IGFC6oFmL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, title: 'You Don\'t Know JS', stock: 22, category: 'Java-Script', price: 40, image: 'https://m.media-amazon.com/images/I/71nqnAFzS5S._AC_UF1000,1000_QL80_.jpg' },
  { id: 7, title: 'Introduction to Algorithms', stock: 12, category: 'General', price: 90, image: 'https://m.media-amazon.com/images/I/61O5SsbL8HL._AC_UF1000,1000_QL80_.jpg' },
  { id: 8, title: 'Python Crash Course', stock: 28, category: 'Python', price: 35, image: 'https://m.media-amazon.com/images/I/71uiG3qqKaL._AC_UF1000,1000_QL80_.jpg' }
];

export const categories: string[] = ['General', 'Java', 'Java-Script', 'Python'];
