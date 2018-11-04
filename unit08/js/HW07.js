var j = 0;
for(var i = 1; i <=100; i++ ){
	if(i%3==0 || i%7==0){
		j++;
	}
}
document.write('Số các số chia hết cho 3 hoặc 7 trong đoạn từ 1-100 là: '+j)
