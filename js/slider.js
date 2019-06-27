(function slider(){
	var iNow =0;
	var timer;
	inter()
	function inter(){
		timer=setInterval(function(){
			iNow++;
			if(iNow>3){
				iNow=0;
				$('.blacku1').css('transition','')
				changleft();
			}else{
				$('.blacku1').css('transition','left 1s')
				changleft();
			}
		},3000)
	}
	
	
	function changleft(){
		var nowleft = -iNow*777;
		var tnowleft=nowleft+'px';
		$('.blacku1').css('left',tnowleft)
	}
	
	$('.blacku1-btn').click(function(){
		var num=$(this).index();
		clearInterval(timer)
		$('.blacku1').css('transition','')
		changleft(num)
		iNow=num;
		inter()
	})
	
	$('.blacku1-next').click(function(){
		clearInterval(timer)
		iNow++;
		if(iNow>3){
			iNow=0
			$('.blacku1').css('transition','')
		}
		changleft();
		inter()
	})
	
	$('.blacku1-before').click(function(){
		clearInterval(timer)
		iNow--;
		if(iNow<0){
			iNow=3
			$('.blacku1').css('transition','')
		}
		changleft();
		inter()
	})
	
})();

(function slider(){
	var iNow =0;
	var timer;
	inter()
	function inter(){
		timer=setInterval(function(){
			iNow++;
			if(iNow>3){
				iNow=0;
				$('.blacku2').css('transition','')
				changleft();
			}else{
				$('.blacku2').css('transition','left 1s')
				changleft();
			}
		},5000)
	}
	
	
	function changleft(){
		var nowleft = -iNow*777;
		var tnowleft=nowleft+'px';
		$('.blacku2').css('left',tnowleft)
	}
	
	$('.blacku2-btn').click(function(){
		var num=$(this).index();
		clearInterval(timer)
		$('.blacku2').css('transition','')
		changleft(num)
		iNow=num;
		inter()
	})
	
	$('.blacku2-next').click(function(){
		clearInterval(timer)
		iNow++;
		if(iNow>3){
			iNow=0
			$('.blacku2').css('transition','')
		}
		changleft();
		inter()
	})
	
	$('.blacku2-before').click(function(){
		clearInterval(timer)
		iNow--;
		if(iNow<0){
			iNow=3
			$('.blacku2').css('transition','')
		}
		changleft();
		inter()
	})
	
})();
(function slider(){
	var iNow =0;
	var timer;
	inter()
	function inter(){
		timer=setInterval(function(){
			iNow++;
			if(iNow>3){
				iNow=0;
				$('.blacku3').css('transition','')
				changleft();
			}else{
				$('.blacku3').css('transition','left 1s')
				changleft();
			}
		},3500)
	}
	
	
	function changleft(){
		var nowleft = -iNow*777;
		var tnowleft=nowleft+'px';
		$('.blacku3').css('left',tnowleft)
	}
	
	$('.blacku1-btn').click(function(){
		var num=$(this).index();
		clearInterval(timer)
		$('.blacku3').css('transition','')
		changleft(num)
		iNow=num;
		inter()
	})
	
	$('.blacku3-next').click(function(){
		clearInterval(timer)
		iNow++;
		if(iNow>3){
			iNow=0
			$('.blacku3').css('transition','')
		}
		changleft();
		inter()
	})
	
	$('.blacku3-before').click(function(){
		clearInterval(timer)
		iNow--;
		if(iNow<0){
			iNow=3
			$('.blacku3').css('transition','')
		}
		changleft();
		inter()
	})
	
})();

(function slider(){
	var iNow =0;
	var timer;
	inter()
	function inter(){
		timer=setInterval(function(){
			iNow++;
			if(iNow>3){
				iNow=0;
				$('.blacku4').css('transition','')
				changleft();
			}else{
				$('.blacku4').css('transition','left 1s')
				changleft();
			}
		},3000)
	}
	
	
	function changleft(){
		var nowleft = -iNow*777;
		var tnowleft=nowleft+'px';
		$('.blacku4').css('left',tnowleft)
	}
	
	$('.blacku4-btn').click(function(){
		var num=$(this).index();
		clearInterval(timer)
		$('.blacku4').css('transition','')
		changleft(num)
		iNow=num;
		inter()
	})
	
	$('.blacku4-next').click(function(){
		clearInterval(timer)
		iNow++;
		if(iNow>3){
			iNow=0
			$('.blacku4').css('transition','')
		}
		changleft();
		inter()
	})
	
	$('.blacku4-before').click(function(){
		clearInterval(timer)
		iNow--;
		if(iNow<0){
			iNow=3
			$('.blacku4').css('transition','')
		}
		changleft();
		inter()
	})
	
})();

(function slider(){
	var iNow =0;
	var timer;
	inter()
	function inter(){
		timer=setInterval(function(){
			iNow++;
			if(iNow>3){
				iNow=0;
				$('.blacku5').css('transition','')
				changleft();
			}else{
				$('.blacku5').css('transition','left 1s')
				changleft();
			}
		},4000)
	}
	
	
	function changleft(){
		var nowleft = -iNow*777;
		var tnowleft=nowleft+'px';
		$('.blacku5').css('left',tnowleft)
	}
	
	$('.blacku5-btn').click(function(){
		var num=$(this).index();
		clearInterval(timer)
		$('.blacku5').css('transition','')
		changleft(num)
		iNow=num;
		inter()
	})
	
	$('.blacku5-next').click(function(){
		clearInterval(timer)
		iNow++;
		if(iNow>3){
			iNow=0
			$('.blacku5').css('transition','')
		}
		changleft();
		inter()
	})
	
	$('.blacku5-before').click(function(){
		clearInterval(timer)
		iNow--;
		if(iNow<0){
			iNow=3
			$('.blacku5').css('transition','')
		}
		changleft();
		inter()
	})
	
})();
