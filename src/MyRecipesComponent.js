import Table from "./Table";

function MyRecipesComponent ({label, image, ingredients, calories, protein, fat, carb, weight}) {
    return (
        <div>
            <div className='container'>
              <h2>{label}</h2>
            </div>
            <div className='container'>
              <img className="dish" src={image} alt='dish'/>
            </div>
            <ul className='container list'>
            {ingredients.map((ingredient, index) => (
                <li key={index}><img className="icon" src='https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png ' alt='icon'/>{ingredient}</li>
                ))}
            </ul>
            <div className='container'>
                <Table weight={weight} calories={calories} protein={protein} fat={fat} carb={carb}/>
            </div>
           
        </div>
    )
}
export default MyRecipesComponent;