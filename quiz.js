function Person(name, height, age, sleeping) {
  this.name = name;
  this.height = height;
  this.age = age;
  this.sleeping = true;
}

Student.prototype = new Person();
this.study = false;


Person.prototype.eat = function() {
	return = "eats some food";
}

Person.prototype.sleep = function() {
	if (this.sleeping = false && this.study = true) {
		this.sleeping = true;
	} else {
		this.sleeping = false;
	}
};

Student.prototype.study = function() {
	if (this.study = false) {
		this.study = true;
	}
	else
		this.study = true;
	}
};

