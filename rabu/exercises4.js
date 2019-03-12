function dataHandling2(){
    var a,b,join,desc,nama
    var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 2, "Pria", "SMA Internasional Metro")
    
    a = input[3].split('/')
    join = a.join('-')
    desc = a.sort(function(a, b){return b-a})
    nama = input[1].slice(0,15)
    
    
    b = [...a]
    switch (b[2]){
        case '01':
            b[2] = ' Januari ';
        break;
        case '02':
            b[2] = ' Febuari ';
        break;
        case '03':
            b[2] = ' Maret ';
        break;
        case '04':
            b[2] = ' April ';
        break;
        case '05':
            b[2] = ' Mei ';
        break;
        case '06':
            b[2] = ' Juni ';
        break;
        case '07':
            b[2] = ' Juli ';
        break;
        case '08':
            b[2] = ' Agustus ';
        break;
        case '09':
            b[2] = ' September ';
        break;
        case '10':
            b[2] = ' Oktober ';
        break;
        case '11':
            b[2] = ' November ';
        break;
        case '12':
            b[2] = ' Desember ';
        break;
    }

    console.log(input)
    console.log(b[2])
    console.log(desc)
    console.log(join)
    console.log(nama)
}

dataHandling2()