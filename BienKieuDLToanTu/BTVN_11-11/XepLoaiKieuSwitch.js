var dtb = 10;
switch (true) {
  case dtb >= 0 && dtb <= 5: {
    console.log('Yeu');
    break;
  }
  case dtb > 5 && dtb <= 6: {
    console.log('Trung Binh');
    break;
  }
  case dtb > 6 && dtb <= 7: {
    console.log('Trung Binh Kha');
    break;
  }
  case dtb > 7 && dtb <= 8: {
    console.log('Kha');
    break;
  }
  case dtb > 8 && dtb <= 9: {
    console.log('Gioi');
    break;
  }
  case dtb > 9 && dtb <= 10: {
    console.log('Xuat Sac');
    break;
  }
  default: {
    console.log('Nhap Lai');
  }
}