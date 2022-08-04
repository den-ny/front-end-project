# Catco
Catco is an elegantly designed, easy-to-use application for shopping cat products. Users can browse and search for various products currently available. They can add items to their cart, inspect their cart, update their cart, and view the total cost of their selections. 

## Front-End: 
- Repo: https://github.com/den-ny/front-end-project/ 
- Deployed (Surge): (https://catco.surge.sh/)

## Back-End:
- Repo; https://github.com/den-ny/back-end-project/ 
- Deployed (Heroku): https://cat-co.herokuapp.com/api/products/all

## Team Members
- Denny Wong 
- Adam Bachrach
- Christine Manna
- Mario Leon

### Schema
```
ProductInformation Schema{
  Name: String,
  Category: String,
  PhotoSrc: String,
  Description: String,
  Price: Number
  }
```
```
Cart Schema{
  productNumber: Number,
  productName: String,
  photoSrc: String,
  price: Number,
  quantity: Number,
  totalPrice: Number
}
```
## Technologies Used:
**Front-End** : React, Axios, Material-UI, Surge

**Back-End** : Node, Express, Mongoose, Heroku 

### Whimsical Flowchart: 
https://whimsical.com/project-8-KeVEcumxySvKwfVd3BR1zC

### Team Expectations: 
https://docs.google.com/document/d/1vOLs3O09G5gyZ4eM4VxjcYQg-7hD-FV4Q2KGM1vuoHM

### MVP:
* Allows user to search for products in store
* Allows user to add product to cart
* Allows user to view different product categories 
