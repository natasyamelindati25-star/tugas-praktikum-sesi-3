function hitungDiskon(totalBelanja) {
    let diskonPersen = 0;

    // Percabangan kondisi diskon
    if (totalBelanja >= 250000) {
        diskonPersen = 0.10; // Diskon 10%
    } else if (totalBelanja >= 100000) {
        diskonPersen = 0.05; // Diskon 5%
    } else if (totalBelanja >= 50000) {
        diskonPersen = 0.03; // Diskon 3%
    } else {
        diskonPersen = 0;    // Tidak dapat diskon
    }

    let diskon = totalBelanja * diskonPersen;
    let totalBayar = totalBelanja - diskon;

    console.log("Total Belanja Anda Adalah Rp" + totalBelanja);
    console.log("Diskon yang diperoleh Adalah Rp" + diskon);
    console.log("Total yang harus dibayar Adalah Rp" + totalBayar);
    console.log("-----------------------------------------");
}

// Uji coba semua pilihan kondisi
hitungDiskon(300000); // Kondisi 1: Total >= 250.000
hitungDiskon(150000); // Kondisi 2: Total >= 100.000
hitungDiskon(60000);  // Kondisi 3: Total >= 50.000
hitungDiskon(30000);  // Kondisi 4: Total < 50.000