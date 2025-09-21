class Resident{
  constructor(name){
    if(!name || name.trim() === ""){
      throw new Error("Ім'я мешканця не може бути пустим");
    }
    this.name = name;
  }
}

class Apartment{
  constructor(){
    this.residents = new Set();
  }
  addResident(resident){
    if(!(resident instanceof Resident)){
      throw new Error("Можна додати тільки мешканця типу Resident");
    }
    this.residents.add(resident);
  }

  getResidents(){
    return [...this.residents].map(r => r.name);
  }
}

class Building{
  constructor(numApartments, residentsPerApartment){
    if(!numApartments || !residentsPerApartment){
      throw new Error("ERROR");
    }
    this.apartments = new Map();
    for(let i = 1; i<=numApartments; i++){
      const apartment = new Apartment();
      for(let j = 1; j<=residentsPerApartment; j++){
        const resident = new Resident(`Мешканець_${i}_${j}`);
        apartment.addResident(resident);
      }
      this.apartments.set(i, apartment);
    }
  }
  displayInfo(){
    console.log("Будинок має " + this.apartments.size + " квартир(и):");
    this.apartments.forEach((apartment, number) => {
      console.log(`  Квартира ${number}: ${apartment.getResidents().join(", ")}`);
    });
  }
}

const numApartments = parseInt(prompt("Введіть кількість квартир:"));
const residentsPerApartment = parseInt(prompt("Введіть кількість мешканців у квартирі:"));
try{
  const building = new Building(numApartments, residentsPerApartment);
  building.displayInfo();
} catch(e){
  console.log("Помилка:", e.message);
}
