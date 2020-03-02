function rand(min, max){
	if( max > min ){
		var arifm = max - min;
			arifm = Math.floor(Math.random() * Math.floor(arifm));
		return min + arifm;
	} else {
		console.log("Ошибка в указании данных для генератора случайных чисел");
		return undefined;
	}
}