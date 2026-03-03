import {
    MainMenu,
    GameBoard,
    CategorySelector,
    CustomWords,
    RankingInput,
    RankingBoard,
    useGame
} from '@/features/game';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ui/ThemeToggle';
import useTheme from '@/hooks/useTheme';
import './App.css';

const App = () => {
    const { isDark, toggleTheme } = useTheme();
    const {
        selectedWord,
        fails,
        points,
        streak,
        maxPoints,
        currentCategory,
        customWords,
        ranking,
        gamePhase,
        timeLeft,
        revealedLetters,
        lastWonWordLength,
        lastEarnedPoints,
        startGame,
        newGame,
        guessLetter,
        selectCategory,
        addCustomWord,
        desist,
        goToCategories,
        goToCustomWords,
        goToRanking,
        goToMenu,
        getLetterStatus,
        removeCustomWord,
        clearCustomWords,
        saveRankingScore,
        resetGameAfterLost,
    } = useGame();

    return (
        <div className="app">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <main className="app__content">
                {gamePhase === 'menu' && (
                    <MainMenu
                        maxPoints={maxPoints}
                        onStartGame={startGame}
                        onCustomize={goToCategories}
                        onShowRanking={goToRanking}
                    />
                )}

                {/* Tablero de juego */}

                {(gamePhase === 'playing' || gamePhase === 'won' || gamePhase === 'lost') && (
                    <GameBoard
                        fails={fails}
                        points={points}
                        streak={streak}
                        selectedWord={selectedWord}
                        revealedLetters={revealedLetters}
                        gamePhase={gamePhase}
                        lastWonWordLength={lastWonWordLength}
                        lastEarnedPoints={lastEarnedPoints}
                        timeLeft={timeLeft}
                        onGuessLetter={guessLetter}
                        onNewGame={newGame}
                        onDesist={desist}
                        getLetterStatus={getLetterStatus}
                    />
                )}

                {/* Entrada de Ranking */}
                {gamePhase === 'rankingInput' && (
                    <RankingInput
                        score={points}
                        onSave={saveRankingScore}
                        onCancel={resetGameAfterLost}
                    />
                )}

                {/* Tabla de Ranking */}
                {gamePhase === 'rankingBoard' && (
                    <RankingBoard
                        ranking={ranking}
                        onBack={goToMenu}
                    />
                )}

                {/* Selector de categorías */}
                {gamePhase === 'categories' && (
                    <CategorySelector
                        currentCategory={currentCategory}
                        onSelectCategory={selectCategory}
                        onGoToCustomWords={goToCustomWords}
                        onStartGame={startGame}
                        onBack={goToMenu}
                    />
                )}

                {/* Palabras personalizadas */}
                {gamePhase === 'customWords' && (
                    <CustomWords
                        customWords={customWords}
                        onAddWord={addCustomWord}
                        onRemoveWord={removeCustomWord}
                        onClearAll={clearCustomWords}
                        onPlay={startGame}
                        onBack={goToCategories}
                    />
                )}

            </main>

            <Footer />
        </div>
    );
};

export default App;
