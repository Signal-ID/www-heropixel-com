---
id: event-add-to-cart
title: Add to Cart Event
description: desc
---

# Customizing and Installing the `addToCart` Event for Your Pixel

## Purpose

This guide will help you customize and install the `addToCart` event for your pixel. The purpose of this event is to help the pixel learn who your ideal customers are so that it can predict which leads are most likely to convert.

## Event Code

Here is the code snippet for the `addToCart` event:

```html
<!-- Trigger the 'addToCart' event -->
<script>
  window.analyticsLayer = window.analyticsLayer || [];
  window.analyticsLayer.push({
    event: 'addToCart',
    productId: 'example_product_id',
    productName: 'example_product_name',
    quantity: 1,
    value: '0.00',
    currency: 'USD',
    // ... other properties
  });
</script>
```

## Steps to Customize the Event

1. **Open Your Website's Code**

   - Access the HTML file where you want to add the `addToCart` event.

2. **Customize the Event Properties**

   - Replace `example_product_id` with the actual product ID.
   - Replace `example_product_name` with the actual product name.
   - Adjust the `quantity` value to reflect the number of items added to the cart.
   - Set the `value` to the total price of the items added to the cart.
   - Ensure the `currency` reflects the correct currency code (e.g., 'USD').

   Example:

   ```html
   <!-- Trigger the 'addToCart' event -->
   <script>
     window.analyticsLayer = window.analyticsLayer || [];
     window.analyticsLayer.push({
       event: 'addToCart',
       productId: '12345',
       productName: 'Super Widget',
       quantity: 2,
       value: '39.98',
       currency: 'USD',
       // ... other properties
     });
   </script>
   ```

3. **Add Additional Properties (Optional)**

   - You can add other relevant properties to the event, such as `category`, `variant`, `discount`, etc.

   Example:

   ```html
   <!-- Trigger the 'addToCart' event -->
   <script>
     window.analyticsLayer = window.analyticsLayer || [];
     window.analyticsLayer.push({
       event: 'addToCart',
       productId: '12345',
       productName: 'Super Widget',
       quantity: 2,
       value: '39.98',
       currency: 'USD',
       category: 'Widgets',
       variant: 'Blue',
       discount: '10%',
       // ... other properties
     });
   </script>
   ```

## Installing the Event

1. **Locate the Right Place to Add the Event**

   - Identify where the `addToCart` action occurs on your website (e.g., the "Add to Cart" button).

2. **Insert the Script**

   - Add the customized script to the HTML code at the appropriate location, ensuring it is triggered when the `addToCart` action occurs.

   Example:

   ```html
   <button onclick="addToCartFunction()">Add to Cart</button>

   <script>
     function addToCartFunction() {
       // Your existing add to cart logic here

       // Trigger the 'addToCart' event
       window.analyticsLayer = window.analyticsLayer || [];
       window.analyticsLayer.push({
         event: 'addToCart',
         productId: '12345',
         productName: 'Super Widget',
         quantity: 2,
         value: '39.98',
         currency: 'USD',
         category: 'Widgets',
         variant: 'Blue',
         discount: '10%',
         // ... other properties
       });
     }
   </script>
   ```

## Troubleshooting

- **Event Not Firing?**

  - Ensure the script is placed correctly in the HTML and that it is being triggered by the `addToCart` action.
  - Verify that there are no JavaScript errors in the console.

- **Incorrect Data in Event?**
  - Double-check the values and properties being pushed to the `analyticsLayer`.

## Attaching the Event to a Button Click

1. **Locate the Button Elements**

   - Identify the buttons that trigger the `addToCart` action on your website.
   - Copy the class of the button (IF IT'S UNIQUE). If it's not unique you'll need to place a unique class on the element.

2. **Attach Event Listener to Buttons**

   - Add the following script to attach the `addToCart` event to each button click.
   - This must be placed AFTER the clickable button element. So place it at the bottom of your website.

   ```html
   <script>
     // Event wrapped in function so it doesn't fire before a button is clicked
     function HeroAddToCartEvent() {
       window.analyticsLayer = window.analyticsLayer || [];
       window.analyticsLayer.push({
         event: 'addToCart',
         productId: '_productId_placeholder_',
         productName: 'Super Widget',
         quantity: 2,
         value: '39.98',
         currency: 'USD',
         category: 'Widgets',
         variant: 'Blue',
         discount: '10%',
       });
     } // end HeroAddToCartEvent

     // Selects all elements with class "add-to-cart-button"
     var buttons = document.querySelectorAll(
       '.add-to-cart-button',
     );

     // Attaches an event listener to every clickable element.
     // When those buttons are clicked the function with event HeroAddToCartEvent will fire
     for (var i = 0; i < buttons.length; i++) {
       buttons[i].addEventListener(
         'click',
         HeroAddToCartEvent,
         false,
       );
     }
   </script>
   ```

   - Ensure the button elements have the class `add-to-cart-button` or update the query selector accordingly.

## Troubleshooting

- **Event Not Firing?**

  - Ensure the script is placed correctly in the HTML and that it is being triggered by the `addToCart` action.
  - Verify that there are no JavaScript errors in the developer tools > console.

- **Incorrect Data in Event?**
  - Double-check the values and properties being pushed to the `analyticsLayer`.
