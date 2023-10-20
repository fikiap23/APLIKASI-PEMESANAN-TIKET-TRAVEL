function hitungTotal() {
  var harga = parseFloat(document.getElementById('harga').value)
  var jumlahTiket = parseInt(document.getElementById('jumlahTiket').value)
  var isMember = document.getElementById('member').checked
  var diskon = parseFloat(document.getElementById('diskon').value) || 0

  var total = harga * jumlahTiket

  if (isMember) {
    total -= (total * diskon) / 100
  }

  var totalBayarField = document.getElementById('totalBayarField')
  var totalBayar = document.getElementById('totalBayar')
  totalBayar.value = 'Rp. ' + total
  totalBayarField.style.display = 'block'
  totalBayarField.style.visibility = 'visible'
}

function showDiskon() {
  var isMember = document.getElementById('member').checked
  var diskonField = document.getElementById('diskonField')

  if (isMember) {
    diskonField.style.display = 'block'
    diskonField.style.visibility = 'visible'
  } else {
    diskonField.style.display = 'none'
    diskonField.style.visibility = 'hidden'
  }
}
