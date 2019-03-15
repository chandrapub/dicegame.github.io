let imageArray = ["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png", "dice6.png"];
		
		// let imageArray = [[1, "dice1.png"], 
		// 				  [2, "dice2.png"],
		// 				  [3, "dice3.png"],
		// 				  [4, "dice4.png"], 
		// 				  [5, "dice5.png"],
		// 				  [6, "dice6.png"]];
		// let imageArr = [];

		// for(let i = 0; i<imageArray.length; i++){
		// 	imageArr.push(imageArray[i][1]);
		// 	// console.log("test" + imageArr);
			
		// }

	let getImage1 = imageArray[Math.floor(Math.random()*imageArray.length)];

	// let imgPath = "/images/";
	
	function getRandom(){
	  do{
			var getImage2 = imageArray[Math.floor(Math.random()*imageArray.length)];
		}
		while(getImage1 == getImage2)
		console.log("getImage2 : "+getImage2);

		compareResult(imageArray.indexOf(getImage2));
		return getImage2;
	}

	document.querySelector('.image1').src = getImage1;
	document.querySelector('.image2').src = getRandom();

	function compareResult(index2){

			let index1 = imageArray.indexOf(getImage1);


			if(index1>index2){
				document.getElementById("headLine").innerHTML = "Player 1 Won !!!!";
			}else{
				document.getElementById("headLine").innerHTML = "Player 2 Won !!!!";
			}
			
		}