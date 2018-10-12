import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
	render(){
		const {onDelete} = this.props;
		const recipes = this.props.recipes.map((recipe,index) =>
			<Recipe onDelete={onDelete} key={recipe.id} {...recipe} />
		);
		return (
			<div className="recipe-list">
				{recipes}
			</div>
		);
	}
}

export default RecipeList;