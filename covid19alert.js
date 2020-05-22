// (function() {
	let htmlBlock = `<div id="covid19" style="position: fixed;top: 0px;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);z-index: 100;"> <span style="background: #F44336;color: #fff;font-family: Arial;padding: 5vh;position: relative;display: block;text-align: center;top: 40%;font-size: 2.5em;font-weight: 900;"> #StayAtHome <br> <small><small>Protect your community against COVID-19</small></small> </span> </div>
	<style>
	#covid19 {animation: pulse 2s normal forwards ease-in-out; }
	@keyframes pulse {
	  0% {
	    opacity: 1;
	    display:block;
	  }
	  100% {
	    opacity: 0;
	    display:none;
	  }
	}
	</style>

	`;
	document.body.innerHTML +=htmlBlock;
	setTimeout(_=>{
		document.getElementById("covid19").style.display = "none";
	},3000)
// })();