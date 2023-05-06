console.log("Xin chào Cybersoft");
console.log("Xin chào Cybersoft");
console.log("Xin chào Cybersoft");
console.log("Xin chào Cybersoft");
console.log("Xin chào Cybersoft");
console.log("Xin chào Cybersoft");

/**
 * Vòng lặp While: không biết chính xác số lần lặp
 * Đề bài: cho một số tự nhiên bất kì, tính xem từ 0 đến số tự nhiên đó có tổng cộng bao nhiêu số chia hết cho 2
 *
 */
function tinhTongCacSoChiaHetChoHai(){
    var soNBatKi = +document.getElementById("soN").value;
    console.log(soNBatKi)
    var inRaKetQua = "";
    //Xử lý
    var ketQua = 0;
    while (soNBatKi>=0) {
        // Check số bất kì có chia hết cho 2 không
        if(soNBatKi % 2 == 0){
            ketQua++;
            console.log(soNBatKi)

        }
        // Xử lý tăng giảm bước nhảy
        soNBatKi--;
    }
    document.querySelector(".bg-success").innerHTML = ketQua;
}

function tinhTongCacKySo(){
  var soKBatKi = +document.getElementById("soK").value;
  console.log(soKBatKi)
  var tongCacKiSo = 0;
  var noiBatDau = 0;
  // do{
  //   tongCacKiSo += noiBatDau;
  //   noiBatDau++;
  // }while(noiBatDau<=soKBatKi);
  do{
    tongCacKiSo += soKBatKi;
    soKBatKi--;
  }while(soKBatKi >=0);
  document.querySelector(".bg-danger").innerHTML = "Tổng các kí số từ 0 đến " + soKBatKi + " là: " + tongCacKiSo;
}


function tinhTongCacSoChiaHetChoHaiTheoFor(){
  var soNBatKi = +document.getElementById("soN").value;
    console.log(soNBatKi)
    var inRaKetQua = "";
    var ketQua = 0;

    for(var i=0;i<=soNBatKi;i++){
      if(i % 2 == 0){
        ketQua++;
        console.log(i)
      }
    }
    document.querySelector(".bg-success").innerHTML = ketQua;
}


// Kiểm tra số nguyên tố
function isPrimeNumber(n) {
  // Số nguyên nhỏ hơn 2 không phải là số nguyên tố
  if (n <= 1) {
    // return false;
    console.log(0)
  }
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    //   console.log(0)
    }
  }
//   return true;
  console.log(1)
}

isPrimeNumber(2);
