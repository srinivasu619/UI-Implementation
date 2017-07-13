var cart = [] ;
var products = [{name: "PRODUCT 1",price: 425},{name: "PRODUCT 2",price: 225},{name: "PRODUCT 3",price: 625},
{name: "PRODUCT 4", price:1025},{name: "PRODUCT 5",price: 896},{name: "PRODUCT 6",price: 303}];
function refreshProducts(){
	for (var i = 0; i < cart.length; i++) {
		$("#prod"+(cart[i].index+1)).prop('disabled',true);
	}
}
function retrieve(){
	cart = JSON.parse(localStorage.getItem('cart')?localStorage.getItem('cart'):'[]');
}
function refreshCart(){
	$('#cartEntry').html('');
	var sum=0;
	for (var i=0;i<cart.length;i++) {
		sum+=cart[i].price;
		var remove = $('<span class="remove">x</span>')
		remove.attr("remove-id",i);
		remove.attr("product-id",cart[i].index);
		var decrease = $('<span class="decrease">-</span>')
		decrease.attr("decrease-id",i);
		decrease.attr("product-id",cart[i].index);
		var increase = $('<span class="increase">+</span>')
		increase.attr("increase-id",i);
		increase.attr("product-id",cart[i].index);
		var price = $('</td>'+'<td>'+cart[i].price+'</td>');
		var product = $('<td>'+cart[i].name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>');
		product.append(remove);
		var quantity = $('<td>&nbsp;&nbsp;&nbsp;'+cart[i].qty+'&nbsp;&nbsp;&nbsp;</td>');
		quantity.prepend(decrease);
		quantity.append(increase);
		var row = $('<tr></tr>');
		row.append(product);
		row.append(quantity);
		row.append(price);
		$('#cartEntry').append(row);
	}
	$('#totalPrice').text(sum);
	$(".decrease").click(function(){
		var cartPos = $(this).attr('decrease-id');
		var productPos = $(this).attr('product-id');
		var presentQty=cart[cartPos].qty;
		var basePrice = products[productPos].price;
		if(presentQty!=1)
		{
			cart[cartPos].qty=cart[cartPos].qty-1;
			cart[cartPos].price=cart[cartPos].qty*basePrice;
		}
		saveCart();
		refreshCart();
	});
	$(".increase").click(function(){
		var cartPos = $(this).attr('increase-id');
		var productPos = $(this).attr('product-id');
		var presentQty=cart[cartPos].qty;
		var basePrice = products[productPos].price;
		if(presentQty < 5)
		{
			cart[cartPos].qty=cart[cartPos].qty+1;
			cart[cartPos].price=cart[cartPos].qty*basePrice;
		}
		saveCart();
		refreshCart();
	});
	$(".remove").click(function(){
		var id=$(this).attr('remove-id');
		var index =parseInt($(this).attr('product-id'));
		var enableProduct=index+1;
		$("#prod"+enableProduct).prop('disabled',false);
		cart.splice(id,1);
		saveCart();
		refreshCart();
		refreshProducts()
	})
}
//saving the changes in the cart
function saveCart(){
	 localStorage.setItem('cart', JSON.stringify(cart));
}
$(function(){
	retrieve();
	refreshProducts();
	refreshCart();
	$('button').click(function(){
		var id = $(this)[0].id;
		var index = id[id.length-1]-1;
		var details = products[index];
		cart.push({
			index: index,
			name: details.name,
			qty: 1,
			price: details.price
		});
		refreshCart();
		refreshProducts();
		saveCart();
	});
});