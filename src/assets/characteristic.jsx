let characteristics = { "Weapon Skill (WS)": 46, "Ballistic Skill (BS)": 44, "Strength (S)": 60, "Toughness (T)": 50, "Agility (Ag)": 34, "Intelligence (Int)": 53, "Perception (Per)": 41, "Willpower (WP)": 38, "Fellowship (Fel)": 37 }
let characteristicsAdvToken = ["[*][*][ ][ ]", "[*][*][ ][ ]", "[*][*][ ][ ]", "[*][*][ ][ ]", "[*][ ][ ][ ]", "[*][*][*][ ]", "[ ][ ][ ][ ]", "[ ][ ][ ][ ]", "[ ][ ][ ][ ]"]

export default function Characteristic(props) {
    return (
        <div>
            <div className='singleCharacteristic'>
                <p><span className='characteristicsName'>{Object.keys(characteristics)[props.skillNo]}</span><br /><span className='characteristicsValue'>{Object.values(characteristics)[props.skillNo]}</span><br /><span className='characteristicsAdvToken'>{characteristicsAdvToken[props.skillNo]}</span></p>
            </div>
        </div>
    )
};