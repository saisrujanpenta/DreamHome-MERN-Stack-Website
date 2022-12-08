import React, { useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Lexington() {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get('http://localhost:3000/fetch_property?city=Lexington')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.products);
            })

            .catch((err) => {
                console.log(err);
            })
    }
    const Headers = {
        color: "#100F0F",
        backgroundColor: "#F7F7F7",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
      };
    
      const Navbar = {
        textDecoration: 'none'
      }
    
      const Logo = {
        color: "purple",
        fontWeight: 'bold'
      }
    
      const paragraph = {
        color: "#100F0F",
        padding: "30px",
        fontFamily: "Arial",
    
      };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <br></br><br></br>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={Logo}>
          DreamHome
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link style={Navbar} to="/home">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link style={Navbar} to="/services">
            <li className="nav-item">
              <a className="nav-link active" href="/services"> Services </a>
            </li></Link>
            <Link style={Navbar} to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>

            <Link style={Navbar} to="/meet">
            <li className="nav-item">
              <a className="nav-link" href="#"> Meet Us </a>
            </li></Link>
            
            <a href="/user/login">
            <button class="logoutbtn" type="button">Logout</button></a>
            
            
          </ul>
        </div>
      </div>
      <br></br><br></br>
    </nav>





    <div className="Servicesheader">
        <h1>Lexington</h1>
        <p>The first battle of the American Revolution had been fought in Lexington, Massachusetts. Now it's all freedom they have!</p>
    </div><br></br><br></br>

    <div className='item-container'>
            {
            products.map((product) => {
                return(
                <div className='carddiv'>
                    <img className="dbimg" src = {process.env.PUBLIC_URL + product.image}></img>
                    <h3>{product.name}</h3>
                    <p>{product.Address}</p>
                    <button className='dbbutton'> Learn More</button>
                </div>
                )
            })}
        </div><br></br><br></br>

    {/* <div className="Teammealscard_wrapper">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house1.jpg"} />
        <Card.Body>
            <Card.Title>Backbay</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            
            </Card.Text>
            <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house2.jpg"} />
      <Card.Body>
        <Card.Title>Acorn Street</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington2">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house901.jpg"} />
      <Card.Body>
        <Card.Title>Charles</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington3">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house11.jpg"} />
      <Card.Body>
        <Card.Title>Cambridge</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington4">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>
    </div>

    <div className="Teammealscard_wrapper">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house111.jpg"} />
        <Card.Body>
            <Card.Title>Downtown</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            
            </Card.Text>
            <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house201.jpg"} />
      <Card.Body>
        <Card.Title>China Town</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house301.jpg"} />
      <Card.Body>
        <Card.Title>Massachusetts Avenue</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house401.jpg"} />
      <Card.Body>
        <Card.Title>Jamaica Plain</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>
    </div>

    <div className="Teammealscard_wrapper">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house501.jpg"} />
        <Card.Body>
            <Card.Title>Roxbury</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            
            </Card.Text>
            <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house601.jpg"} />
      <Card.Body>
        <Card.Title>Revere</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house701.jpg"} />
      <Card.Body>
        <Card.Title>South Bay</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house801.jpg"} />
      <Card.Body>
        <Card.Title>Carson</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          
        </Card.Text>
        <a href="/Lexington1">
            <Button className="descbtn" variant="light">Learn More</Button></a>
      </Card.Body>
    </Card>
    </div><br></br><br></br>

    <div className="footerservices">
    
    <h2>DreamHome</h2>

    <p>@ Copyright DreamHome 2022 - All Right Reserved.</p> <br></br>

  </div> */}
    </>
  )
}

export default Lexington