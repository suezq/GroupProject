(function(){
	angular
		.module('shopApp')
		.controller('AllCtrl', AllCtrl)

	function AllCtrl($scope,productSrv,$state, $stateParams){
		var allVm = this;

		allVm.products = productSrv.products;
		allVm.addToCart = productSrv.addToCart;


		console.log(allVm.products)
		allVm.search = productSrv.searchTerm; // get search term saved in service (from shop.ctrl.js)

		allVm.cart = function () {
			$state.go('cart');
		}
		allVm.shop = function () {
			$state.go('shop');
		}		
		allVm.goToDetails = function (id) {
			$state.go('productdetails',{productId: id});
		}	

		// allVm.allpage = function (){
		// 	console.log('i did a thing');
		// 	$state.go('allproducts');
		// }
	}

})();