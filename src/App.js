import Teams from './Teams';
import VolumeTest from './VolumeTest';

export default function App(){
    return (
	<div className='container'>
	    <h2>
		MEC TTP Summer 2021
	    </h2>
	    <h1>
		Virtual Escape Multiverse
	    </h1>
	    <p>
		stuff about us
	    </p>
	    <div className='grid'>
		<div className='row'>
		    <div className='col s8'>
			<Teams />
		    </div>
		    <div className='col s4'>
			<VolumeTest />
		    </div>
		</div>
	    </div>
	</div>
  );
}
