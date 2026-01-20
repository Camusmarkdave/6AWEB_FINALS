import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { id: 'S-101', name: 'Hydrating Cleanser', desc: 'Gentle non-foaming face wash', price: 750.00 },
      { id: 'S-102', name: 'Vitamin C Serum', desc: 'Brightening antioxidant treatment', price: 1250.00 },
      { id: 'S-103', name: 'Barrier Cream', desc: 'Ceramide-rich night moisturizer', price: 980.00 },
      { id: 'S-104', name: 'Mineral Sunscreen', desc: 'SPF 50+ broad spectrum protection', price: 1100.00 }
    ];
  }
}