let listKonser = document.getElementById("list-konser");

const getKonser = async () => {
  const url = "https://62b14289e460b79df0547013.mockapi.io/konser";

  const respons = await fetch(url);
  const result = await respons.json();

  result.forEach((konser) => {
    listKonser.innerHTML += `
        
    
    <div class="container align-midle">
    <div class="row">
        <div class="card" style="width: 18rem;">
  <img src="${konser.gambar}" class="card-img-top" alt="poster">
  <div class="card-body">
    <h5 class="card-title">${konser.konser}</h5>
    <p class="card-text" style="font-size: 15px">Rp ${konser.harga},-</p>
                <p style="font-size: 12px">Jadwal Konser ${konser.tanggal}</p>
                <p style="font-size: 12px">Location : ${konser.kota}</p>
                <a href="#" class="btn btn-primary bg-dark">Buy Ticket</a>
  </div>
</div>
</div>
</div>
    
    
    
    
       `;
  });

  console.log(result);
};

getKonser();
