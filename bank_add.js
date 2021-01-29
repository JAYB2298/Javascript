class address{
    constructor(hno,street,city){
    this.House_no = hno;
    this.street=street;
    this.city= city;
}
}

// not work es6     export default address;
module.exports = address;