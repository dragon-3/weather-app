import React from "react";

class HomeComponent extends React.Component {


    constructor() {
        super();
        this.state = 
        {
            items: []
        }

    }

    componentDidMount() {
       
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=40b6ca72a825f65e8ef846668ac0fcf7') 
        .then
        .then(json => {
            this.setState({
                items: [json]
            })
        })
    }

    render() {


        return (
            <div>
                <h1>Weather Forcast</h1>

                <div className="table">
                    {
                        this.state.items.map(item => 
                            <ul key={item.id}>
                                <li>Name: {item.name}</li>
                            </ul>
                        )

                    }
                </div>
                
                <div className="buttons">
                    <button>Add</button>
                    <button>Edit</button>
                    <button>Delete</button>

                </div>
                
            </div>
            
            
        )
    }

}

export default HomeComponent;