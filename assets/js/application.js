!function ($) {

  $(function(){
    // carousel demo
    $('#myCarousel').carousel();
    products = [
    	{ 
    		pid:'XEM-S91', 
    		name: 'MPU', 
    		shortdesc: 'Run Linux on a powerful combo of industrial strength ARM CPU with tight integration to a I/O coprocessor.' 
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
    	console.log(product);
    	$('#' + product['pid']).popover({title: product['name'], content: product['shortdesc'], placement: 'top'});
    }
 })
}(window.jQuery)