$(function() {

	$('.button_clear').click(function() {
		$('input:checked').prop('checked', false);
	});

});

$(function(){
	$('p input:checkbox').on("change", function(){
		var summ = 0;
		$('p input:checkbox:checked').each(function(index, element){
			var add = parseInt($(element).val(), 10); 
			if(!isNaN(add))
				summ += add;
		});
		console.log(summ)
	})   
})

function Tract() {
	var input, filter, p, i;
	input = document.getElementById('tract');
	filter = input.value.toUpperCase();
	ps = document.getElementsByClassName('tract');

	for (i = 0; i < ps.length; i++) {
		let p = ps[i];
		if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
			p.style.display = "";
		} else {
			p.style.display = "none";
		}
	}
}

function Locality() {
	var input, filter, p, i;
	input = document.getElementById('locality');
	filter = input.value.toUpperCase();
	ps = document.getElementsByClassName('locality');

	for (i = 0; i < ps.length; i++) {
		let p = ps[i];
		if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
			p.style.display = "";
		} else {
			p.style.display = "none";
		}
	}
}

function Garden() {
	var input, filter, p, i;
	input = document.getElementById('garden');
	filter = input.value.toUpperCase();
	ps = document.getElementsByClassName('garden');

	for (i = 0; i < ps.length; i++) {
		let p = ps[i];
		if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
			p.style.display = "";
		} else {
			p.style.display = "none";
		}
	}
}

function Cottage() {
	var input, filter, p, i;
	input = document.getElementById('cottage');
	filter = input.value.toUpperCase();
	ps = document.getElementsByClassName('cottage');

	for (i = 0; i < ps.length; i++) {
		let p = ps[i];
		if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
			p.style.display = "";
		} else {
			p.style.display = "none";
		}
	}
}
