import ReactAudioPlayer from 'react-audio-player';

export default function VolumeTest(){
    
    return (
	<div className='card'>
	    <script>
		document.getElementById('volume_test').volume = 0.5;
		alert(1);
	    </script>
	    <div className='card-content'>
		<span className='card-title'>
		    Volume Test
		</span>
		<p style={{marginBottom: 32}}>
		    Every room has an audio element of some kind, whether that is background music or sound effects or both. To save your ears, please play the music below and adjust your speakers' volume accordingly.
		</p>
		<ReactAudioPlayer
		    src='assets/theme_song.mp3'
		    controls
		    volume={1}
		/>
	    </div>
	    
	</div>
    );
}
