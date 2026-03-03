import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, of, catchError, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private cache$?: Observable<any[]>;

  // English Menu Items to swap with the Latin text
  private menuItems = [
    { title: 'Hainanese Chicken Rice', body: 'Succulent poached chicken served with fragrant rice, cooked in chicken broth, ginger, and garlic. A national treasure.' },
    { title: 'Spicy Laksa', body: 'A spicy noodle soup based on rich coconut milk and curry paste, topped with shrimp, fish cake, and cockles.' },
    { title: 'Char Kway Teow', body: 'Stir-fried flat rice noodles with prawns, bloody cockles, Chinese lap cheong (sausage), eggs, and bean sprouts.' },
    { title: 'Chili Crab', body: 'Mud crabs stir-fried in a semi-thick, sweet and savory tomato-and-chili-based sauce.' },
    { title: 'Satay Skewers', body: 'Seasoned, skewered and grilled meat, served with a sauce of peanut, cucumber, and onions.' },
    { title: 'Roti Prata', body: 'A South Indian flatbread made by frying stretched dough flavored with ghee, usually served with fish or mutton curry.' },
    { title: 'Nasi Lemak', body: 'Fragrant rice cooked in coconut milk and pandan leaf, served with sambal, anchovies, peanuts, and boiled egg.' },
    { title: 'Bak Kut Teh', body: 'Pork rib dish cooked in broth, popularly served in Malaysia and Singapore where there is a predominant Hokkien and Teochew community.' },
    { title: 'Hokkien Mee', body: 'A dish of egg noodles and rice noodles stir-fried with egg, slices of pork, prawns and squid, and served with sambal chili.' },
    { title: 'Kaya Toast', body: 'Toasted bread topped with butter and kaya (coconut jam), commonly served with soft-boiled eggs and coffee.' }
  ];

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<any[]>(this.apiUrl).pipe(
        // MAGIC FIX: Map the Latin API data to our English Food Menu
        map(posts => {
          return posts.map((post, index) => {
            // Pick a menu item based on the index (looping if we run out)
            const menuItem = this.menuItems[index % this.menuItems.length];
            return {
              ...post, // Keep the ID
              title: menuItem.title, // Swap Latin title for Food Name
              body: menuItem.body    // Swap Latin body for Food Description
            };
          });
        }),
        shareReplay(1),
        catchError(() => of([]))
      );
    }
    return this.cache$;
  }
}
