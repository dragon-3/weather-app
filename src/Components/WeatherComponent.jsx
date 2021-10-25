import React from "react";

class WeatherComponent extends React.Component {


    constructor() {
        super();
        this.state = 
        {
            name: ''
        }

    }

    componentDidMount() {

        if(this.stateid === -1) {
            return
        }
       
        /* fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=40b6ca72a825f65e8ef846668ac0fcf7') 
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: [json]
            })
        }) */
    }

    

    render() {


        return (
            <div>
                
                <h1>Weather</h1>


                

                <form className="form">
                    <label>Name:</label>
                    <input type="text" value={this.state.givenNames} name="givenNames" onChange={this.handleChange} />
                   
                </form>
            </div>
            
            
        )
    }

}

export default WeatherComponent;