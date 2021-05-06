'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  /**
   * Categories resoures routes
   */
  Route.resource('categories', 'CategoryController').apiOnly()

  /**
   * Categories resoures routes
   */
  Route.resource('products', 'ProductController').apiOnly()

  /**
   * Coupon resoures routes
   */
  Route.resource('coupons', 'CouponController').apiOnly()

  /**
   * Order resoures routes
   */
  Route.resource('orders', 'OrderController').apiOnly()

  /**
   * Image resoures routes
   */
  Route.resource('images', 'ImageController').apiOnly()

  /**
   * User resoures routes
   */
  Route.resource('users', 'UserController').apiOnly()
})
  .prefix('v1/admin')
  .namespace('Admin')
