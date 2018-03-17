
function getmeau(dom,attr,target){
					clearInterval(dom.timer);
					dom.timer=setInterval(function(){
					var current=parseFloat(computedStyle(dom,attr));					
					temp=target>current?Math.ceil(target-current)/8:Math.floor(target-current)/8;
					if(current==target){
						clearInterval(dom.timer);
						return false;
					}else{
						dom.style[attr]=(current+temp)+"px";
					}
					
				},10)
				
			}
			function computedStyle(dom,attr){
				if(getComputedStyle){
					return getComputedStyle(dom,null)[attr];
				}else{
					return dom.currentStyle()[attr];
				}
				
			}


/*轮播图*/	
	var box=document.getElementById('box');
	var oul=document.getElementById('oul');
	var oul2=document.getElementById('oul2');
	var lis=oul.getElementsByTagName('li');
	var olis=oul2.getElementsByTagName('li');
	var pre=document.getElementById('pre');
	var next=document.getElementById('next');
	oul.appendChild(lis[0].cloneNode(true));				
	oul.style.width=lis.length*lis[0].offsetWidth+'px';
	var i=0;

	var timer=setInterval(function(){
		i++;
		move();				
	},2000)
	
	
	function move(){
		if(i==-1){
			oul.style.left=(-(lis.length-1)*lis[0].offsetWidth)+'px';
			i=lis.length-2;
		}
		if(i==lis.length){
				oul.style.left=0;
				i=1;	
		}
			
		getmeau(oul,'left',-lis[0].offsetWidth*i);
		
		for(var j=0;j<olis.length;j++){
			olis[j].className='';
		}
		if(i==olis.length){
			olis[0].className='active';
		}else{
			
			olis[i].className='active';
		}
			
				
	}	
	
	for(var k=0;k<olis.length;k++){
		olis[k].index=k;
		olis[k].onmousemove=function(){
			i=this.index;
				move();
		}
	}
													
	box.onmousemove=function(){
		clearInterval(timer);
	}
	box.onmouseout=function(){
		timer=setInterval(function(){
			i++;
			move();

		},1000)
	}
	/*左右键*/
	next.onclick=function(){
		i++;
		move();
	}
	pre.onclick=function(){
		i--;
		move();
	}
							