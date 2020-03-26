function changeLabel( state ) {
		$( "#togglePlay" ).html( state != 1 ? "pause" : "play" );
		$( "#togglePlay" ).removeClass( state != 1 ? "play" : "pause" );
		$( "#togglePlay" ).addClass( state != 1 ? "pause" : "play" );
	}