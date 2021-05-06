'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  /**
   * Product resource Routes
   */
  Route.get('products', 'ProductController.index')
  Route.get('products/:id', 'ProductController.show')

  /**
   * Order resource Routes
   */
  Route.get('orders', 'OrderController.index')
  Route.get('orders/:id', 'OrderController.show')
  Route.post('orders', 'OrderController.store')
  Route.put('orders/:id', 'OrderController.update')
})
  .prefix('v1')
  .namespace('Client')
