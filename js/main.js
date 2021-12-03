
    function tinhKetQua(){
        var thuNhap = document.getElementById("thunhap").value
        var soTien = document.getElementById("sotien").value
        var laiSuat = document.getElementById("laisuat").value
        var thoiHan = document.getElementById("thoihan").value
        thuNhap = Number(thuNhap)
        soTien = Number(soTien)
        laiSuat = Number(laiSuat)
        thoiHan = Number(thoiHan)
        var coTheTra = thuNhap*0.6
        var soTienTra = (soTien * (1+laiSuat))/thoiHan
        var ketQua = document.getElementById("ketqua")
        ketQua.style.fontSize = "18px"
        ketQua.style.color = "#fff"
        ketQua.style.padding = "8px"
        var p1 = document.getElementById("p1")
        var p2 = document.getElementById("p2")
        if((thuNhap == "" || soTien == "" || laiSuat == "" || thoiHan == "") || (thuNhap < 0 || soTien < 0 || laiSuat < 0 || thoiHan < 0)){
            alert("nhập đúng giữ liệu")
           }else{
               p1.style.display = "block"
               p1.textContent = "số tiền có thể trả: "+coTheTra
               p2.style.display = "block"
               p2.textContent = "số tiền phải trả: "+soTienTra
            if(coTheTra > soTienTra){
                ketQua.style.display = "block"
                ketQua.textContent = "đủ điều kiện"
                ketQua.style.backgroundColor = "green"
               }else{
                   ketQua.style.display = "block"
                   ketQua.textContent = "hong đủ điều kiện"
                   ketQua.style.backgroundColor = "red"
               }
           }

        

    }