import './App.css';
import BobDylan from './asset/bobdylan.png'
import BobMarley from './asset/bobmarly.png'
import Jimi from './asset/jimi.png'
import Morrison from './asset/morison.png'
import RollingStone from './asset/rollingstone.png'
import AbbeyRoad from './asset/beatles.png'
import GunRoses from './asset/gunroses.png'
import John from './asset/john.png'
import MJ from './asset/mjackson.png'
import Pink from './asset/pink.png'
import Queen from './asset/queen.png'
import Aerosmith from './asset/aerosmith.png'
import Kurt from './asset/kurt.png'
import Beatles from './asset/thebeatles.png'
import DaftPunk from './asset/daftpunk.png'
import Tame from './asset/tame.png';
import ACDC from './asset/acdc.png'
import AM from './asset/am.png'
import Canberries from './asset/canberries.png'
import Louis from './asset/louis.png'
import Sonny from './asset/sonny.png'

function App() {
let randomPlaylistId = ['169513207', '200372875','207033244','362311979','299794412','62051568','783820320','994157668','746758332','245382738','1050706123']
let selectedPlaylist = randomPlaylistId[Math.floor(Math.random() * randomPlaylistId.length)];
debugger
  return (
    <div className="spinning-container">
      <div className='rowdata'>
        <img src={BobDylan} className="spinningHead-1" alt="Bob Dylan" title='Bob Dylan' />
        <img src={BobMarley} className="spinningHead-6" alt="BobMarley" title="BobMarley" />
        <img src={Jimi} className="spinningHead-2" alt="logo" />
        <img src={Morrison} className="spinningHead-5" alt="logo" />
        <img src={DaftPunk} className="spinningHead-6" alt="logo" />

      </div>
      <div className='rowdata'>
        <img src={MJ} className="spinningHead-6" alt="logo" />
        <img src={John} className="spinningHead-2" alt="logo" />
        <img src={GunRoses} className="spinningHead-5" alt="logo" />
        <img src={Pink} className="spinningHead-1" alt="logo" />
        <img src={Queen} className="spinningHead-3" alt="logo" />
      </div>
      <div className='rowdata'>
        <img src={Aerosmith} className="spinningHead-5" alt="logo" />
        <img src={Kurt} className="spinningHead-2" alt="logo" />
        <img src={Beatles} className="spinningHead-4" alt="logo" />
        <img src={Tame} className="spinningHead-1" alt="logo" />
        <img src={RollingStone} className="spinningHead-3" alt="logo" />
      </div>
      <div className='rowdata'>
        {/* <img src={ACDC} className="spinningHead-5" alt="logo" width='300'/> */}
        <img src={AM} className="spinningHead-2" alt="logo" />
        <img src={Canberries} className="spinningHead-4" alt="logo" />
        <img src={Louis} className="spinningHead-1" alt="logo" />
        <img src={Sonny} className="spinningHead-3" alt="logo" />
      </div>
{/* 
      <iframe className="hiddenFrames" width="100%" height="300" scrolling="no" frameborder="no" 
      allow="autoplay" 
      start_track="9"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${selectedPlaylist}&color=%23ff5500&auto_play=true`}>
    
      </iframe> */}

  
    </div>
  );
}
{/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339941784&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-389328870" title="User 389328870" target="_blank" style="color: #cccccc; text-decoration: none;">User 389328870</a> · <a href="https://soundcloud.com/user-389328870/sets/classic-rock-playlist" title="Classic Rock Playlist" target="_blank" style="color: #cccccc; text-decoration: none;">Classic Rock Playlist</a></div> */}
export default App;
