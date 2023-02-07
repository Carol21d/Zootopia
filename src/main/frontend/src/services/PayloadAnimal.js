export default class Animal {
  name;
  date;
  country;
  type;
  gender;
  family;

  contructor(name, date, country, type, gender, family) {
    this.name = name;
    this.date = date;
    this.country = country;
    this.type = type;
    this.gender = gender;
    this.family = family;
    console.log(name);
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get date() {
    return this.date;
  }

  set date(date) {
    this.date = date;
  }

  get country() {
    return this.country;
  }

  set country(country) {
    this.country = country;
  }


  get type() {
    return this.type;
  }

  set type(type) {
    this.type = type;
  }

  get family() {
    return this.family;
  }

  set family(family) {
    this.family = family;
  }
}

