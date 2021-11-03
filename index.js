  const loadData = async () => {
    const response = await fetch('./fishEye.json');
    const data = await response.json();
    return data; 
  }


  const init = async() => {
    const data = await loadData();
    const photographers = data.photographers;
    console.log(photographers);
    dysplayPhotographer(photographers)
    

    // let unPhotographe = new Photographer(photographers[5]);
    //   // for( var i = 0; i < 6; i++);
    // console.table(photographers)
    // console.log(unPhotographe.createHTML());
    
  }
  init();

  // let some = 10
  // let a = 12

  // some = a + some 

