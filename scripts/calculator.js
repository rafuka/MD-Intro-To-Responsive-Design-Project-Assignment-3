var calculator = document.getElementById("calculator");
		var screen = document.getElementById("screen");
		var history = document.getElementById("history");
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

		calculator.addEventListener('click', function(e) {
			
			var element = e.target;

			if (element.classList.contains('calc-btn')) {

				if (element.classList.contains('num')) {

					console.log('num');

					if (lastOp) {

						screen.value = '' + element.innerHTML;
						lastOp = false;
					}	

					else if (screen.value == '0') {

						screen.value = element.innerHTML;
					}
					else {
						
						screen.value += element.innerHTML;				
					}
				}
				else {
					console.log('op');

					if (!lastOp) {

						if (!val1) {
							val1 = screen.value;
						}
						else {
							screen.value = calculate(val1, op, screen.value);
							val1 = screen.value;
						}
					}	

					op = element.id;
					lastOp = true;
			
				}
			}
		});