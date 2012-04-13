!function ($) {

  $(function(){
    // carousel demo
    $('#myCarousel').carousel();
    products = [
    	{ 
    		pid:'XEM-S91', 
    		name: 'MPU', 
    		shortdesc: 'Run Linux on a powerful combo of industrial strength ARM CPU with tight integration to an I/O coprocessor.' 
    	},
    	{ 
    		pid:'LDB-U01', 
    		name: 'Foundation board', 
    		shortdesc: 'Plug in Lophilo or custom shields, connect to your breadboards with jumper wires, to your PC through USB or audio equipment.'
    	},
    	{ 
    		pid: 'LSH-100', 
    		name: 'Prototyping board', 
    		shortdesc: 'Create your own experimental shield with either through-hole or surface mount components.'
    	},
    	{ 
    		pid: 'LSH-120', 
    		name: 'Spidershield', 
    		shortdesc: 'Connect sensors using Grove-compatible connectors and cables to sensors (analog and digital) and actuators.' 
    	},
    	{ 
    		pid: 'JTA-G01', 
    		name: 'JTAG connector', 
    		shortdesc: 'Optional JTAG connectors for Lophilo developers'
    	}
    ];
    for(var i=0; i<products.length; i++) {
    	product = products[i];
    	if(product['pid'] === 'LDB-U01') {
            $('#' + product['pid'] + '-back').next().children('h4').html(product['name']);
            $('#' + product['pid'] + '-back').next().children('p').html(product['shortdesc']);
		}
    	$('#' + product['pid']).next().children('h4').html(product['name']);
        $('#' + product['pid']).next().children('p').html(product['shortdesc']);
    }
 })
}(window.jQuery)