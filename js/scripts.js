function Phone(brand, price, color, display) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.display = display;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", price is " + this.price + " and the display is " + this.display + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "IPS");
var SamsungGalaxyS6 = new Phone ("Samsung", 2000, "black", "OLED");
var OnePlusOne = new Phone ("One Plus", 1500, "red", "IPS");
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

