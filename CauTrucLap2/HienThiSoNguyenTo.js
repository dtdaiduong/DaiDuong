    let numbers = document.getElementById('SoNguyenTo').value;
    let count = 0;
    let n = 2;
    let songuyento = true;
    while (count <= numbers) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                songuyento = false;
                break;
            }
        }
        if(songuyento){
            console.log(n);
            count++;
        }
        n++;
    }
