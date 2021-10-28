async function loadData() {
    const response = await fetch('./fishEye.json');
    const data = await response.json();
    return data; 
  }

  
  const init = async() => {
    const data = await loadData();
    const photographers = data.photographers;
    console.log(photographers);
    let unPhotographe = new Photographer(photographers[1])
    console.log(unPhotographe.createHTML());
  }
  init();





