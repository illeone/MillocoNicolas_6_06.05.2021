async function loadData() {
    const response = await fetch('./fishEye.json');
    const data = await re.json();
    console.log(data); 
  }
  
  loadData();
