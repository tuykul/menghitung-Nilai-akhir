function Kirim() {
    const UTS  = document.getElementById("UTS").valueAsNumber;   
    const TUGAS = document.getElementById("TUGAS").valueAsNumber;
    const UAS   = document.getElementById("UAS").valueAsNumber;
    var HASIL = 0.30 * UTS + 0.40 * TUGAS + 0.30 * UAS
    let grade = "E";
    if (HASIL >= 80) grade = "A";
    else if (HASIL >= 70) grade = "B";
    else if (HASIL >= 60) grade = "C";
    else if (HASIL >= 40) grade = "D";
    document.getElementById('Hasil').textContent =
  `Nilai akhir: ${HASIL.toFixed(2)} (Grade: ${grade})`;
}