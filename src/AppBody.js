import BlackRock_logo from "./assets/BlackRock-logo.png";
import rightcapital from "./assets/rightcapital.png";
import stratifi from "./assets/stratifi.png";
import goldman from "./assets/goldman.png";
import altruistlogo from "./assets/altruistlogo.png";
import line from "./assets/line.png";
import scroll from "./assets/scroll.gif";
import moon from "./assets/moon.png";

import Vanguard_Bags from "./assets/Vanguard_Bags.png";
import circle_with from "./assets/circle-with.png";
import circles from "./assets/circles.svg";
import spiral_galaxy from "./assets/spiral-galaxy.png";
import { Link } from "react-router-dom";
import loupe from "./loupe.png";

const AppBody = () => {
    return ( 
        <div className="container">

        <div className="logo">
			
			<Link to={'/'}><h3>ADVISORS</h3></Link>
			

			<div className="pos-f-t">
				<div className="collapse" id="navbarToggleExternalContent">
				  <div className="bg-dark p-4">
					<h4 className="text-white">Collapsed content</h4>
					<div className="links">
						<select>
							<option value="What We Do">What We Do</option>
							<option value="option 1">option 1</option>
							<option value="option 2">option 2</option>
						  </select>
						  <select>
							<option value="Who we are">Who we are</option>
							<option value="option 1">option 1</option>
							<option value="option 2">option 2</option>
						  </select>
						<Link to={'/'} style={{color: '#012b32'}}>FAQs</Link>
						<Link to={'/'} style={{color: '#012b32'}}>Contact Us</Link>
						<button className="loginbtn" style={{border:"none",borderRadius:"6px",marginTop:"5px"}}>login</button>
						<img className="imgserch" src={loupe} alt="search" height={"20px"}/>
					
					</div>
					
				  </div>
				</div>
				<nav className="navbar navbar-dark bg-dark">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				</nav>
			  </div>

		</div>

		<div className="links">
			<select>
				<option value="What We Do">What We Do</option>
				<option value="option 1">option 1</option>
				<option value="option 2">option 2</option>
			  </select>
			  <select>
				<option value="Who we are">Who we are</option>
				<option value="option 1">option 1</option>
				<option value="option 2">option 2</option>
			  </select>
			<Link to={'/'} style={{color: '#012b32'}}>FAQs</Link>
			<Link to={'/'} style={{color: '#012b32'}}>Contact Us</Link>
			<button className="loginbtn"  style={{border:"none",borderRadius:"6px",marginTop:"5px"}}>login</button>
			<img className="imgserch" src={loupe} alt="search" height="20px"/>
		
		</div>
                <div id="three" className="three">
                    <div className="three1">
                        <h1>Our one-stop solution</h1>
                        <h1>for your <span style={{color:"#7af1a2"}}>wealth</span> </h1>
                        <h1>management.</h1><br/>
                        
                        <p>Risk-management customized portfolios leveraging modern</p>
                        <p>technology with an asset allocation approach and smart beta<br/> overlay.</p>
                        <div className="btnContainer">
                            <button className="btn_booking">Book an appointment</button>
                            <button className="btn_contact"><i className="fa fa-phone"></i>+1(808) 111 - 1011</button>
                        </div>
                    </div>
                    <div className="three2">
                        <img className="moon" src={moon} alt="moon"/>
                        <img className="scrollicon" src={scroll} height={"50px"} width={"40px"} alt="scroll"/>
                    </div>

                </div>

                <div className="four">
                    <div id="firtElement" className="four1">
                        <h3>Our <br/>Partners</h3>
                    </div>
                    <div className="four2">
                        <img className="imgserch" src={line} alt="divider"/>
                    </div>
                    <div className="four3">
                        <img className="imgserch" src={altruistlogo} alt="partner"/>
                    </div>
                    <div className="four4">
                        <img className="imgserch" src={goldman} alt="partner"/>
                    </div>
                    <div className="four5">
                        <img className="imgserch" src={stratifi} alt="partner"/>
                    </div>
                    <div className="four6">
                        <img className="imgserch" src={rightcapital}  alt="partner"/>
                    </div>
                    <div className="four7">
                        <img className="imgserch" src={BlackRock_logo}  alt="partner"/>
                    </div>
                    <div className="four8">
                        <img className="imgserch" src={Vanguard_Bags}  alt="partner"/>
                    </div>

                </div>

                <div className="five" id="five">

                    <div className="five1">
                        <h2>A customized</h2><br/>
                        <h2>approuch to</h2><br/>
                        <h2 className="strategy">strategic investment</h2><br/>
                        <h2>Decision-making</h2>
                    </div>

                    <div className="five2">
                        <img className="imgserch" src={circles} alt="partner" width={"40px"} height={"40px"}/>
                        <h2>Risk Management</h2>
                        <p>We aim to empower investors with 
                            a clear understanding of risk management and
                            informed decision-making</p>
                    </div>

                    <div className="five3">
                        <img className="imgserch" src={circle_with}  alt="partner" width={"40px"} height={"40px"}/>
                        <h2>Low Fee</h2>
                        <p>We offer independent, fee-only services with unbiased
                            guidence to help achive your financial goals.</p>
                    </div>

                    <div className="five4">
                        <img className="imgserch" src={spiral_galaxy} alt="partner" width={"40px"} height={"40px"}/>
                        <h2>Smart Beta</h2>
                        <p>Our approuch efficiently tracks an
                            underlying index and optimizes
                            investment opportunities using active portfolio management techniques.</p>
                        
                    </div>

                </div>
        </div>
        
     );
}
 
export default AppBody;