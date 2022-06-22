let listKonser = document.getElementById("list-konser");

const getKonser = async () => {
  const url = "https://62b14289e460b79df0547013.mockapi.io/konser";

  const respons = await fetch(url);
  const result = await respons.json();

  result.forEach((konser) => {
    listKonser.innerHTML += `
        
    <div class="col-md-3 col-6 mb-3">
    <div class="card h-100 rounded-2 shadow-sm poductsCard">
      <div class="inner">
        <img src="${konser.gambar}" class="card-img-top"   width="200"
        height="200" alt="paket 1" />
      </div>
      <div class="card-body">
      <h5 class="card-title">${konser.konser}</h5>
      <p class="card-text" style="font-size: 15px">Rp ${konser.harga},-</p>
            <p style="font-size: 12px">Jadwal Konser ${konser.tanggal}</p>
             <p style="font-size: 12px">Location : ${konser.kota}</p>
        <a href="#" class="btn btn-primary bg-dark">Buy Ticket</a>
      </div>
    </div>
    </div>
    
    
       `;
  });

  console.log(result);
};

getKonser();
