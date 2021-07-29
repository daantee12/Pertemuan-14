<!doctype html>
	<html lang="en">
	

	<head>
	    <!-- Required meta tags -->
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	

	    <!-- Bootstrap CSS -->
	    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
	        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	

	    <title>Program Penjualan Barang Elektronik</title>
	</head>
	

	<body>
	    <div class="container">
	        <h1>Program Penjualan Barang Elektronik</h1>
	        <form onsubmit="return false" class="mb-sm-2">
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Nama Barang</label>
	                <label>:</label>
	                <input class="col-sm-3" id="NamaBarang" type="text" placeholder="Masukkan Nama Barang">
	            </div>
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Harga</label>
	                <label>:</label>
	                <input class="col-sm-3" id="harga" type="text" placeholder="Harga" value="" disabled>
	            </div>
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Jumlah</label>
	                <label>:</label>
	                <input class="col-sm-3" id="jumlah" type="number" min="0" placeholder="Masukkan Jumlah Barang">
	            </div>
	            <!-- Checkbox -->
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Akesoris</label>
	                <label>:</label>
	                <div class="form-check form-check-inline">
	                    <input class="form-check-input" type="checkbox" id="pilihan usb" value="usb">
	                    <label class="form-check-label" for="pilihan usb">USB</label>
	                </div>
	                <div class="form-check form-check-inline">
	                    <input class="form-check-input" type="checkbox" id="pilihan memory" value="memory">
	                    <label class="form-check-label" for="pilihan memory">Memory</label>
	                </div>
	                <div class="form-check form-check-inline">
	                    <input class="form-check-input" type="checkbox" id="pilihan speaker" value="speaker">
	                    <label class="form-check-label" for="pilihan speaker">Speaker</label>
	                </div>
	            </div>
	

	            <!-- End Checkbox -->
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Total</label>
	                <label>:</label>
	                <input class="col-sm-3" id="total" type="text" placeholder="Total" disabled>
	            </div>
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Pajak 10%</label> <!-- 10% -->
	                <label>:</label>
	                <input class="col-sm-3" id="pajak" type="text" placeholder="Pajak" disabled>
	            </div>
	            <div class="mb-sm-1">
	                <label class="col-sm-2">Bayar</label>
	                <label>:</label>
	                <input class="col-sm-3" id="bayar" type="text" placeholder="Bayar" disabled>
	            </div>
	

	            <button class="btn-success btn" type="submit" onclick="proses()">Proses</button>
	            <button class="btn-danger btn" type="reset">Reset</button>
	    </div>
	

	    <script src="PPBE.js"></script>
	

	    <!-- Optional JavaScript; choose one of the two! -->
	

	    <!-- Option 1: Bootstrap Bundle with Popper -->
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
	        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
	    </script>
	

	    <!-- Option 2: Separate Popper and Bootstrap JS -->
	    <!--
	    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
	    -->
	</body>
	

	</html>
