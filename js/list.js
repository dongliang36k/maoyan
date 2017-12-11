
	document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   	});
	var m1 = angular.module("apps",["ionic"])
	/*m1.config(["$stateProvider",function($stateProvider){
		$stateProvider.state("aaa",{
			url:"/list1",
			templateUrl:"list.html",
			controller:"listone"
		})
	}])*/
	m1.controller("listone",["$scope","$http",function($scope,$http){
		$scope.loadMore = function(){
	   			$http({
	   				method:"get",
	   				url:" http://datainfo.duapp.com/shopdata/getGoods.php?callback="
//	   				params:{classID:1}
	   			}).success(function(data){
	   				var thisdata = eval(data)
	   				//console.log(thisdata)
//	   				$scope.datalist.push(thisdata)
                    /*for(var i = 0;i<thisdata.length;i++){
                    	$scope.datalist.push(thisdata[i])
                    }*/

	   				$scope.$broadcast('scroll.infiniteScrollComplete');
	   			})
   	
   				
   			}
	}])
	
	
