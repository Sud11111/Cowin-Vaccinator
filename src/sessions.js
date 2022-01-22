import react from 'react';
import axios from 'axios';
export default class Sessions extends react.Component{
    constructor(props){
        super(props);
        this.state={
            sessions:[]
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.district_Id!==prevProps.district_Id||this.props.date!==prevProps.date){
            axios(
                {
                    method:'GET',
                    url:'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict',
                    params:{
                        district_id :this.props.district_Id,
                        date :this.props.date
                    },
                    header:{
                        'Accept-Language' : 'en_Us',
                        'accept' : 'application/json'
                    }
                }
            )
            .then(res=>{
                this.setState({sessions:res.data.sessions})
            }
            )
        }
    }
    componentWillUnmount(){
        this.setState({sessions:[]})
    }
    render(){
        console.log(this.state.sessions)
        const sessions=this.state.sessions
        const sessionlist=sessions.map((session)=>
            <div>
            <table><thead>
                <tr>
                    <td>
                    <div><h1>{session.name}</h1></div>
                    <div>{session.address},{session.block_name},{session.district_name},{session.state_name}</div>
                    </td>
                    <td>
                        &nbsp;
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    {session.vaccine}
                    </td>
                    <td>
                    {session.fee_type}
                    </td>
                    <td>
                        &nbsp;
                    </td>
                    <td>
                        &nbsp;
                    </td>
                    <td>
                    <div>{session.from}-{session.to}</div>
                    <div>{session.date}</div>
                    </td>
                    <td>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        )

        return(
        <div>
            {sessionlist}
        </div>
        )
    }
    
}