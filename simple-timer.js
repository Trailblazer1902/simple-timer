		let a = document.getElementById('hr').value;
		let b = document.getElementById('min').value;
		let c = document.getElementById('secs').value;

		function countDownTime(){
			let a = document.getElementById('hr').value;
			let b = document.getElementById('min').value;
			let c = document.getElementById('secs').value;
			
			if (hr.value>0 && min.value == 0){
					 	hr.value--;
					 	min.value=60;
			}

			if (min.value>0 && secs.value == 0){
					 	min.value--;
					 	secs.value=60;
			}
				
			if (secs.value > 0 && secs.value <= 60){	
					secs.value--;
					setTimeout(countDownTime,1000);
			}

			if (secs.value <= 9 && secs.value > 0) {
				secs.value = "0" + secs.value;					
			}

			if (c <= 60){
				document.getElementById('secs').style.color = "black";
			}

			if (c <= 11) {
				document.getElementById('secs').style.color = "gold";
			}


			if (c < 5) {
				document.getElementById('secs').style.color = "rgba(222,11,11, 1)";				
			}

			if ((a < 0 || b < 0 || c  < 0)) {
				alert("Erroneous! Please ensure you type in a positive number")				
			} else if ((a=="" && b=="" && c=="")) {
				alert("Erroneous! Please enter some digits.")
			} else if (a==0 && b==0 && c==0) {
				alarm();
				alert("Time Out!!!");
				a =="";
				b =="";
				c =="";
			}
			
		}

		function alarm() {
				alarm = new Audio();
				alarm.src="tone.mp3";
				alarm.play();	
									
		}
			
		function changeColor () {
			const colors = ['grey', 'green', '#282923'];
	        let bodyBcg = document.querySelector('body'); 
	        let c = Math.floor(Math.random()*(colors.length));
	        bodyBcg.style.background = colors[c];
	        bodyBcg.style.backgroundRepeat = 'no-repeat';
	        bodyBcg.style.backgroundSize = '100%';
	        console.log(c);
		}

	function changeImage(){
		const colors = ['url(Images/i1.jpg)', 'url(Images/i3.jpg)', 'url(Images/i4.jpg)'];
        var bodyBcg = document.querySelector('body');
        var c = Math.floor(Math.random()*(colors.length));
        bodyBcg.style.background = colors[c];
        bodyBcg.style.backgroundRepeat = 'no-repeat';
        bodyBcg.style.backgroundSize = '100%';
        console.log(c);
	}

	function stop(){
		let a = document.getElementById('hr').value;
			let b = document.getElementById('min').value;
			let c = document.getElementById('secs').value;
		a =='';
		b =='';
		c =='';
		alarm.pause();
	}

	
	function greet(){
		let tym = new Date();
		let greeter = tym.getHours();
		if (greeter <= 11) {
			document.getElementById('greeting').innerHTML = "<marquee>Good Morning!</marquee>" 			
		} else if (greeter >= 12 && greeter <= 15){
			document.getElementById('greeting').innerHTML = "<marquee>Good Afternoon!</marquee>"
		} else {
			document.getElementById('greeting').innerHTML = "<marquee>Good Evening!</marquee>"
		}
		}