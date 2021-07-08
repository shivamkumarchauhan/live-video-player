if (Hls.isSupported()) {
	var video = document.getElementById('video');
	var hls = new Hls();
	hls.attachMedia(video);
	hls.loadSource('https://cdn-shop-lc-01.akamaized.net/Content/HLS_HLS/Live/channel(amazon)/index.m3u8');
	//hls.loadSource('https://cdn-shop-lc-01.akamaized.net/Content/HLS_HLS/Live/channel(roku)/index.m3u8');
	//hls.loadSource('https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8');
	hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
		console.log(
		  'manifest loaded, found ' + data.levels.length + ' quality level'
		);
		console.log(data.subtitleTracks + "  -----------------");
		for(var i=0; i<data.subtitleTracks.length; i++){
			console.log(data.subtitleTracks[i]);
		}
	});
	
	function setSub(){
		if(document.getElementById('eng_sub').checked){
			hls.subtitleTrack = 0;
		}else{
			hls.subtitleTrack = 1;
		}
	}
  
	hls.on(Hls.Events.MANIFEST_LOADED, function (event, data) {
		console.log(
		  'manifest loaded, found ' + data.levels.length + ' quality level'
		);
		hls.subtitleTrack = 0;
		hls.subtitleDisplay = true;
		video.play();
	});
}