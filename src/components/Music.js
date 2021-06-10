import React, { useState } from 'react';
import Modal from './Modal';

const Music = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [activeTrack, setActiveTrack] = useState('Track1.mp3');

	const loadTrack = (filename) => {
		if (!filename) {
			return;
		}
		setActiveTrack(filename);
		setModalVisible(true);
	};

	const toggleModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<div className="music">
			<Modal visible={modalVisible} onClose={toggleModal}>
				<div className="modal__audio">
					<audio autoPlay controls controlsList="nodownload">
						<source src={`/public/audio/${activeTrack}`} type="audio/mp3" />
					</audio>
				</div>
			</Modal>

			<div className="music__video">
				<iframe
					width="100%"
					height="400"
					src="https://www.youtube.com/embed/KbuhsnqkYE8?start=46"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<a
					href="https://www.youtube.com/channel/UC-noq8EUFYOyTUc1083bLZg"
					className="music__video-link"
				>
					Check out my YouTube channel
				</a>
			</div>

			<div className="music__divider" />

			<div className="music__album">
				<div className="music__album-cover" />
				<div className="music__album-description">
					<div>Latest album</div>
					<h2 style={{ margin: '10px 0px' }}>Ignorance Is Bliss</h2>
					<div>Dan Gurney with John Blake (guitar)</div>
					<div className="music__album-buy-now">
						<a href="https://dangurney.bandcamp.com/" className="button">
							Listen on Bandcamp
						</a>
					</div>
					<div>
						“Dan Gurney’s music speaks for itself. His heart governs how he
						plays. Dan’s music on this recording is magical, lyrical and
						effortless. Congratulations lads, this is a memorable recording.” –
						Seamus Connolly
						<br />
						<br />
						1. Jimmy Neary{"'"}s / The Walls of Liscarroll
						<a
							style={{ marginLeft: '10px' }}
							onClick={() => loadTrack('Track1.mp3')}
						>
							Play
						</a>
						<br />
						2. Fermanagh Highland / Sporting Nell
						<br />
						3. Muineal A Bhardail / The First House in Connaught
						<br />
						4. Lord Leitrim / Mount Phoebus Hunt
						<br />
						5. Mordaunt{"'"}s Fancy / Come Along With Me
						<br />
						6. Kevin Keegan{"'"}s Waltz / The Clare Glens
						<br />
						7. Taimse Im{"'"} Chodladh
						<br />
						8. Tim Moloney{"'"}s / Molloy{"'"}s Favorite / The Boy in the Gap
						<br />
						9. The Cuckoo{"'"}s Nest / The Rolling Hills of Maryland
						<br />
						10. Blasket Island Jig / My Wife’s a Wanton Wee Thing
						<br />
						11. The Woods of Caol Rua / Miss Walsh{"'"}s<br />
						12. The Boyne Hunt / Paddy Kelly{"'"}s
						<br />
						<br />
						Dan Gurney: Button accordion
						<br />
						John Blake: Guitar
						<br />
						<br />
						Recorded by Paul Gurney at RealWorld Studios, Longford
						<br />
						Photography by Marianne Mangan
					</div>
				</div>
			</div>
		</div>
	);
};

export default Music;
