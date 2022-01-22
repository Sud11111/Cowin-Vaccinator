import react from 'react';
import axios from 'axios';
import Sessions from './sessions';
export default class StateCity extends react.Component{
    constructor(props){
        super(props);
        this.state={
            state:'',
            state_Id:'',
            city:'',
            date:'',
            district_Id:'',
            districts:[],
            statelist:[],
            sessions:[]
        }
        this.selectState=this.selectState.bind(this)
        this.selectDistrict=this.selectDistrict.bind(this)
        this.handleDateChange=this.handleDateChange.bind(this)
    }
    componentDidMount(){
    axios({
            method:'GET',
            url:'https://cdndemo-api.co-vin.in/api/v2/admin/location/states',
            header:{
                'Accept-Language' : 'en_IN'
            }
        })
        .then(res=>{
            const states= res.data.states
            this.setState({statelist:states})
            })
    }
    handleDateChange(e){
        this.setState({date:e.target.value})
    }
    selectState(e){
        const statecurr=e.target.value
        this.setState({state:statecurr})
        this.setState({state_Id : statecurr})
        axios({
            method:'GET',
            url:'https://cdndemo-api.co-vin.in/api/v2/admin/location/districts/'+statecurr,
            header:{
                'Accept-Language' : 'en_Us'
            }
        })
        .then(res=>{
            const districts= res.data.districts
            this.setState({districts:districts})
            })
    }

    selectDistrict(e){
        this.setState({
            city: e.target.value,
            district_Id :e.target.value
        })
        console.log(this.state.district_Id)
        
    }

    render(){
        let disp;
        const states=this.state.statelist        
        const districts=this.state.districts
        disp= <Sessions district_Id={this.state.district_Id} date={this.state.date}/>
        return(<div>
            <div>
                <h3>
                    Search Your Nearest Vaccination Center
                </h3>
            </div>
            <div>
                <p>
                Get a preview list of the nearest centers and check availability of vaccination slots
                </p>
            </div>
            <form>
                <fieldset>
                    <legend>By District</legend>
            <select value={this.state.state} onChange={this.selectState}>
                <option>Select Your State--</option>
                {states.map((state)=>{
                    return <option value={state.state_id}>{state.state_name}</option>
                }
                )}
                </select>    
            <select value={this.state.city} onChange={this.selectDistrict}>
                <option>Select your district</option>
                {districts.map((district)=>{
                    return <option value={district.district_id}>{district.district_name}</option>
                }
                )}
                </select>
                </fieldset>
                <fieldset>
                    <legend>Date:</legend>
                    <input type='text' value={this.state.date} onChange={this.handleDateChange}></input>
                </fieldset>
            </form>   
            {disp}
            </div>
        )
    }
}