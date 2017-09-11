var calculator = document.getElementById("calculator");
		var screen = document.getElementById("screen");
		var scrhst = document.getElementById("history");
		var op = null;
		var lastOp = false;
		var val1 = null;
		var val2 = null;


		function calculate(val1, op, val2) {
			switch(op) {
				case "plus":
					return +val1 + +val2;
					break;
				case "minus":
					return +val1 - +val2;
					break;
				case "mult":
					return +val1 * +val2;
					break;
				case "div":
					return +val1 / +val2;
					break;
			}
		}

		function numberPressed(number) {
			if (val2) {
				val2 += number;
				screen.value += number;
				scrhst.value += number;
			}
			else if (op) {
				val2 = number;
				screen.value = number;
				scrhst.value += number;
			}
			else if (val1) {
				val1 += number;
				screen.value += number;
				scrhst.value += number;
			}
			else {
				val1 = number;
				screen.value = number;
				scrhst.value = number;
			}
		}

		function opPressed(opval, element) {
			if (opval === "del") {
				if (val2) {
					if (val2.length > 1) {
						val2 = val2.substr(0, val2.length - 1);
						scrhst.value = scrhst.value.substr(0, scrhst.value.length - 1);
						screen.value = screen.value.substr(0, screen.value.length - 1);
					}
					else {
						val2 = null;
						screen.value = '0';
						scrhst.value = scrhst.value.substr(0, scrhst.value.length - 1);
					}
				}
				else if (op) {
					op = null;
					scrhst.value = scrhst.value.substr(0, scrhst.value.length - 3);
				}
				else if (val1) {
					if (val1.length > 1) {
						val1 = val1.substr(0, val1.length - 1);
						scrhst.value = scrhst.value.substr(0, scrhst.value.length - 1);
						screen.value = screen.value.substr(0, screen.value.length - 1);
					}
				}
			}

			else if (opval === "clear") {
				val1 = null;
				op = null;
				val2 = null;
				screen.value = 0;
				scrhst.value = 0;
			}
			else if (opval === "equal") {
				if (val2) {
					val1 = calculate(val1, op, val2);
					val2 = null;
					op = null;
					screen.value = val1;
					scrhst.value = val1;
				}
			}
			else if (val2) {
				val1 = calculate(val1, op, val2);
				val2 = null;
				op = opval;
				screen.value = val1;
				scrhst.value += " " + element.innerHTML + " ";
			}
			else if (op) {
				if (op !== opval) {
					op = opval;
					scrhst.value = scrhst.value.substr(0, scrhst.value.length - 3) + " " + element.innerHTML + " ";
				}
				
			}
			else if (val1) {
				op = opval;
				scrhst.value = scrhst.value + " " + element.innerHTML + " ";
			}
		}

		calculator.addEventListener('click', function(e) {
			
			var element = e.target;

			if (element.classList.contains('calc-btn')) {

				if (element.classList.contains('num')) {
					numberPressed(element.innerHTML);
				}
				else {
					opPressed(element.id, element);
				}
			}
		});
