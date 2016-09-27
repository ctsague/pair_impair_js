function pair_impair (a,b){

	for (i=a; i<=100; i=i+b){
		console.log(i);

	if (i%2==0){
		console.log('pair');
	}
		 
	else {
		console.log('impair');
	}
     }
}

pair_impair(60,2);

/* Autre façon de faire*/

/* for(i=1; i<=100; i++) {
		if (i%2==0){
			console.log(i + 'est pair')
		}	 
		else {
			console.log(i + 'est impair')
		}
	} */
