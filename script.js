function hitungTotal() {
  let harga = parseFloat(document.getElementById('harga').value)
  let jumlahTiket = parseInt(document.getElementById('jumlahTiket').value)
  let isMember = document.getElementById('member').checked
  let diskon = parseFloat(document.getElementById('diskon').value) || 0
  let tujuan = document.getElementById('tujuan').value
  console.log(tujuan)

  let total = harga * jumlahTiket

  if (isMember) {
    total -= (total * diskon) / 100
  }

  let totalBayarField = document.getElementById('totalBayarField')
  let totalBayar = document.getElementById('totalBayar')
  totalBayar.value = 'Rp. ' + total
  totalBayarField.style.display = 'block'
  totalBayarField.style.visibility = 'visible'
}

function showDiskon() {
  let isMember = document.getElementById('member').checked
  let diskonField = document.getElementById('diskonField')
  let diskon = document.getElementById('diskon')

  if (isMember) {
    diskonField.style.display = 'block'
    diskonField.style.visibility = 'visible'
    diskon.value = 20
    console.log(diskon)
  } else {
    diskonField.style.display = 'none'
    diskonField.style.visibility = 'hidden'
  }
}

function showHarga() {
  let tujuan = document.getElementById('tujuan').value
  let harga = document.getElementById('harga')
  console.log(tujuan)

  if (tujuan === 'Jakarta') {
    harga.value = 20000
  } else if (tujuan === 'Surabaya') {
    harga.value = 15000
  } else if (tujuan === 'Bandung') {
    harga.value = 10000
  } else if (tujuan === 'Yogyakarta') {
    harga.value = 25000
  }
}
