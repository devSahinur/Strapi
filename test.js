function processOrder(order) {
    console.log(`Processing ${order.status} order...`);
    
    if (order.status === 'pending') {
      // Additional code specific to pending orders
      processPendingOrder(order);
    } else if (order.status === 'shipped') {
      // Additional code specific to shipped orders
      processShippedOrder(order);
    } else if (order.status === 'delivered') {
      // Additional code specific to delivered orders
      processDeliveredOrder(order);
    }
  }
  
  function processPendingOrder(order) {
    // Process pending order logic here
  }
  
  function processShippedOrder(order) {
    // Process shipped order logic here
  }
  
  function processDeliveredOrder(order) {
    // Process delivered order logic here
  }
  
  const order = {
    status: 'shipped',
  };
  
  processOrder(order);