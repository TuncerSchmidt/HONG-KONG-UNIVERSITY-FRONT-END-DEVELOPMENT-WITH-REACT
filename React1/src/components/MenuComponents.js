import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state ={
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    
    render() {

        const Menu = this.props.dishes.map((dish) =>{
            return (
                <div key = {dish.id} className = "col-12 col-md-5 m-1">
                    <Card onClick = {()=> this.onDishSelect(dish)}>
                        <CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
                    
                        <CardImgOverlay >
                          <CardTitle>{dish.name}</CardTitle>
                           
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className = "container">
                <div className = "row">
                    
                        {Menu}
                    

                </div>
                <DishDetail dish = {this.state.selectedDish}></DishDetail>
            </div>

        );
    }
}

export default Menu;