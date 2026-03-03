import './HiddenWord.css';

const HiddenWord = ({ revealedLetters }) => {
    return (
        <div className="hidden-word">
            {revealedLetters.map((letter, index) => (
                <div
                    key={index}
                    className={`hidden-word__letter${letter === null ? ' hidden-word__letter--hidden' : ''}`}
                >
                    {letter || '.'}
                </div>
            ))}
        </div>
    );
};

export default HiddenWord;
