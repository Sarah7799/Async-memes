async function getData() {
    try{
    let resp = await fetch("https://api.imgflip.com/get_memes");
    let data = await resp.json();
    createTable(data.data)
    console.log(data);

    return data;
    }
    catch(error){
        console.log(error); 
    }
}

getData();


function createTable(data){
 let tBody = document.getElementById('tbody')

    data.memes.forEach((element) => {
        
      let row = document.createElement('tr');
      let td1 = document.createElement("td");
      td1.innerHTML = element.id;
      let td2 = document.createElement('td');
      td2.innerHTML=element.name;
      let td3 = document.createElement('td');
      td3.innerHTML = element.url;
      
      row.append(td1,td2,td3);
      tBody.append(row);
    });
}
