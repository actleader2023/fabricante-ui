import { Product } from '../../../shared/models/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  navigateToUpdateProduct(product: Product) {
    this.router.navigate(
      ['/products/update'],
      { queryParams: { id: product.id, name: product.name, price: product.price } }
    )
  }

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!')
      window.location.reload();
    })
  }
}
