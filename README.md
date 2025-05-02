# Inventory Management System

## Overview
The **Inventory Management System** is a robust solution built using [Keel.so](https://docs.keel.so/) to efficiently manage inventory locations, products, suppliers, purchase orders, sales orders, and shipments. This system ensures seamless inventory tracking, order fulfillment, and customer management.
<img width="1519" alt="Screenshot 2025-03-14 at 20 07 16" src="https://github.com/user-attachments/assets/c8ddf15e-61d0-432f-a2ed-4c541f52e802" />

## Features
- **Inventory Management**: Track product variants across multiple locations (warehouses, shops).
- **Supplier Management**: Maintain supplier records and associated products.
- **Purchase Orders**: Create, approve, and manage purchase orders.
- **Sales Orders**: Process customer orders with inventory reservation.
- **Shipping & Invoicing**: Handle shipments and generate invoices.
- **User Roles & Permissions**: Admin and Staff roles with restricted access based on responsibilities.

## Models & API Actions

### 1. **Inventory Location**
Manages different storage locations.
- Create: `createInventoryLocation(address, type)`
- List: `listInventoryLocations()`
- Get: `getInventoryLocation(id)`
- Update: `updateInventoryLocation(id)`
- Delete: `deleteInventoryLocation(id)`

### 2. **Inventory Level**
Tracks stock levels for each product variant.
- Create: `createInventoryLevel(productVariant.id, inventoryLocation.id, available?, committed?, reserved?, damaged?, incoming?)`
- List: `listInventoryLevel()`, `listProductVariantInventoryLevel(productVariant.id)`
- Get: `getInventoryLevel(id)`
- Update: `updateInventoryLevel(id)`
- Delete: `deleteInventoryLevel(id)`

### 3. **Supplier**
Stores supplier details and their products.
- Create: `createSupplier(name, address, email)`
- Get: `getSupplier(id)`
- List: `listSupplier()`
- Delete: `deleteSupplier(id)`

### 4. **Product & Product Variant**
Manages products and their variants.
- Product Actions:
  - `createProduct(name, description?, supplier.id?)`
  - `listProduct()`, `getProduct(id)`, `updateProduct(id)`, `deleteProduct(id)`
- Product Variant Actions:
  - `createProductVariant(product.id, shopifyId?, quickBookItemId?, size, sizeUnit, sku, price)`
  - `listProductVariant()`, `listProductProductVariant(product.id)`, `getProductVariant(id)`, `updateProductVariant(id)`, `deleteProductVariant(id)`

### 5. **Purchase Orders**
Handles purchase orders for inventory restocking.
- Create: `createPurchaseOrder(purchaseOrderLineItems.productVariant.id, purchaseOrderLineItems.quantity, purchaseOrderLineItems.unitCost)`
- Approve: `approvePurchaseOrder(id)`
- List: `listPurchaseOrder()`, `listPurchaseOrderByCreator(createdBy.id)`, `listPurchaseOrderByApprover(approvedBy.id)`
- Get: `getPurchaseOrder(id)`
- Delete: `deletePurchaseOrder(id)`

### 6. **Sales Orders & Sales Order Items**
Processes customer orders.
- Sales Order Actions:
  - `createSalesOrder(customer.id, salesOrderItems.productVariant.id, salesOrderItems.quantity)`
  - `listSalesOrder()`, `getSalesOrder(id)`, `updateSalesOrder(id)`, `paidSalesOrder(id)`, `deleteSalesOrder(id)`
- Sales Order Item Actions:
  - `createSalesOrderItem(salesOrder.id, productVariant.id, quantity)`
  - `updateSalesOrderItem(id)`, `listSalesOrderItem()`, `getSalesOrderItem(id)`, `deleteSalesOrderItem(id)`

### 7. **Shipments & Invoices**
Tracks product shipments and invoicing.
- **Shipment**: Links sales orders to invoices.
- **Invoice**: Stores customer invoices with status tracking (`New`, `PushedToQb`, `Closed`).

## User Roles & Permissions
### **Admin**
- Full access to create, update, list, and delete data.
- Can approve purchase orders.
- **Emails with admin access**:
  - `benoit@keel.xyz`
  - `tom@keel.xyz`
  - `michael.shindler@themodernmilkman.co.uk`
  - `alvaro.guimaraes@themodernmilkman.co.uk`
  - `richard.jones@themodernmilkman.co.uk`

### **Staff**
- Limited access to listing and updating certain models.
- Can manage inventory and orders.
- **Allowed domains**: `keel.xyz`, `themodernmilkman.co.uk`

## License
This project is licensed under the MIT License. See `LICENSE` for details.

## Contact
For any inquiries, reach out to the development team at `support@keel.xyz`.

