import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Pool from "../UserPool";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { CRow, CCol, CCardFooter} from '@coreui/react';
import Card from '../Components/Card';
import CardGrid from '../Components/CardGrid';
import S3Image from '../images/AWS-S3.png';
import SQSImage from '../images/AWS-SQS.png';
import './dashboard.css';
const Dashboard = () => {
      const [ authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);
      const [ userdetails] = useState(localStorage.getItem("userdetails") || false);
      const [ userName ] = useState(localStorage.getItem("username") || false);
      const history = useHistory();
   React.useEffect(() => {
        if(authenticated == "true") {
            alert("Authenticated");
            console.log("Pool data userdetails : ", userName);
        }
        else { 
            alert("Not Authenticated");
            document.getElementById("dashboard-auth").style.visibility='hidden';
            let path = `login`;
            history.push(path);
        }
    });

    return (
      <div>
        <h1> 
          Welcome to Dashboard - {userName}
        </h1>
  <CardGrid>
        <a href ="https://google.com" target='_blank'> <Card key={1}>
          <img src={S3Image} alt="Logo" style={{width:200, height:100}} />
          <h2>AWS S3</h2>
        </Card></a>
                <Card key={2}>
                <img src={SQSImage} alt="Logo" style={{width:250, height:100}} />
                <h2>AWS SQS</h2>
              </Card>
                      <Card key={3}>
                      <img src={S3Image} alt="Logo" style={{width:200, height:100}} />
                      <h2>AWS Amplify</h2>
                    </Card>
                            <Card key={4}>
                            <img src={S3Image} alt="Logo" style={{width:200, height:100}} />
                            <h2>AWS EC2</h2>
                          </Card>
      
    
  </CardGrid>

                  </div>
    );
  };

  export default Dashboard;