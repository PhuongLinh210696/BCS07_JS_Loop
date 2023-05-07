// Bài tập 1 Tìm số nguyên dương nhỏ nhất 
//Input: 
//Các bước xử lý
//Output:
function soNguyenDuongNhoNhat() {
    var S = 0;
    var n = 0;
    while (S<10000) {
        n++;
        S = S + n;
    }
    console.log(S)
    document.getElementById("ketQuaBaiTap1").innerHTML = S;
}
//Bài tập 2 Tính S(n) = x + x^2 + x^3 + … + x^n
//Input: số x bất kỳ, số n bất kỳ
//Các bước xử lý
//Output: Tổng S 
function tongS() {
    var soXBatKi = +document.getElementById("soX2").value;
    var soNBatKi = +document.getElementById("soN2").value;
    var T = 1;
    var S = 0;
    for(var i = 1; i <= soNBatKi; i++){
        T = T * soXBatKi;
        S = S + T;
    }
    console.log(S)
    document.getElementById("ketQuaBaiTap2").innerHTML = S;
}
//Bài tập 3 Tính giai thừa
function giaiThua(){
    var soNBatKi = +document.getElementById("soN3").value;
    var giai_thua = 1;
    for (var i = 1; i <= soNBatKi; i++)
        giai_thua *= i;
    document.getElementById("ketQuaBaiTap3").innerHTML = giai_thua;
}
//Bài 4 div chẵn lẻ
//Input: 
//Các bước xử lý
//Output:  
function divChanLe() {
    for(var i = 1; i <= 10; i++){
        if(i%2==0){
            document.getElementById("addDiv").innerHTML +=
            '<div class="bg-danger bg-opacity-75 p-5 text-white mt-3">Chẵn</div>';
        }else{
            document.getElementById("addDiv").innerHTML +=
            '<div class="bg-primary bg-opacity-75 p-5 text-white mt-3">Lẻ</div>';
        }
    }
    
}


//Bài 5 Kiểm tra số nguyên tố
//Input: số n
//Các bước xử lý
//Output: dãy số nguyên tố
function soNguyenTo(){
    var soNBatKi = +document.getElementById("soN5").value;
    var result ="";
    for (var i = 0; i <= soNBatKi; i++) {
        var flag = 0;
    
        // looping through 2 to user input number
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            result += i;
        }
        document.getElementById("ketQuaBaiTap5").innerHTML = `<h3>${result}</h3>` ;
    }
    // document.getElementById("ketQuaBaiTap5").innerHTML = `<h3>${result}</h3>` ;
}