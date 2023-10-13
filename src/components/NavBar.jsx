function NavBar({pokemonIndex, pokemonList, handleClickNext, handleClickPrevious } ) {
   
    return(
        <div>
            {pokemonIndex > 0 ? 
                (<button onClick={handleClickPrevious}>Précédent</button>) : null}
            
                {pokemonIndex < pokemonList.length -1 ? 
                (<button onClick={handleClickNext}>Suivant</button>) : null
                }
        </div>
    );
}

export default NavBar;