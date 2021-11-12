var month = 5;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
        console.log('thang co 31 ngay');
        break;
    }
    case 2: {
        console.log('thang co 28 ngay');
        break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
        console.log('thang co 30 ngay');
        break;
    }
    default: {
        console.log('nhap lai');
    }
}