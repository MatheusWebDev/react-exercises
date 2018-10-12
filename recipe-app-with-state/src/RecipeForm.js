import React, {Component} from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {
  static defaultProps = {
    onCloseForm: () => {},
    onSave: () => {}
  }
  constructor(props){
    super(props)
    this.state = {
      title: "",
      instructions: "",
      ingredients: [""],
      img: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: "",
      instructions: "",
      ingredients: [""],
      img: "",
    });
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeIng(e){
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredients});
  }

  handleNewIngredient(e){
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients, '']});
  }

  render() {
    const {title, instructions, ingredients, img} = this.state;
    const {onCloseForm} = this.props;
    let ingredientsInputs = ingredients.map((ingredient, i) => (
      <div key={`ingredient-${i}`}>
        <label> {i+1} - 
          <input 
            type="text"
            value={ingredient}
            name={`ingredient-${i}`}
            size={47}
            autoComplete="off"
            placeholder="Ingredient"
            onChange={this.handleChangeIng}
          />
        </label>
        <button
          type="button"
          onClick={this.handleNewIngredient}
          className="buttons"
        >
          +
        </button>
      </div>
    ));
    return (
      <div className="recipe-form-container">
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="close-button"
            onClick={onCloseForm}
          >
            X
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-title-input'>Title</label>
            <input
              id='recipe-title-input'
              key='title'
              name='title'
              type='text'
              value={title}
              size={42}
              autoComplete="off"
              onChange={this.handleChange}/>
          </div>
          {ingredientsInputs}
          <label
            htmlFor='recipe-instructions-input'
            style={{marginTop: '5px'}}
          >
            Instructions
          </label>
          <textarea
            key='instructions'
            id='recipe-instructions-input'
            type='Instructions'
            name='instructions'
            rows='8'
            cols='50'
            autoComplete='off'
            value={instructions}
            onChange={this.handleChange}
          />
          <div className='recipe-form-line'>
            <label htmlFor='recipe-img-input'>Image Url</label>
            <input
              id='recipe-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{alignSelf: 'center', marginRight: 0}}
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeForm;