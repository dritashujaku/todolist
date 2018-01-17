$.ajax({
    type: 'GET',
    url: 'https://localhost:3001/products',
    success: function(data) {
        //console.log(data);
        data.map(function(product) {
            //console.log(product.product_name, product.product_price);
            $('body').append('<h1>' + product.product_name + '</h1>');
        });
    }
});

$.get('https://localhost:3001/products', function(data) {
    console.log(data);
});

$.post('https://localhost:3001/products', {product_name: 'lenovo', product_description: 'laptop', product_price: 800}, function(data) {
    console.log(data);
});