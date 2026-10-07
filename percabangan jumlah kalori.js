const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jenis olahraga (lari / push-up / plank): ', (jenis) => {
  rl.question('Masukkan durasi (dalam menit): ', (durasiInput) => {
    const durasi = parseFloat(durasiInput);
    let kaloriPerMenit = 0;

    switch (jenis.toLowerCase().trim()) {
      case 'lari':
        kaloriPerMenit = 60 / 5; // 12 kalori/menit[span_0](start_span)[span_0](end_span)
        break;
      case 'push-up':
      case 'pushup':
        kaloriPerMenit = 200 / 30; // ~6.67 kalori/menit[span_1](start_span)[span_1](end_span)
        break;
      case 'plank':
        kaloriPerMenit = 5 / 1; // 5 kalori/menit[span_2](start_span)[span_2](end_span)
        break;
      default:
        console.log(`Olahraga "${jenis}" tidak dikenali.`);
        rl.close();
        return;
    }

    const totalKalori = kaloriPerMenit * durasi;
    console.log(`\nTotal kalori terbakar setelah ${durasi} menit ${jenis}: ${totalKalori.toFixed(2)} kalori`);

    rl.close();
  });
});