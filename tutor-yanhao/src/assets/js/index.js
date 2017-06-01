$(function(){
	$('.follow img').click(function(){
		$img=$('.follow img').attr('src');
//		console.log($img);
		if($img=='/dist/techer_11.jpg?88710269eebdeee468031d1726414264'){
			$('.follow-list').show();
			$('.follow img').attr({
				src:'/dist/techer_18.jpg?8d3edaf73c6de370021fda140846932a'
			})
		}
		if($img=='/dist/techer_18.jpg?8d3edaf73c6de370021fda140846932a'){
			$('.follow-list').hide();
			$('.follow img').attr({
				src:'/dist/techer_11.jpg?88710269eebdeee468031d1726414264'
			})
		}
		
	})
	
	
	$('.family img').click(function(){
		$img=$('.family img').attr('src');
//		console.log($img);
		if($img=='/dist/techer_11.jpg?88710269eebdeee468031d1726414264'){
			$('.family-list').show();
			$('.family img').attr({
				src:'/dist/techer_18.jpg?8d3edaf73c6de370021fda140846932a'
			})
		}
		if($img=='/dist/techer_18.jpg?8d3edaf73c6de370021fda140846932a'){
			$('.family-list').hide();
			$('.family img').attr({
				src:'/dist/techer_11.jpg?88710269eebdeee468031d1726414264'
			})
		}
		
	})
});
