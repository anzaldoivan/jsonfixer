import React, {useState, useEffect} from 'react'
import { useInput } from '../hooks/input-hook';
import { useClipboard } from 'use-clipboard-copy';

import '../App.css';

function Fixer(){

    //Creamos los hooks que usaremos a lo largo de todo el programa para identificar las estadisticas
    const [name, setName] = useState(0);
    const [team, setTeam] = useState(0);
    const [steamID, setSteamID] = useState(0);
    const [goals, setGoals] = useState(0);
    const [matches, setMatches] = useState(0);
    const [assists, setAssists] = useState(0);
    const [shots, setShots] = useState(0);
    const [shotsontarget, setShotsontarget] = useState(0);
    const [passes, setPasses] = useState(0);
    const [passescompleted, setPassescompleted] = useState(0);
    const [interceptions, setInterceptions] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [redcards, setRedcards] = useState(0);
    const [yellowcards, setYellowcards] = useState(0);
    const [offsides, setOffsides] = useState(0);
    const [tackles, setTackles] = useState(0);
    const [tacklescompleted, setTacklescompleted] = useState(0);
    const [possession, setPossession] = useState(0);
    const [saves, setSaves] = useState(0);
    const [savescaught, setSavescaught] = useState(0);
    const [goalsconceded, setGoalsconceded] = useState(0);
    const [foulsSuffered, setFoulsSuffered] = useState(0);
    const [owngoals, setOwngoals] = useState(0);
    const [freekicks, setFreekicks] = useState(0);
    const [penalties, setPenalties] = useState(0);
    const [corners, setCorners] = useState(0);
    const [throwins, setThrowins] = useState(0);
    const [keepersaves, setKeepersaves] = useState(0);
    const [distance, setDistance] = useState(0);
    const [goalkicks, setGoalkicks] = useState(0);
    const [position, setPosition] = useState(0);
    const [startsecond, setStartsecond] = useState(0);
    const [endsecond, setEndsecond] = useState(0);
    const [secondsplayed, setSecondsplayed] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [totalmatches, setTotalmatches] = useState(0);
    const [result, setResult] = useState(0);

    const { value, bind, reset } = useInput('');

    const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${value}`);
      reset();  
    }

    const clipboard = useClipboard();

    const handleClick = React.useCallback(
      () => {
        clipboard.copy(`{"info":{"startSecond":${startsecond},"endSecond":${endsecond},"team":"${team}","position":"${position}"},"statistics":[${redcards},${yellowcards},${fouls},${foulsSuffered},${tackles},${tacklescompleted},${goalsconceded},${shots},${shotsontarget},${Math.round((passes*passescompleted)/100)},${interceptions},${offsides},${goals},${owngoals},${assists},${passes},${freekicks},${penalties},${corners},${throwins},${saves},${goalkicks},${Math.round(minutes*60*(possession/100))},${distance*1000},${Math.round((saves*savescaught)/100)}]},`); // programmatically copying a value
      },
    );

    return(
      <div>
        <div>
          <ul className="columnas">
            <li>Start Second
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={startsecond} onChange={e => setStartsecond(e.target.value)} />
                </label>
              </form>
            </li>
            <li>End Second
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={endsecond} onChange={e => setEndsecond(e.target.value)} />
                </label>
              </form>
            </li>
            <li>Team
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={team} onChange={e => setTeam(e.target.value)} />
                </label>
              </form>
            </li>
            <li>Position
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={position} onChange={e => setPosition(e.target.value)} />
                </label>
              </form>
            </li>
            <li>0: Redcards 
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={redcards} onChange={e => setRedcards(e.target.value)} />
                </label>
              </form>
            </li>
            <li>1: Yellowcards
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={yellowcards} onChange={e => setYellowcards(e.target.value)} />
                </label>
              </form>
            </li>
            <li>2: fouls
             <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={fouls} onChange={e => setFouls(e.target.value)} />
                </label>
              </form>
            </li>
            <li>3: foulsSuffered
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={foulsSuffered} onChange={e => setFoulsSuffered(e.target.value)} />
                </label>
              </form>
            </li>
            <li>4: tackles
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={tackles} onChange={e => setTackles(e.target.value)} />
                </label>
              </form>
            </li>
            <li>5: tackles completed
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={tacklescompleted} onChange={e => setTacklescompleted(e.target.value)} />
                </label>
              </form>
            </li>
            <li>6: goals conceded
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={goalsconceded} onChange={e => setGoalsconceded(e.target.value)} />
                </label>
              </form>
            </li>
            <li>7: shots
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={shots} onChange={e => setShots(e.target.value)} />
                </label>
              </form>
            </li>
            <li>8: shots on goal
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={shotsontarget} onChange={e => setShotsontarget(e.target.value)} />
                </label>
              </form>
            </li>
            <li>9: passes completed (%)
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={passescompleted} onChange={e => setPassescompleted(e.target.value)} />
                </label>
              </form>
            </li>
            <li>10: interceptions
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={interceptions} onChange={e => setInterceptions(e.target.value)} />
                </label>
              </form>
            </li>
            <li>11: offsides
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={offsides} onChange={e => setOffsides(e.target.value)} />
                </label>
              </form>
            </li>
            <li>12: goals
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={goals} onChange={e => setGoals(e.target.value)} />
                </label>
              </form>
            </li>
            <li>13: own goals
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={owngoals} onChange={e => setOwngoals(e.target.value)} />
                </label>
              </form>
            </li>
            <li>14: assists
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={assists} onChange={e => setAssists(e.target.value)} />
                </label>
              </form>
            </li>
            <li>15: passes
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={passes} onChange={e => setPasses(e.target.value)} />
                </label>
              </form>
            </li>
            <li>16: freekicks
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={freekicks} onChange={e => setFreekicks(e.target.value)} />
                </label>
              </form>
            </li>
            <li>17: penalties
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={penalties} onChange={e => setPenalties(e.target.value)} />
                </label>
              </form>
            </li>
            <li>18: corners
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={corners} onChange={e => setCorners(e.target.value)} />
                </label>
              </form>
            </li>
            <li>19: throw ins
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={throwins} onChange={e => setThrowins(e.target.value)} />
                </label>
              </form>
            </li>
            <li>20: keeper saves
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={saves} onChange={e => setSaves(e.target.value)} />
                </label>
              </form>
            </li>
            <li>21: goalkicks
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={goalkicks} onChange={e => setGoalkicks(e.target.value)} />
                </label>
              </form>
            </li>
            <li>22: possession (%)
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={possession} onChange={e => setPossession(e.target.value)} />
                </label>
              </form>
            </li>
            <li>23: distance covered
            <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={distance} onChange={e => setDistance(e.target.value)} />
                </label>
              </form>
            </li>
            <li>24: keeper saves caught (%)
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={savescaught} onChange={e => setSavescaught(e.target.value)} />
                </label>
              </form>
            </li>
            <li>Minutos reales a representar
              <form onSubmit={handleSubmit}>
                <label>
                  <input type="text" value={minutes} onChange={e => setMinutes(e.target.value)} />
                </label>
              </form>
            </li>
          </ul>
          <div>
          <p style={{textAlign: 'center', marginTop: '50px'}}>Guia para minutos:</p>
          <p style={{textAlign: 'center', marginTop: '10px'}}>Minutos jugados = {(endsecond - startsecond)/60} / Minutos Reales (10 min por tiempo) = {((endsecond - startsecond)/60)*10/45}</p>
          <p style={{textAlign: 'center', marginTop: '30px'}}>Resultado Final:</p>
          <p style={{textAlign: 'center', marginTop: '10px'}}>{`{"info":{"startSecond":${startsecond},"endSecond":${endsecond},"team":"${team}","position":"${position}"},"statistics":[${redcards},${yellowcards},${fouls},${foulsSuffered},${tackles},${tacklescompleted},${goalsconceded},${shots},${shotsontarget},${Math.round((passes*passescompleted)/100)},${interceptions},${offsides},${goals},${owngoals},${assists},${passes},${freekicks},${penalties},${corners},${throwins},${saves},${goalkicks},${Math.round(minutes*60*(possession/100))},${distance*1000},${Math.round((saves*savescaught)/100)}]},`}</p>
          <button onClick={handleClick} style={{marginTop: '10px', position: 'relative', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)'}}>Copiar Resultado</button>
          </div>
        </div>
      </div>
    )

}

export default Fixer